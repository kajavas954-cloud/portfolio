import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, ExternalLink, Terminal, ChevronRight, X, BrainCircuit, Activity, AlertTriangle, ShieldCheck, Cpu } from 'lucide-react';
import { Github } from './CustomIcons';

const projects = [
  {
    id: 1,
    title: 'AI-Powered CRM Co-Pilot for HCP Interactions',
    description: 'An AI-first CRM system built to optimize interactions between healthcare professionals (HCPs) and sales representatives. Incorporates intelligent conversation workflows, automated entity extraction, sentiment tracking, and predictive recommendation paths.',
    features: [
      'AI Chat Assistant: Interactive co-pilot suggesting dynamic call topics.',
      'Entity Extraction: Structured data capture from conversation notes.',
      'Sentiment Analysis: Real-time patient/HCP response scoring.',
      'Next Best Action: ML-based recommendations for follow-up schedules.',
      'FastAPI Backend: High-performance Python endpoint layer.',
      'React Dashboard: Fully responsive analytics view.'
    ],
    tech: ['React', 'FastAPI', 'LangGraph', 'Groq LLM', 'Tailwind CSS', 'SQLAlchemy'],
    github: 'https://github.com/kajavas954-cloud/hcp_project',
    demo: 'https://demo.com',
    visualizer: 'crm',
    details: {
      architecture: 'React (Client Context) ⇆ FastAPI WebSocket/REST API ⇆ LangGraph Agentic Framework ⇆ Groq LLM (Gemma 2-9B-IT)',
      database: 'SQLite/MySQL relational schema enforcing constraints on HCP Profiles, Interaction History logs, and Transcripts.',
      challenge: 'Recursive loops inside the multi-agent LangGraph network created high API latency and exceeded token limits during multi-message transcripts.',
      solution: 'Designed an in-memory sliding-window context compression buffer. It compiles and condenses historical state before relaying it to subsequent agent steps, cutting token load by 40% and keeping response latency below 800ms.'
    }
  },
  {
    id: 2,
    title: 'MediEase – Online Medicine Ordering & Delivery Platform',
    description: 'A comprehensive full-stack healthcare e-commerce and coordination system. Facilitates secure prescription medicine ordering, vendor management pipelines, appointment scheduling, and back-office store administration.',
    features: [
      'Secure Authentication: JWT-based user, admin, and delivery agent auth.',
      'Medicine Ordering: Shopping cart, search filtering, and order history.',
      'Admin Dashboard: Catalog controls, inventory warning systems, and revenue logs.',
      'Appointment Booking: Real-time scheduling calendar with doctors.',
      'MySQL Database: Relational schema handling transactions and bookings.',
      'Responsive UI: Fluid experience across small phones to desktops.'
    ],
    tech: ['React', 'Node.js', 'Express.js', 'MySQL', 'Bootstrap', 'REST APIs'],
    github: 'https://github.com/kajavas954-cloud/medease',
    demo: 'https://demo.com',
    visualizer: 'mediease',
    details: {
      architecture: 'React (State Routers) ⇆ Express.js Middleware ⇆ Connection Pooler ⇆ MySQL DBMS Schema',
      database: 'Highly normalized relational database utilizing foreign key constraints across User Accounts, Catalog Stocks, Bookings, and Transactions.',
      challenge: 'Concurrent users placing simultaneous medicine orders triggered transactional race conditions, leading to inventory discrepancies (negative stock counts).',
      solution: 'Configured transaction isolation levels to "Serializable" and implemented pessimistic row locking ("SELECT ... FOR UPDATE") in MySQL checkout queries, forcing execution queues to block and verify counts before updating stocks.'
    }
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 px-4 max-w-6xl mx-auto relative">
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-brand-purple/5 blur-[140px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-brand-purple font-medium text-sm tracking-wider uppercase mb-2"
        >
          <FolderGit2 className="w-4 h-4" />
          <span>Case Studies</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-white tracking-tight"
        >
          Featured Projects
        </motion.h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((proj, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            key={proj.id}
            className="glass rounded-2xl border border-white/5 flex flex-col justify-between overflow-hidden group hover:border-brand-purple/20 transition-all duration-300"
          >
            {/* Visualizer Display Panel */}
            <div className="h-48 bg-slate-950/80 border-b border-white/5 relative p-4 flex flex-col justify-between overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-brand-purple/10 to-transparent pointer-events-none" />
              
              {/* Header Bar */}
              <div className="flex items-center justify-between text-xs text-gray-500 z-10">
                <span className="flex items-center gap-1.5 font-mono">
                  <Terminal className="w-3.5 h-3.5 text-brand-purple" />
                  localhost:5173/{proj.visualizer}
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span className="font-mono text-[10px] text-emerald-400">active</span>
                </span>
              </div>

              {/* Dynamic Interactive UI */}
              <div className="my-auto flex flex-col justify-center items-center gap-2 z-10 w-full">
                {proj.visualizer === 'crm' ? (
                  <div className="w-full max-w-sm space-y-2 select-none">
                    {/* Simulated CRM Interface */}
                    <div className="flex items-center justify-between bg-white/5 p-2 rounded-lg border border-white/5">
                      <div className="flex items-center gap-2">
                        <BrainCircuit className="w-4 h-4 text-brand-purple" />
                        <span className="text-[11px] font-mono text-gray-300 font-semibold">CRM Co-Pilot</span>
                      </div>
                      <span className="text-[9px] px-2 py-0.5 rounded-full bg-brand-purple/20 text-brand-purple font-mono">Sentiment: Positive (0.87)</span>
                    </div>
                    {/* AI Message Stream */}
                    <div className="flex gap-2">
                      <div className="w-2/3 bg-brand-purple/10 p-2 rounded-lg border border-brand-purple/20 text-[10px] font-mono text-gray-300">
                        Suggesting follow-up next Tuesday at 3 PM...
                      </div>
                      <div className="w-1/3 bg-brand-blue/10 p-2 rounded-lg border border-brand-blue/20 text-[10px] font-mono text-right text-gray-300 ml-auto">
                        Drafting email context...
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="w-full max-w-sm space-y-2 select-none">
                    {/* Simulated MediEase Interface */}
                    <div className="flex items-center justify-between bg-white/5 p-2 rounded-lg border border-white/5">
                      <div className="flex items-center gap-2">
                        <Activity className="w-4 h-4 text-brand-blue" />
                        <span className="text-[11px] font-mono text-gray-300 font-semibold">MediEase Inventory</span>
                      </div>
                      <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono">DB Status: Connected</span>
                    </div>
                    {/* Catalog Grid Mock */}
                    <div className="grid grid-cols-3 gap-2">
                      {['Amoxicillin', 'Paracetamol', 'Metformin'].map((med, i) => (
                        <div key={i} className="bg-white/3 p-1.5 rounded border border-white/5 text-[9px] font-mono text-center text-gray-400">
                          {med}
                          <div className="text-[8px] text-brand-blue font-bold">Qty: {120 - i*20}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Badges footer */}
              <div className="flex gap-1.5 z-10">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-brand-purple transition duration-200">
                  {proj.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {proj.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {proj.tech.map((t, idx) => (
                    <span key={idx} className="text-[10px] font-semibold font-mono px-2.5 py-1 rounded bg-white/4 text-gray-300 border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <button
                  onClick={() => setSelectedProject(proj)}
                  className="flex items-center gap-1 text-xs font-semibold text-brand-purple hover:text-white transition duration-200 cursor-pointer"
                >
                  View Case Study
                  <ChevronRight className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-3">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 rounded-lg bg-white/3 hover:bg-white/7 border border-white/5 text-gray-400 hover:text-white transition cursor-pointer"
                    title="View GitHub Repository"
                  >
                    <Github className="w-4.5 h-4.5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Case Study Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-sm cursor-pointer"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="w-full max-w-2xl glass border border-white/10 rounded-2xl shadow-2xl relative overflow-hidden z-10"
            >
              <div className="h-1.5 bg-gradient-to-r from-brand-purple via-brand-blue to-emerald-400" />
              
              <div className="p-6 md:p-8 max-h-[85vh] overflow-y-auto">
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">{selectedProject.title}</h3>
                    <span className="text-xs font-mono text-gray-500 mt-1 block">Full Stack Case Study Profile</span>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-6 text-sm">
                  {/* Overview */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-brand-purple mb-2">Project Overview</h4>
                    <p className="text-gray-300 leading-relaxed">{selectedProject.description}</p>
                  </div>

                  {/* Architecture Overview */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-brand-blue flex items-center gap-1.5">
                      <Cpu className="w-4 h-4" />
                      Architecture Overview
                    </h4>
                    <div className="p-4 bg-slate-950/60 border border-white/5 rounded-xl font-mono text-xs text-gray-300 space-y-1.5">
                      <div><strong className="text-gray-400">Flow:</strong> {selectedProject.details.architecture}</div>
                      <div><strong className="text-gray-400">Schema:</strong> {selectedProject.details.database}</div>
                    </div>
                  </div>

                  {/* Challenge & Solution Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Challenge */}
                    <div className="p-4 rounded-xl border border-rose-500/10 bg-rose-500/3 space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
                        <AlertTriangle className="w-4 h-4" />
                        Challenges Faced
                      </h4>
                      <p className="text-xs text-gray-400 leading-relaxed">{selectedProject.details.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div className="p-4 rounded-xl border border-emerald-500/10 bg-emerald-500/3 space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4" />
                        Solutions Implemented
                      </h4>
                      <p className="text-xs text-gray-400 leading-relaxed">{selectedProject.details.solution}</p>
                    </div>
                  </div>

                  {/* Features Bullet List */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-300 mb-2.5">Key Capabilities</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                      {selectedProject.features.map((feat, idx) => {
                        const [title, desc] = feat.split(': ');
                        return (
                          <li key={idx} className="flex gap-2 text-gray-400">
                            <span className="text-brand-purple font-bold">✓</span>
                            <div className="text-xs">
                              <strong className="text-gray-300">{title}</strong>: {desc}
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex items-center justify-end gap-3 mt-8 pt-4 border-t border-white/5">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="px-4 py-2 text-xs font-semibold rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition flex items-center gap-1.5 cursor-pointer"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
