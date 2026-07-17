import React from 'react';
import { ArrowUp, Terminal } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    const el = document.getElementById('home');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-white/5 bg-slate-950/40 py-12 px-4 relative mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-2 text-base font-semibold text-white tracking-tight">
          <Terminal className="w-5 h-5 text-brand-purple" />
          <span>Shamith R. Kajava</span>
        </div>

        {/* Mid Copyright message */}
        <div className="text-xs text-gray-500 text-center font-mono">
          © {new Date().getFullYear()} Kajava.dev. All rights reserved.
          <span className="block md:inline md:ml-4 text-gray-600 mt-1 md:mt-0">
            Designed & Developed by Shamith R. Kajava
          </span>
        </div>

        {/* Scroll back to top */}
        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-xl border border-white/5 hover:border-brand-purple/20 bg-white/3 hover:bg-white/7 text-gray-400 hover:text-white transition flex items-center justify-center cursor-pointer group"
          title="Back to Top"
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
}
