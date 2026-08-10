import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, GraduationCap, Calendar, Landmark, CheckCircle2, X, ExternalLink, ShieldCheck } from 'lucide-react';

const certifications = [
  {
    title: 'Software Engineering Job Simulation',
    issuer: 'JPMorgan Chase & Co. – Forage',
    id: 'rqssB76i4yFXyK2fc',
    date: '13 July 2026',
    skills: 'Software Engineering, System Design, Git, Object Oriented Programming',
    color: 'border-brand-purple/20 bg-brand-purple/5 text-brand-purple',
    gradient: 'from-purple-500/20 to-indigo-500/20',
    fileUrl: '/certificates/jpmorgan_software_engineering.pdf',
  },
  {
    title: 'Data Analytics Job Simulation',
    issuer: 'Deloitte – Forage',
    id: 'FKeWjTpv3KqEeQyGk',
    date: '24 May 2026',
    skills: 'Data Analysis, Forensic Technology, Data Visualization, Analytical Thinking',
    color: 'border-brand-blue/20 bg-brand-blue/5 text-brand-blue',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    fileUrl: '/certificates/deloitte_data_analytics.pdf',
  },
  {
    title: 'Introduction to Python',
    issuer: 'Infosys Springboard',
    id: 'Not displayed on certificate',
    date: '08 August 2024',
    skills: 'Python Programming, Core Syntax, Algorithms, Problem Solving',
    color: 'border-amber-400/20 bg-amber-400/5 text-amber-400',
    gradient: 'from-amber-500/20 to-orange-500/20',
    fileUrl: '/certificates/infosys_python.pdf',
  },
  {
    title: 'Claude Code in Action',
    issuer: 'Anthropic / Skilljar',
    id: '8fks3rxwjowx',
    date: '18 May 2026',
    skills: 'AI Tooling, Claude Code CLI, Prompting, Code Generation Pipelines',
    color: 'border-rose-400/20 bg-rose-400/5 text-rose-400',
    gradient: 'from-rose-500/20 to-red-500/20',
    fileUrl: '/certificates/claude_code_in_action.pdf',
  },
  {
    title: 'GenAI Powered Data Analytics Job Simulation',
    issuer: 'Tata – Forage',
    id: 'WcbsJPaudApCvxYY3',
    date: '06 May 2026',
    skills: 'Generative AI, Exploratory Data Analysis, Risk Profiling, Predictive Modeling',
    color: 'border-emerald-400/20 bg-emerald-400/5 text-emerald-400',
    gradient: 'from-emerald-500/20 to-teal-500/20',
    fileUrl: '/certificates/tata_genai_analytics.pdf',
  },
  {
    title: 'UX Design Advanced Job Simulation',
    issuer: 'Lloyds Banking Group – Forage',
    id: 'rYSNjHzamKBEuDqpB',
    date: '06 May 2026',
    skills: 'UX Design, Wireframing, Prototyping, Customer Value Proposition',
    color: 'border-cyan-400/20 bg-cyan-400/5 text-cyan-400',
    gradient: 'from-cyan-500/20 to-sky-500/20',
    fileUrl: '/certificates/lloyds_ux_design.pdf',
  },
  {
    title: 'Full Stack Development Internship Completion & Letter of Recommendation',
    issuer: 'Codomax Digital Solutions',
    id: 'COD-INT-2026-08',
    date: 'August 2026',
    skills: 'React.js, Node.js, Express.js, MongoDB, Mongoose, REST APIs, Git, GitHub',
    color: 'border-emerald-400/20 bg-emerald-400/5 text-emerald-400',
    gradient: 'from-emerald-500/20 to-teal-500/20',
    fileUrl: '/certificates/codomax_recommendation.pdf',
  },
];

