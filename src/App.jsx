import React, { useState, useEffect } from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GithubMetrics from './components/GithubMetrics';
import EducationCertifications from './components/EducationCertifications';
import ResumePreview from './components/ResumePreview';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Live Product Components
import AIAssistant from './components/AIAssistant';
import RecruiterTracker from './components/RecruiterTracker';

export default function App() {
  // Real-time Recruiter Analytics Metrics
  const [trackerStats, setTrackerStats] = useState({
    views: {
      home: false,
      about: false,
      skills: false,
      projects: false,
      resume: false,
      contact: false
    },
    clicks: 0,
    resumeDownloaded: false,
    chatMessages: 0,
    formSubmitted: false
  });

  // Track sections visible using IntersectionObserver
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'resume-section', 'contact'];
    const observers = [];

    sections.forEach((sectionId) => {
      const el = document.getElementById(sectionId);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTrackerStats((prev) => {
              const key = sectionId === 'resume-section' ? 'resume' : sectionId;
              if (prev.views[key]) return prev; // already recorded
              return {
                ...prev,
                views: {
                  ...prev.views,
                  [key]: true
                }
              };
            });
          }
        },
        { threshold: 0.2 } // Trigger when 20% visible
      );

      observer.observe(el);
      observers.push({ observer, el });
    });

    return () => {
      observers.forEach(({ observer, el }) => observer.unobserve(el));
    };
  }, []);

  // Utility tracker updaters
  const trackInteractionClick = () => {
    setTrackerStats((prev) => ({ ...prev, clicks: prev.clicks + 1 }));
  };

  const trackResumeDownloaded = () => {
    setTrackerStats((prev) => ({
      ...prev,
      clicks: prev.clicks + 1,
      resumeDownloaded: true
    }));
  };

  const trackChatQuery = () => {
    setTrackerStats((prev) => ({
      ...prev,
      clicks: prev.clicks + 1,
      chatMessages: prev.chatMessages + 1
    }));
  };

  const trackFormSuccess = () => {
    setTrackerStats((prev) => ({
      ...prev,
      clicks: prev.clicks + 1,
      formSubmitted: true
    }));
  };

  return (
    <div className="relative min-h-screen bg-[#030014] text-gray-100 overflow-x-hidden selection:bg-brand-purple/35 selection:text-white">
      {/* Dynamic Background Canvas */}
      <ParticleBackground />

      {/* Navigation Overlay */}
      <Navbar />

      {/* Recruiter Engagement Tracker Panel */}
      <RecruiterTracker trackerStats={trackerStats} />

      {/* AI Chat Assistant Co-Pilot Widget */}
      <AIAssistant onInteraction={trackChatQuery} />

      {/* Main Layout Sections */}
      <main className="relative z-10" onClick={trackInteractionClick}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GithubMetrics />
        <EducationCertifications />
        <ResumePreview onDownloadClick={trackResumeDownloaded} />
        <Contact onSuccess={trackFormSuccess} onInteraction={trackInteractionClick} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
