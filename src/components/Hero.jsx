import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Send, Terminal } from 'lucide-react';
import { Github, Linkedin } from './CustomIcons';

const titles = [
  "Full Stack Developer.",
  "AI Developer.",
  "Software Engineer."
];

// Reusable Magnetic Button Component
const MagneticButton = ({ children, className, onClick, ...props }) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setOffset({ x: x * 0.15, y: y * 0.15 });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: 'spring', damping: 15, stiffness: 150 }}
      className={className}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default function Hero() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const typingSpeed = 90;
  const deletingSpeed = 45;
  const pauseDuration = 1800;

  useEffect(() => {
    let timer;
    const currentFullText = titles[currentTitleIndex] || titles[0] || '';

    if (!isDeleting) {
      if (displayText.length < currentFullText.length) {
        timer = setTimeout(() => {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => setIsDeleting(true), pauseDuration);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentFullText.slice(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTitleIndex]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden pt-24 px-4 group"
    >
      {/* Dynamic Mouse Follow Radial Glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 transition-opacity duration-300 group-hover:opacity-100 -z-10"
        style={{
          background: `radial-gradient(550px circle at ${mousePos.x}px ${mousePos.y}px, rgba(139, 92, 246, 0.08), transparent 85%)`
        }}
      />

      {/* Decorative Blur Blobs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-brand-purple/15 blur-[100px] animate-pulse-slow -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-brand-blue/15 blur-[130px] animate-pulse-slow -z-10" style={{ animationDelay: '5s' }} />

      <div className="max-w-4xl text-center z-10 flex flex-col items-center">
        {/* Modern floating tag */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full glass border-white/10 text-xs font-semibold tracking-wider text-brand-purple uppercase mb-6"
        >
          <Terminal className="w-4.5 h-4.5 animate-pulse" />
          <span>Open for Opportunities</span>
        </motion.div>

        {/* Name Header */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-4"
        >
          Shamith R. Kajava
        </motion.h1>

        {/* Dynamic Typing Title */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-2xl md:text-3xl font-medium h-12 flex items-center justify-center text-gray-300 font-display"
        >
          <span className="text-gradient-purple-blue font-bold">{displayText}</span>
          <span className="w-[3px] h-7 bg-brand-purple ml-1 animate-pulse" />
        </motion.h2>

        {/* Brief Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mt-4 mb-10"
        >
          BCA graduate specializing in Software Development & Web Design with experience building AI-powered applications and scalable full-stack web solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-lg mb-12"
        >
          <MagneticButton
            onClick={() => scrollTo('projects')}
            className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90 font-medium text-white rounded-xl shadow-lg hover:shadow-brand-purple/20 transition flex items-center justify-center gap-2 group cursor-pointer border border-white/10"
          >
            <span>View Projects</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </MagneticButton>
          
          <MagneticButton
            onClick={() => scrollTo('contact')}
            className="w-full sm:w-auto px-8 py-3.5 glass hover:bg-white/10 font-medium text-white rounded-xl transition flex items-center justify-center gap-2 cursor-pointer border border-white/5"
          >
            <Send className="w-4.5 h-4.5 text-brand-blue" />
            <span>Contact Me</span>
          </MagneticButton>

          <MagneticButton
            onClick={() => scrollTo('resume-section')}
            className="w-full sm:w-auto px-8 py-3.5 border border-white/10 hover:border-brand-purple/30 bg-white/3 hover:bg-white/6 font-medium text-gray-300 hover:text-white rounded-xl transition flex items-center justify-center gap-2 cursor-pointer"
          >
            <FileText className="w-4.5 h-4.5 text-brand-purple" />
            <span>Digital Resume</span>
          </MagneticButton>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center gap-6"
        >
          <a
            href="https://github.com/kajavas954-cloud"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-brand-purple hover:scale-110 transition duration-300"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/shamithrkajava"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-brand-blue hover:scale-110 transition duration-300"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-gray-300 transition cursor-pointer"
        onClick={() => scrollTo('about')}
      >
        <span className="text-xs uppercase tracking-widest font-semibold">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 border-2 border-gray-600 rounded-full flex justify-center p-1"
        >
          <div className="w-1 h-2 bg-brand-purple rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
