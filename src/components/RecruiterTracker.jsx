import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, X, Eye, MousePointerClick, Download, MessageSquare, Send, Check } from 'lucide-react';

export default function RecruiterTracker({ trackerStats }) {
  const [isOpen, setIsOpen] = useState(false);

  // Compute Interest Score
  const computeInterestScore = () => {
    let score = 0;
    
    // 1. Sections viewed (max 6 sections, 8 points each = 48 points)
    const viewedCount = Object.values(trackerStats.views).filter(Boolean).length;
    score += viewedCount * 8;

    // 2. Click interactions (5 points each, cap at 15 points)
    score += Math.min(trackerStats.clicks * 5, 15);

    // 3. AI chat messages (8 points each, cap at 16 points)
    score += Math.min(trackerStats.chatMessages * 8, 16);

    // 4. Resume downloaded (12 points)
    if (trackerStats.resumeDownloaded) score += 12;

    // 5. Contact form submitted (20 points)
    if (trackerStats.formSubmitted) score += 20;

    return Math.min(score, 100);
  };

  const score = computeInterestScore();

  const getInterestLevel = (scoreVal) => {
    if (scoreVal >= 90) return { label: 'Hire Immediately!', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' };
    if (scoreVal >= 60) return { label: 'Hot Candidate', color: 'text-brand-purple bg-brand-purple/10 border-brand-purple/20' };
    if (scoreVal >= 30) return { label: 'Warm Inquiry', color: 'text-brand-blue bg-brand-blue/10 border-brand-blue/20' };
    return { label: 'Evaluating...', color: 'text-gray-400 bg-white/5 border-white/5' };
  };

  const level = getInterestLevel(score);

  return (
    <>
      {/* Floating Trigger Icon */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-40 p-4 rounded-full bg-slate-950 border border-white/10 text-brand-purple shadow-xl hover:scale-105 transition cursor-pointer flex items-center justify-center"
        whileTap={{ scale: 0.95 }}
      >
        <BarChart3 className="w-6 h-6 animate-pulse" />
      </motion.button>

      {/* Analytics Drawer Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: -50 }}
            className="fixed bottom-24 left-6 z-40 w-[95%] max-w-sm glass border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col p-6"
          >
            {/* Header */}
            <div className="flex items-start justify-between border-b border-white/5 pb-4 mb-5">
              <div>
                <h4 className="text-sm font-bold text-white tracking-tight flex items-center gap-1.5">
                  <BarChart3 className="w-5 h-5 text-brand-purple" />
                  Your Session Analytics
                </h4>
                <span className="text-[10px] text-gray-500 font-mono">Privacy-friendly recruiter insights</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition cursor-pointer"
              >
                <X className="w-4.5 h-4.5" />
              </button>
            </div>

            {/* Interest score slider */}
            <div className="mb-6 p-4 bg-slate-950/40 border border-white/5 rounded-xl text-center">
              <div className="text-xs font-semibold text-gray-400 font-mono mb-1">INTEREST INDEX</div>
              <div className="text-3xl font-extrabold text-white tracking-tight text-gradient-purple-blue mb-2">{score}%</div>
              
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden mb-3 border border-white/5">
                <div
                  className="h-full bg-gradient-to-r from-brand-purple to-brand-blue rounded-full transition-all duration-300"
                  style={{ width: `${score}%` }}
                />
              </div>

              <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold border uppercase font-mono ${level.color}`}>
                {level.label}
              </span>
            </div>

            {/* Metrics List */}
            <div className="space-y-3.5 text-xs">
              {/* Sections Scrolled */}
              <div className="flex items-center justify-between border-b border-white/3 pb-2 text-gray-400">
                <span className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-brand-blue" />
                  Sections Audited
                </span>
                <span className="font-mono text-white font-bold">
                  {Object.values(trackerStats.views).filter(Boolean).length}/6
                </span>
              </div>

              {/* Interaction Clicks */}
              <div className="flex items-center justify-between border-b border-white/3 pb-2 text-gray-400">
                <span className="flex items-center gap-2">
                  <MousePointerClick className="w-4 h-4 text-brand-purple" />
                  Interaction Clicks
                </span>
                <span className="font-mono text-white font-bold">{trackerStats.clicks}</span>
              </div>

              {/* Chat Queries */}
              <div className="flex items-center justify-between border-b border-white/3 pb-2 text-gray-400">
                <span className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-cyan-400" />
                  AI Chat Queries
                </span>
                <span className="font-mono text-white font-bold">{trackerStats.chatMessages}</span>
              </div>

              {/* Resume Downloaded */}
              <div className="flex items-center justify-between border-b border-white/3 pb-2 text-gray-400">
                <span className="flex items-center gap-2">
                  <Download className="w-4 h-4 text-amber-400" />
                  CV Downloaded
                </span>
                {trackerStats.resumeDownloaded ? (
                  <span className="text-emerald-400 font-bold flex items-center gap-1 font-mono">
                    <Check className="w-3.5 h-3.5" /> YES
                  </span>
                ) : (
                  <span className="font-mono text-gray-600">NO</span>
                )}
              </div>

              {/* Form Transmission */}
              <div className="flex items-center justify-between text-gray-400">
                <span className="flex items-center gap-2">
                  <Send className="w-4 h-4 text-rose-400" />
                  Form Transmitted
                </span>
                {trackerStats.formSubmitted ? (
                  <span className="text-emerald-400 font-bold flex items-center gap-1 font-mono">
                    <Check className="w-3.5 h-3.5" /> SENT
                  </span>
                ) : (
                  <span className="font-mono text-gray-600">PENDING</span>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
