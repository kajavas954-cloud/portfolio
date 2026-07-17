require('dotenv').config();
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS so the React frontend can contact this server
app.use(cors({
  origin: '*', // In production, replace with your frontend URL
  methods: ['POST', 'GET'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure Multer for in-memory file handling (saves storing temporary disk files)
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 20 * 1024 * 1024 // 20 MB file size limit
  }
});

// Root check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Secure contact backend is operational.' });
});

// POST endpoint for contact transmission
app.post('/api/contact', upload.single('file'), async (req, res) => {
  const { name, email, subject, message } = req.body;
  const file = req.file;

  // Server-side validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required fields.' });
  }

  // Load SMTP configurations from environment variables
  const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
  const smtpPort = parseInt(process.env.SMTP_PORT || '587');
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpUser || !smtpPass) {
    console.error('SMTP configuration missing: SMTP_USER and SMTP_PASS must be defined in environment.');
    return res.status(500).json({ error: 'Mail server credentials are not configured on the backend.' });
  }

  try {
    // Configure transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    });

    // Structure Email
    const mailOptions = {
      from: `"${name} (Portfolio)" <${smtpUser}>`, // Send as authenticated user, list sender name
      to: 'kajavas954@gmail.com', // User's email
      replyTo: email, // Direct reply to the sender's email
      subject: `[Portfolio] ${subject || 'New Contact Transmission'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px; background-color: #f9fafb;">
          <h2 style="color: #6d28d9; margin-top: 0;">New Contact Transmission</h2>
          <p style="margin-bottom: 20px; border-left: 4px solid #6d28d9; padding-left: 10px; font-style: italic; color: #4b5563;">
            Received from the portfolio contact form.
          </p>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 100px; color: #374151;">Name:</td>
              <td style="padding: 8px 0; color: #1f2937;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
              <td style="padding: 8px 0; color: #1f2937;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Subject:</td>
              <td style="padding: 8px 0; color: #1f2937;">${subject || 'N/A'}</td>
            </tr>
          </table>

          <div style="background-color: #ffffff; padding: 15px; border-radius: 6px; border: 1px solid #e5e7eb;">
            <h4 style="margin-top: 0; margin-bottom: 10px; color: #374151;">Message:</h4>
            <p style="margin: 0; color: #4b5563; white-space: pre-wrap; line-height: 1.5;">${message}</p>
          </div>

          ${file ? `
            <div style="margin-top: 20px; font-size: 12px; color: #6b7280; display: flex; align-items: center; gap: 6px;">
              <span>📎</span>
              <span><strong>Attachment:</strong> ${file.originalname} (${(file.size / (1024 * 1024)).toFixed(2)} MB)</span>
            </div>
          ` : ''}
          
          <footer style="margin-top: 30px; padding-top: 15px; border-top: 1px solid #e5e7eb; font-size: 11px; color: #9ca3af; text-align: center;">
            Sent automatically by the Portfolio backend server.
          </footer>
        </div>
      `,
      attachments: file ? [
        {
          filename: file.originalname,
          content: file.buffer
        }
      ] : []
    };

    // Dispatch email
    await transporter.sendMail(mailOptions);
    console.log(`Email successfully sent from ${email} to kajavas954@gmail.com`);
    
    return res.status(200).json({ success: true, message: 'Your message and attachment have been successfully sent.' });
  } catch (error) {
    console.error('Nodemailer error sending email:', error);
    return res.status(500).json({ error: `Mail transmission failed: ${error.message}` });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Secure contact backend running on port ${PORT}`);
});
