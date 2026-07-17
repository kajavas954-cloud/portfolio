import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Info } from 'lucide-react';
import { Github, Linkedin } from './CustomIcons';

export default function Contact({ onSuccess, onInteraction }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [fileError, setFileError] = useState(null);
  const [submitError, setSubmitError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    if (onInteraction) onInteraction();
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateFile = (selectedFile) => {
    setFileError(null);
    if (!selectedFile) return true;

    const maxSize = 20 * 1024 * 1024; // 20 MB limit
    if (selectedFile.size > maxSize) {
      setFileError('File size exceeds the 20 MB limit.');
      return false;
    }

    const allowedExtensions = ['.pdf', '.doc', '.docx', '.txt', '.zip', '.rar', '.xls', '.xlsx', '.ppt', '.pptx'];
    const fileExtension = selectedFile.name.substring(selectedFile.name.lastIndexOf('.')).toLowerCase();
    
    if (!allowedExtensions.includes(fileExtension)) {
      setFileError(`Unsupported file format. Allowed formats: ${allowedExtensions.join(', ')}`);
      return false;
    }

    return true;
  };

  const handleFileChange = (e) => {
    if (onInteraction) onInteraction();
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (validateFile(selectedFile)) {
        setFile(selectedFile);
      } else {
        setFile(null);
      }
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (onInteraction) onInteraction();
    const selectedFile = e.dataTransfer.files[0];
    if (selectedFile) {
      if (validateFile(selectedFile)) {
        setFile(selectedFile);
      } else {
        setFile(null);
      }
    }
  };

  const clearFile = () => {
    setFile(null);
    setFileError(null);
    const input = document.getElementById('file-input');
    if (input) input.value = '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    if (fileError) return;
    if (onInteraction) onInteraction();

    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(null);

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('subject', formData.subject);
    formDataToSend.append('message', formData.message);
    if (file) {
      formDataToSend.append('file', file);
    }

    const apiUrl = '/api/contact';

    fetch(apiUrl, {
      method: 'POST',
      body: formDataToSend,
    })
      .then(async (response) => {
        const contentType = response.headers.get('content-type');
        let data = null;
        
        if (contentType && contentType.includes('application/json')) {
          data = await response.json();
        } else {
          const errorText = await response.text();
          throw new Error(errorText || `HTTP error! Status: ${response.status}`);
        }

        if (!response.ok) {
          throw new Error(data?.error || 'Server transmission failed.');
        }
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setFile(null);
        setFileError(null);
        setSubmitError(null);
        
        // Trigger dashboard success tracking callback
        if (onSuccess) onSuccess();
      })
      .catch((err) => {
        console.error('Submission error:', err);
        setSubmitError(err.message || 'Failed to connect to the backend server. Please verify the mail server is active.');
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-24 px-4 max-w-6xl mx-auto relative">
      <div className="absolute top-1/3 left-10 w-96 h-96 rounded-full bg-brand-purple/5 blur-[150px] pointer-events-none -z-10" />

      {/* Section Title */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-brand-purple font-medium text-sm tracking-wider uppercase mb-2"
        >
          <Mail className="w-4 h-4" />
          <span>Inquiries</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-white tracking-tight"
        >
          Send a Transmission
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        {/* Contact Info Details */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col justify-between space-y-8"
        >
          <div>
            <h3 className="text-2xl font-bold text-white tracking-tight">Let's talk!</h3>
            <p className="text-gray-400 text-sm mt-2 leading-relaxed">
              Have an exciting project idea, a position to fill, or just want to chat about AI-powered software design? Drop a message and let's construct something awesome together.
            </p>
          </div>

          <div className="space-y-4 flex-1 flex flex-col justify-center">
            {/* Email card */}
            <a
              href="mailto:kajavas954@gmail.com"
              onClick={() => onInteraction && onInteraction()}
              className="glass p-4 rounded-xl border border-white/5 flex items-center gap-4 hover:border-brand-purple/15 transition-all duration-300"
            >
              <div className="p-3 rounded-lg bg-brand-purple/10 text-brand-purple flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="truncate">
                <span className="text-[10px] text-gray-500 font-mono block">EMAIL</span>
                <span className="text-sm font-semibold text-white truncate block">kajavas954@gmail.com</span>
              </div>
            </a>

            {/* Phone card */}
            <a
              href="tel:+919880786549"
              onClick={() => onInteraction && onInteraction()}
              className="glass p-4 rounded-xl border border-white/5 flex items-center gap-4 hover:border-brand-blue/15 transition-all duration-300"
            >
              <div className="p-3 rounded-lg bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-gray-500 font-mono block">PHONE</span>
                <span className="text-sm font-semibold text-white block">+91 98807 86549</span>
              </div>
            </a>

            {/* Address card */}
            <div className="glass p-4 rounded-xl border border-white/5 flex items-center gap-4 hover:border-emerald-400/15 transition-all duration-300">
              <div className="p-3 rounded-lg bg-emerald-400/10 text-emerald-400 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] text-gray-500 font-mono block">LOCATION</span>
                <span className="text-sm font-semibold text-white block">Mangalore, Karnataka, India</span>
              </div>
            </div>
          </div>

          {/* Social connections */}
          <div className="flex gap-4 items-center">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onInteraction && onInteraction()}
              className="p-3 rounded-xl bg-white/3 hover:bg-white/7 border border-white/5 text-gray-400 hover:text-white transition duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onInteraction && onInteraction()}
              className="p-3 rounded-xl bg-white/3 hover:bg-white/7 border border-white/5 text-gray-400 hover:text-white transition duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <div className="glass p-6 md:p-8 rounded-2xl border border-white/5 relative overflow-hidden h-full">
            {/* Professional Success Animation Overlay */}
            <AnimatePresence>
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-[#060412]/95 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center z-20 border border-emerald-500/25"
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
                    className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 flex items-center justify-center mb-4"
                  >
                    <CheckCircle2 className="w-8 h-8 animate-bounce" />
                  </motion.div>
                  
                  <motion.h3
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl font-bold text-white tracking-tight mb-2 font-display"
                  >
                    Transmission Sent Successfully
                  </motion.h3>
                  
                  <motion.p
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-xs text-gray-400 max-w-sm leading-relaxed mb-6"
                  >
                    Thank you. The mail server has successfully compiled and delivered your message package along with the attached document file.
                  </motion.p>

                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    onClick={() => setSubmitSuccess(false)}
                    className="px-6 py-2.5 text-xs font-semibold rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white transition cursor-pointer shadow-lg shadow-emerald-500/10"
                  >
                    Close Log
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-4" onClick={() => onInteraction && onInteraction()}>
              {/* Name & Email Group */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-gray-400 font-mono">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-950/50 border border-white/5 focus:border-brand-purple/40 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition duration-200"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-gray-400 font-mono">Your Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-950/50 border border-white/5 focus:border-brand-purple/40 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition duration-200"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-semibold text-gray-400 font-mono">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-slate-950/50 border border-white/5 focus:border-brand-purple/40 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition duration-200"
                  placeholder="What is this regarding?"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-gray-400 font-mono">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-slate-950/50 border border-white/5 focus:border-brand-purple/40 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none transition duration-200 resize-none"
                  placeholder="Write your transmission..."
                />
              </div>

              {/* File Upload Zone */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-400 font-mono">Attachment (Optional, max 20MB)</label>
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`border border-dashed rounded-xl p-4 text-center cursor-pointer transition duration-200 ${
                    isDragging
                      ? 'border-brand-purple bg-brand-purple/5 shadow-[0_0_15px_rgba(139,92,246,0.15)]'
                      : 'border-white/10 bg-slate-950/30 hover:border-white/20'
                  }`}
                  onClick={() => document.getElementById('file-input').click()}
                >
                  <input
                    type="file"
                    id="file-input"
                    className="hidden"
                    accept=".pdf,.doc,.docx,.txt,.zip,.rar,.xls,.xlsx,.ppt,.pptx"
                    onChange={handleFileChange}
                  />
                  
                  {!file ? (
                    <div className="space-y-1">
                      <div className="text-xs font-semibold text-gray-300">
                        <span className="text-brand-purple">Click to upload</span> or drag and drop
                      </div>
                      <div className="text-[10px] text-gray-500 font-mono">
                        PDF, DOC, DOCX, TXT, ZIP up to 20MB
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between bg-white/5 px-3 py-2 rounded-lg border border-white/5 text-left">
                      <div className="flex items-center gap-2 truncate pr-4">
                        <span className="text-brand-purple text-base">📎</span>
                        <div className="truncate">
                          <div className="text-xs font-bold text-white truncate">{file.name}</div>
                          <div className="text-[10px] text-gray-500 font-mono">{(file.size / (1024 * 1024)).toFixed(2)} MB</div>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          clearFile();
                        }}
                        className="text-[10px] font-semibold text-rose-400 hover:text-rose-300 transition px-2 py-1 rounded bg-rose-500/10 border border-rose-500/10 cursor-pointer shrink-0"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>
                
                {fileError && (
                  <div className="text-xs text-rose-400 font-mono mt-1">
                    ⚠️ {fileError}
                  </div>
                )}
              </div>

              {/* Error Alert */}
              <AnimatePresence>
                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="p-3 bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs rounded-xl flex items-center gap-2"
                  >
                    <span>⚠️</span>
                    <span>{submitError}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-gradient-to-r from-brand-purple to-brand-blue font-medium text-white rounded-xl shadow-lg hover:shadow-brand-purple/20 transition flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Broadcasting Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4.5 h-4.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
