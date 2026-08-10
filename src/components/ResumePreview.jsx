import React from 'react';
import { motion } from 'framer-motion';
import { Award, FileText, Download, ExternalLink, Terminal, Cpu } from 'lucide-react';

export default function ResumePreview({ onDownloadClick }) {
  const handleDownload = () => {
    if (onDownloadClick) onDownloadClick();
    const link = document.createElement('a');
    link.href = '/shamith_resume.pdf';
    link.download = 'Shamith_Resume.pdf';
    link.click();
  };

  return (
    <section id="resume-section" className="py-24 px-4 max-w-6xl mx-auto relative">
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-brand-purple font-medium text-sm tracking-wider uppercase mb-2"
        >
          <FileText className="w-4 h-4" />
          <span>Curriculum Vitae</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-white tracking-tight"
        >
          Digital Resume
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Visual Mock Resume Sheet */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-8 bg-[#0b081e]/80 border border-white/5 p-6 md:p-8 rounded-2xl shadow-xl relative overflow-hidden group select-none hover:border-brand-purple/15 transition-all duration-300"
        >
          {/* Decorative stamp watermark */}
          <div className="absolute top-6 right-6 w-24 h-24 bg-white/2 rounded-full border border-white/5 flex items-center justify-center pointer-events-none transform rotate-12">
            <span className="font-mono text-[8px] text-gray-500 font-bold text-center leading-tight">KAJAVA.DEV<br />VERIFIED</span>
          </div>

          <div className="space-y-6 text-left">
            {/* Header Block */}
            <div className="border-b border-white/10 pb-5">
              <h3 className="text-2xl font-bold text-white tracking-tight">Shamith R. Kajava</h3>
              <span className="text-xs font-mono text-brand-purple uppercase tracking-wider block mt-1">Full Stack Developer | AI Developer | Software Engineer</span>
              
              <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[10px] text-gray-500 font-mono mt-3">
                <span>📍 Mangalore, Karnataka, India</span>
                <span>📞 +91 98807 86549</span>
                <span>✉️ kajavas954@gmail.com</span>
                <span>🔗 github.com/kajavas954-cloud</span>
              </div>
            </div>

            {/* Summary */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold font-mono text-brand-blue uppercase tracking-widest">Summary</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Motivated BCA graduate specializing in Software Development & Web Design with hands-on experience building full-stack web applications and AI-powered solutions. Skilled in React, FastAPI, Node.js, Express.js, Python, JavaScript, MySQL, and REST APIs. Seeking Software Engineer, Backend Developer, Frontend Developer, or Full Stack Developer roles.
              </p>
            </div>

            {/* Grid Split for Skills and Education */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Technical skills */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold font-mono text-brand-blue uppercase tracking-widest">Technical Skills</h4>
                <div className="space-y-1.5 text-[11px] text-gray-400">
                  <div><strong className="text-gray-300 font-mono">Frontend:</strong> React.js, JavaScript (ES6+), HTML5, CSS3.</div>
                  <div><strong className="text-gray-300 font-mono">Backend:</strong> Node.js, Express.js, REST APIs, JWT Authentication.</div>
                  <div><strong className="text-gray-300 font-mono">Database:</strong> MySQL, MongoDB (Basic).</div>
                  <div><strong className="text-gray-300 font-mono">Tools & Platforms:</strong> Git, GitHub, VS Code, Postman, npm.</div>
                </div>
              </div>

              {/* Education and Soft Skills */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="text-xs font-bold font-mono text-brand-blue uppercase tracking-widest">Education</h4>
                  <div className="text-[11px]">
                    <div className="font-bold text-gray-300">Bachelor of Computer Applications (BCA)</div>
                    <div className="text-gray-400 text-xs mt-0.5">Srinivas University (2023–2026)</div>
                    <div className="text-[10px] text-gray-500 font-mono">Software Development & Web Design</div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-xs font-bold font-mono text-brand-blue uppercase tracking-widest">Soft Skills</h4>
                  <p className="text-[10px] text-gray-400 font-mono leading-relaxed">
                    Problem Solving • Teamwork • Communication • Adaptability • Time Management • Quick Learner
                  </p>
                </div>
              </div>
            </div>

            {/* Work Experience */}
            <div className="space-y-2 pt-4 border-t border-white/5">
              <h4 className="text-xs font-bold font-mono text-brand-blue uppercase tracking-widest">Work Experience</h4>
              <div className="space-y-3 text-[11px] text-gray-400">
                <div>
                  <div className="flex justify-between items-start">
                    <span className="font-bold text-gray-200">Full Stack Development Intern</span>
                    <span className="text-[10px] text-gray-500 font-mono">August 2026 (1 Month)</span>
                  </div>
                  <div className="text-[10px] text-brand-purple font-mono">Codomax Digital Solutions</div>
                  <ul className="list-disc pl-4 text-[10px] text-gray-400 space-y-1 mt-1 leading-normal">
                    <li>Developed and enhanced a responsive React.js Blog Application and integrated it with a Node.js/Express.js backend.</li>
                    <li>Built REST APIs for authentication and blog CRUD operations and connected frontend workflows using Fetch API.</li>
                    <li>Migrated persistent storage to MongoDB using Mongoose, configured database connectivity, and verified data in MongoDB Compass.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Certifications summary */}
            <div className="space-y-2 pt-4 border-t border-white/5">
              <h4 className="text-xs font-bold font-mono text-brand-blue uppercase tracking-widest">Credentials Summary</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-1.5 text-[10px] text-gray-400 list-disc pl-4">
                <li>Codomax Solutions (Full Stack Internship & LOR)</li>
                <li>Infosys Springboard (Introduction to Python)</li>
                <li>Deloitte Technology Job Simulation (Data Analytics)</li>
                <li>Anthropic / Skilljar (Claude Code in Action)</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Actions and download guidelines */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-4 space-y-6 flex flex-col justify-center h-full min-h-[300px]"
        >
          <div className="glass p-6 rounded-2xl border border-white/5 space-y-4">
            <h3 className="text-lg font-bold text-white tracking-tight">Review Credentials</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              If you require a physical or offline copy of Shamith's resume for your ATS platform, recruitment folders, or client portfolios, you can download the print-ready PDF version directly.
            </p>
            
            <div className="space-y-3 pt-4">
              {/* Download Action */}
              <button
                onClick={handleDownload}
                className="w-full py-3 bg-gradient-to-r from-brand-purple to-brand-blue font-semibold text-white text-xs rounded-xl shadow-lg hover:shadow-brand-purple/10 hover:opacity-95 transition flex items-center justify-center gap-2 cursor-pointer border border-white/10"
              >
                <Download className="w-4 h-4" />
                Download Resume PDF
              </button>

              {/* Open in New Tab Action */}
              <a
                href="/shamith_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => onDownloadClick && onDownloadClick()}
                className="w-full py-3 bg-white/3 hover:bg-white/7 border border-white/5 rounded-xl font-semibold text-gray-300 hover:text-white text-xs transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <ExternalLink className="w-4 h-4" />
                Open PDF in New Tab
              </a>
            </div>
          </div>

          {/* Quick verification guidelines */}
          <div className="bg-slate-950/40 p-5 rounded-xl border border-white/5 flex gap-3.5 items-start">
            <div className="p-2 rounded bg-brand-purple/10 text-brand-purple mt-0.5">
              <Cpu className="w-4.5 h-4.5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white tracking-tight">Interactive Ledger Check</h4>
              <p className="text-[10px] text-gray-500 leading-normal mt-1">
                You can audit individual certification badges directly inside the "Qualifications" section below using verified ID verification numbers.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
