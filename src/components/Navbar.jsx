import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, Cpu, User, Layers, FolderGit2, Award, Mail } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home', icon: Cpu },
  { id: 'about', label: 'About', icon: User },
  { id: 'skills', label: 'Skills', icon: Layers },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'education-certs', label: 'Education & Certs', icon: Award },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section finder
      const scrollPosition = window.scrollY + 200;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl rounded-2xl transition-all duration-300 ${
          isScrolled ? 'glass shadow-lg shadow-black/30' : 'bg-transparent border-transparent'
        }`}
      >
        <div className="px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => scrollTo('home')}
            className="flex items-center gap-2 text-xl font-bold tracking-tight text-white hover:opacity-80 transition cursor-pointer"
          >
            <Terminal className="w-6 h-6 text-brand-purple" />
            <span>Shamith R. Kajava</span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition duration-200 cursor-pointer flex items-center gap-1.5 ${
                    isActive ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-brand-purple/10 border border-brand-purple/20 rounded-lg -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <Icon className={`w-4 h-4 ${isActive ? 'text-brand-purple' : 'text-gray-400'}`} />
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white transition cursor-pointer"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 w-[95%] glass shadow-2xl rounded-2xl z-40 md:hidden overflow-hidden border border-white/10"
          >
            <div className="p-4 flex flex-col gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left text-base transition-colors ${
                      isActive ? 'bg-brand-purple/15 text-white font-semibold border-l-4 border-brand-purple' : 'text-gray-300 hover:bg-white/5'
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? 'text-brand-purple' : 'text-gray-400'}`} />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
