import React from 'react';
import { motion } from 'framer-motion';
import { User, Rocket, Code2, BrainCircuit, HeartHandshake, Milestone } from 'lucide-react';

const stats = [
  { label: 'AI Projects Developed', value: '3+' },
  { label: 'Self-Learning Course Hours', value: '400+' },
  { label: 'Github Commits', value: '150+' },
];

const timeline = [
  {
    title: 'Full Stack Development Intern',
    period: 'August 2026',
    description: 'Interned at Codomax Digital Solutions. Developed a full-stack Blog Application with React.js, Node.js, Express.js, and MongoDB. Integrated CRUD REST APIs, managed database migrations using Mongoose, and debugged end-to-end workflows.',
    icon: Code2,
    color: 'text-rose-400 bg-rose-400/10',
  },
  {
    title: 'AI Development Exploration',
    period: '2025 – Present',
    description: 'Explored agentic AI frameworks such as LangGraph and LangChain. Integrated Groq LLM API and built advanced cognitive application architectures featuring entity extraction and next best action systems.',
    icon: BrainCircuit,
    color: 'text-brand-purple bg-brand-purple/10',
  },
  {
    title: 'Full Stack Development Journey',
    period: '2024 – 2025',
    description: 'Mastered frontend styling systems including Tailwind CSS, React, and Vite, while constructing backend REST APIs with Node.js/Express.js and Python/FastAPI.',
    icon: Code2,
    color: 'text-brand-blue bg-brand-blue/10',
  },
  {
    title: 'BCA Academic Milestones',
    period: '2023 – 2026',
    description: 'Pursuing Bachelor of Computer Applications at Srinivas University, focusing on Software Development, Web Design, and Database Management Systems (SQL).',
    icon: Rocket,
    color: 'text-emerald-400 bg-emerald-400/10',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 max-w-6xl mx-auto relative">
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-brand-purple/5 blur-[120px] pointer-events-none -z-10" />

      {/* Section Title */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-brand-purple font-medium text-sm tracking-wider uppercase mb-2"
        >
          <User className="w-4 h-4" />
          <span>Biography</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-white tracking-tight"
        >
          About Me
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Biography Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6"
        >
          <h3 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            Who is <span className="text-brand-purple">Shamith R. Kajava</span>?
          </h3>
          <p className="text-gray-300 leading-relaxed text-base">
            I am a passionate and dedicated Software Engineer specializing in Full Stack and AI Development. Graduating with a Bachelor of Computer Applications (BCA) in Software Development & Web Design, I have honed a strong foundation in algorithmic thinking, database architectures, and engineering principles.
          </p>
          <p className="text-gray-300 leading-relaxed text-base">
            My engineering philosophy centers on creating clean, intuitive interfaces backed by robust, high-performance server logic. I am highly intrigued by the potential of AI/LLM agents to optimize everyday workflows, which drives my research into cognitive frameworks like LangGraph and prompt design.
          </p>
          <p className="text-gray-300 leading-relaxed text-base">
            I actively seek opportunities to solve real-world problems, deliver end-to-end applications, and learn alongside high-performing developer teams. I am currently looking for <strong className="text-white">Full Stack, Frontend, Backend, or Software Engineer</strong> roles where I can make immediate, high-quality contributions.
          </p>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-3 gap-4 pt-6">
            {stats.map((stat, i) => (
              <div key={i} className="glass p-4 rounded-xl text-center border-white/5">
                <div className="text-xl font-bold text-white mb-1 text-gradient-cyan-blue">{stat.value}</div>
                <div className="text-xs text-gray-400 font-medium leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Timeline Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5"
        >
          <h3 className="text-2xl font-bold text-white tracking-tight mb-8 flex items-center gap-2">
            <Milestone className="w-5.5 h-5.5 text-brand-blue" />
            Development Journey
          </h3>

          <div className="relative border-l border-white/10 pl-6 space-y-8 ml-3">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  key={index}
                  className="relative"
                >
                  {/* Timeline Dot Icon */}
                  <span className={`absolute -left-[38px] top-0 p-1.5 rounded-full border border-white/10 glass shadow-md ${item.color}`}>
                    <Icon className="w-4 h-4" />
                  </span>
                  
                  {/* Timeline Content */}
                  <div>
                    <span className="text-xs font-semibold text-brand-purple tracking-widest uppercase">{item.period}</span>
                    <h4 className="text-lg font-bold text-white mt-1 mb-2 tracking-tight">{item.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