export default function EducationCertifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="education-certs" className="py-24 px-4 max-w-6xl mx-auto relative">
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none -z-10" />

      {/* Section Title */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-brand-purple font-medium text-sm tracking-wider uppercase mb-2"
        >
          <Award className="w-4 h-4" />
          <span>Qualifications</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-white tracking-tight"
        >
          Education & Certifications
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        {/* Left Column: Education */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col"
        >
          <h3 className="text-2xl font-bold text-white tracking-tight mb-8 flex items-center gap-2">
            <GraduationCap className="w-6.5 h-6.5 text-brand-purple" />
            Education
          </h3>

          <div className="glass p-6 md:p-8 rounded-2xl border border-white/5 flex-1 flex flex-col justify-between relative group hover:border-brand-purple/20 transition duration-300">
            {/* Corner visual flare */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-brand-purple/10 rounded-bl-3xl border-b border-l border-brand-purple/15 flex items-center justify-center opacity-70 group-hover:opacity-100 transition duration-300">
              <Landmark className="w-5 h-5 text-brand-purple" />
            </div>

            <div className="space-y-6">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-xs font-semibold text-brand-purple tracking-wide mb-4">
                  <Calendar className="w-3.5 h-3.5" />
                  2023 – 2026
                </span>
                <h4 className="text-xl font-bold text-white tracking-tight leading-snug">
                  Bachelor of Computer Applications
                </h4>
                <p className="text-gray-400 font-medium text-sm mt-1">
                  Specializing in Software Development & Web Design
                </p>
              </div>

              <div className="border-t border-white/5 pt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="p-1 rounded bg-brand-blue/10 text-brand-blue mt-0.5">
                    <CheckCircle2 className="w-4.5 h-4.5" />
                  </span>
                  <div>
                    <strong className="text-gray-300 text-sm font-semibold block">University:</strong>
                    <span className="text-gray-400 text-sm">Srinivas University, Mukka Campus</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="p-1 rounded bg-brand-purple/10 text-brand-purple mt-0.5">
                    <CheckCircle2 className="w-4.5 h-4.5" />
                  </span>
                  <div>
                    <strong className="text-gray-300 text-sm font-semibold block">Key Coursework:</strong>
                    <span className="text-gray-400 text-sm">Data Structures, Database Management, Web Technologies, Java & Python Programming, UI Design.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 text-xs text-gray-500 font-mono flex items-center justify-between">
              <span>Grade status: Outstanding</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Certifications */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col justify-between"
        >
          <h3 className="text-2xl font-bold text-white tracking-tight mb-8 flex items-center gap-2">
            <Award className="w-6.5 h-6.5 text-brand-blue" />
            Certifications
          </h3>

          <div className="space-y-4 max-h-[460px] overflow-y-auto pr-2 scrollbar-thin">
            {certifications.map((cert, index) => (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className="glass p-4 rounded-xl border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-brand-purple/15 transition-all duration-300"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-0.5 text-[9px] font-bold tracking-wider rounded border uppercase font-mono ${cert.color}`}>
                      {cert.issuer.split(' ')[0]}
                    </span>
                    <h4 className="text-sm font-bold text-white tracking-tight">{cert.title}</h4>
                  </div>
                  <p className="text-[11px] text-gray-400 leading-relaxed max-w-md">
                    <strong className="text-gray-300 font-semibold font-mono">Skills:</strong> {cert.skills}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedCert(cert)}
                  className="px-3.5 py-1.5 rounded-lg border border-white/5 hover:border-brand-purple/20 bg-white/3 hover:bg-white/7 text-xs font-semibold text-gray-300 hover:text-white transition text-center shrink-0 self-start sm:self-auto cursor-pointer"
                >
                  Verify Badge
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Certification Verification Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-sm cursor-pointer"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-lg glass border border-white/10 rounded-2xl shadow-2xl relative overflow-hidden z-10 p-6 md:p-8"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                    <ShieldCheck className="w-5.5 h-5.5 text-emerald-400" />
                    Credential Verification
                  </h3>
                  <span className="text-xs font-mono text-gray-500 mt-1 block">Audit log details verified via third-party</span>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition cursor-pointer"
                >
                  <X className="w-4.5 h-4.5" />
                </button>
              </div>

              {/* Certificate Details */}
              <div className="space-y-4 mb-6">
                <div className="grid grid-cols-3 gap-2 border-b border-white/5 pb-3 text-xs">
                  <span className="text-gray-400 font-mono">1) Name:</span>
                  <span className="col-span-2 text-white font-semibold">{selectedCert.title}</span>
                </div>
                
                <div className="grid grid-cols-3 gap-2 border-b border-white/5 pb-3 text-xs">
                  <span className="text-gray-400 font-mono">2) ID Number:</span>
                  <span className="col-span-2 text-emerald-400 font-mono font-bold tracking-wider">{selectedCert.id}</span>
                </div>

                {/* Visual Card / Document Preview */}
                <div className="mt-6">
                  <span className="text-[10px] font-mono text-gray-500 block mb-2">3) Show Certificate</span>
                  
                  {selectedCert.fileUrl ? (
                    /* Interactive PDF embed / Open option */
                    <div className="space-y-3">
                      <div className={`relative rounded-xl p-4 border border-white/10 bg-gradient-to-br ${selectedCert.gradient} flex flex-col justify-between min-h-[140px]`}>
                        <div className="font-mono text-[9px] text-gray-400 uppercase tracking-widest">
                          {selectedCert.issuer} Credentials
                        </div>
                        <div className="my-2">
                          <div className="text-sm font-bold text-white tracking-tight leading-snug">{selectedCert.title}</div>
                          <div className="text-[10px] text-gray-400 mt-1 font-mono">ID: {selectedCert.id}</div>
                        </div>
                        <div className="text-[9px] text-emerald-400 font-bold font-mono">PDF DOCUMENT ATTACHED</div>
                      </div>
                      
                      <a
                        href={selectedCert.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs transition flex items-center justify-center gap-1.5 cursor-pointer shadow-lg shadow-emerald-500/10"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Open Certificate PDF
                      </a>
                    </div>
                  ) : (
                    /* Fallback Mock Digital Badge (for JPMorgan where PDF is not in files) */
                    <div className={`relative rounded-xl p-6 border border-white/10 overflow-hidden bg-gradient-to-br ${selectedCert.gradient} flex flex-col justify-between min-h-[180px]`}>
                      <div className="absolute top-0 right-0 w-24 h-24 bg-white/3 rounded-full blur-2xl pointer-events-none" />
                      
                      <div className="flex justify-between items-start">
                        <div className="font-mono text-[8px] text-gray-400">
                          {selectedCert.issuer.toUpperCase()}
                        </div>
                        <span className="text-xl">🏆</span>
                      </div>

                      <div className="my-4">
                        <div className="text-[9px] text-gray-400 font-mono">THIS IS PRESENTED TO</div>
                        <div className="text-base font-bold text-white tracking-tight mt-0.5">Shamith Kajava</div>
                        <div className="text-[9px] text-gray-300/80 leading-normal mt-1 max-w-[280px]">
                          For successfully completing practical simulation tasks in <strong className="text-white">{selectedCert.skills}</strong>.
                        </div>
                      </div>

                      <div className="flex justify-between items-end border-t border-white/10 pt-3 text-[9px] text-gray-400 font-mono">
                        <div>
                          <span>ISSUED: </span>
                          <span className="text-white font-bold">{selectedCert.date}</span>
                        </div>
                        <div className="text-right">
                          <span>STATUS: </span>
                          <span className="text-emerald-400 font-bold">VERIFIED</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="flex justify-end gap-2 pt-2 border-t border-white/5">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition cursor-pointer"
                >
                  Close Log
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
