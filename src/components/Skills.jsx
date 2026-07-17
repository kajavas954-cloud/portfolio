import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Code2, MonitorPlay, Server, Database, BrainCircuit, Wrench, Sparkles } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code2,
    color: 'text-brand-purple border-brand-purple/20 bg-brand-purple/5',
    skills: ['Java', 'JavaScript', 'Python', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    title: 'Frontend',
    icon: MonitorPlay,
    color: 'text-brand-blue border-brand-blue/20 bg-brand-blue/5',
    skills: ['React', 'Redux Toolkit', 'Vite', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'text-rose-400 border-rose-400/20 bg-rose-400/5',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs'],
  },
  {
    title: 'Database',
    icon: Database,
    color: 'text-amber-400 border-amber-400/20 bg-amber-400/5',
    skills: ['MySQL', 'SQLite', 'SQLAlchemy'],
  },
  {
    title: 'Artificial Intelligence',
    icon: BrainCircuit,
    color: 'text-emerald-400 border-emerald-400/20 bg-emerald-400/5',
    skills: ['LangGraph', 'LangChain', 'Groq LLM', 'Prompt Engineering'],
  },
  {
    title: 'Tools & Workflow',
    icon: Wrench,
    color: 'text-cyan-400 border-cyan-400/20 bg-cyan-400/5',
    skills: ['Git', 'GitHub', 'Postman', 'VS Code'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 max-w-6xl mx-auto relative">
      {/* Decorative Blob */}
      <div className="absolute top-1/3 right-10 w-80 h-80 rounded-full bg-brand-blue/5 blur-[120px] pointer-events-none -z-10" />

      {/* Section Title */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-brand-blue font-medium text-sm tracking-wider uppercase mb-2"
        >
          <Layers className="w-4 h-4" />
          <span>Core Capabilities</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-white tracking-tight"
        >
          Technical Skills
        </motion.h2>
      </div>

      {/* Skills Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.div
              variants={cardVariants}
              key={index}
              className="glass p-6 rounded-2xl border border-white/5 glass-card-hover flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2.5 rounded-xl border ${category.color} flex items-center justify-center`}>
                    <Icon className="w-5.5 h-5.5" />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight">{category.title}</h3>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIndex) => (
                    <span
                      key={sIndex}
                      className="px-3 py-1.5 text-xs font-medium text-gray-300 bg-white/3 hover:bg-white/7 border border-white/5 hover:border-white/10 rounded-lg transition duration-200 cursor-default flex items-center gap-1 hover:text-white"
                    >
                      <Sparkles className="w-3 h-3 text-brand-purple/60" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
