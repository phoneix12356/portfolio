import React, { useState } from "react";
import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiExternalLink,
  FiCpu,
  FiLayout,
  FiDatabase,
} from "react-icons/fi";
import { motion } from "framer-motion";

const siteConfig = {
  name: "Kartikay Agarwal",
  title: "Full-Stack Developer",
  subTitle: "Web Application (MERN)",
  location: "Bela, Pratapgarh, India",
  email: "kartikayagarwal41@gmail.com",
  github: "https://github.com/phoneix12356",
  linkedin: "https://www.linkedin.com/in/kartikay-agarwal-289a68271/",
};

const projects = [
  {
    type: "Web Application (MERN)",
    status: "deployed",
    title: "MERN E-commerce",
    description:
      "A comprehensive full-stack e-commerce platform featuring secure authentication, real-time cart updates, and an intuitive admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "TailwindCSS"],
    link: "https://mern-ecomerce-33cc.vercel.app/",
  },
  {
    type: "Web Application (MERN)",
    status: "deployed",
    title: "AI Counsellor",
    description:
      "An AI-powered counseling web app delivering conversational mental health support, session logging and user state management.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Gemini"],
    link: "https://ai-counsellor-3ccp.vercel.app/",
  },
  {
    type: "Web Application (MERN)",
    status: "deployed",
    title: "Meru Internship — Invoice Create",
    description:
      "Invoice creation module built during Meru internship — supports invoice CRUD, client management, and PDF export. Part of a MERN stack project.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://meru-intership-m8ws.vercel.app/login",
  },
  {
    type: "Spring Boot",
    status: "not-deployed",
    title: "ChatterBox",
    description:
      "A real-time social networking microservice leveraging Spring Boot and WebSockets. Engineered for high scalability and instant multi-user notifications.",
    tech: ["Java", "Spring Boot", "WebSocket", "React", "PostgreSQL"],
    link: "https://github.com/phoneix12356/chatterbox",
  },
];

const skills = [
  {
    name: "Backend",
    icon: <FiCpu />,
    items: ["Java", "Spring Boot", "JPA/Hibernate", "Node.js"],
  },
  {
    name: "Frontend",
    icon: <FiLayout />,
    items: ["React", "JavaScript (ES6+)", "TailwindCSS", "Framer Motion"],
  },
  {
    name: "Database & Tools",
    icon: <FiDatabase />,
    items: ["MySQL", "PostgreSQL", "MongoDB", "Git", "REST APIs"],
  },
];

const App = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 font-sans selection:bg-indigo-500/30">
      {/* Dynamic Background */}
      <div className="fixed inset-0 bg-grid opacity-20 pointer-events-none" />
      <div className="fixed top-0 -left-4 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl" />
      <div className="fixed bottom-0 -right-4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />

      <header className="fixed top-0 inset-x-0 z-50 glass border-b border-white/5 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20">
              K
            </div>
            <span className="font-bold tracking-tight text-lg hidden sm:block">
              {siteConfig.name}
            </span>
          </motion.div>

          <nav className="flex items-center gap-4 sm:gap-6">
            <a
              href="#projects"
              className="text-sm font-medium hover:text-indigo-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-sm font-medium hover:text-indigo-400 transition-colors"
            >
              Skills
            </a>
            <div className="h-4 w-px bg-white/10 mx-1" />
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              className="text-white/60 hover:text-white transition-colors"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-white/60 hover:text-white transition-colors"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
          </nav>
        </div>
      </header>

      <main className="relative pt-32 pb-24 max-w-6xl mx-auto px-6">
        {/* Hero Section */}
        <section className="min-h-[70vh] flex flex-col justify-center mb-32">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6 border border-indigo-500/20">
              Available for Opportunities
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-[1.1]">
              Building digital <br />
              <span className="text-gradient">experiences</span> that scale.
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-slate-400 mb-10 leading-relaxed italic">
              "I translate complex backend logic into elegant, high-performance
              web applications using Java ecosystems and modern frontend
              frameworks."
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={`mailto:${siteConfig.email}`}
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold shadow-xl shadow-indigo-600/25 transition-all flex items-center gap-3"
              >
                <FiMail className="w-5 h-5" /> Let's Connect
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="px-8 py-4 glass text-white rounded-xl font-semibold transition-all hover:bg-white/10 flex items-center gap-3"
              >
                View Works
              </motion.a>
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-32">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-2">
                Portfolio
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold">
                Featured Projects
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredProject(idx)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative"
              >
                <div className="glass rounded-3xl p-8 h-full transition-all duration-500 group-hover:border-indigo-500/30 flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-xs font-medium text-slate-500 border border-white/5 px-3 py-1 rounded-full flex items-center gap-2">
                      <span>{project.type}</span>
                      <span
                        className={
                          project.status === "not-deployed"
                            ? "text-rose-400 text-[10px] font-semibold"
                            : "text-emerald-400 text-[10px] font-semibold"
                        }
                      >
                        {project.status === "not-deployed" ? "Not Deployed" : "Deployed"}
                      </span>
                    </span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-400 hover:text-indigo-400 transition-colors"
                    >
                      <FiExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                  <h4 className="text-2xl font-bold mb-4 group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-slate-400 mb-8 flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1.5 bg-white/5 rounded-lg border border-white/5 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-32">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <h2 className="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-2">
              Expertise
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Technical Arsenal
            </h3>
            <p className="text-slate-400 italic">
              "Technology is a tool; I specialize in choosing the right one for
              the job."
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="glass rounded-2xl p-8 hover:bg-white/5 transition-colors border border-white/5"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 text-xl">
                  {skill.icon}
                </div>
                <h4 className="text-xl font-bold mb-4">{skill.name}</h4>
                <ul className="space-y-3">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="text-slate-400 text-sm flex items-center gap-2"
                    >
                      <div className="w-1 h-1 rounded-full bg-indigo-500/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Contact Footer CTA */}
        <section className="relative glass rounded-[2.5rem] p-12 md:p-20 text-center overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[100px] -mr-32 -mt-32" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Ready to start a project?
            </h2>
            <p className="text-slate-400 mb-12 max-w-xl mx-auto text-lg leading-relaxed">
              I'm always open to discussing new projects, creative ideas or
              opportunities to be part of your visions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href={`mailto:${siteConfig.email}`}
                className="px-10 py-5 bg-white text-black hover:bg-slate-200 rounded-2xl font-bold transition-all w-full sm:w-auto"
              >
                Get in touch
              </a>
              <div className="flex items-center gap-6">
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 glass rounded-full hover:text-indigo-400 transition-colors"
                >
                  <FiGithub className="w-6 h-6" />
                </a>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 glass rounded-full hover:text-indigo-400 transition-colors"
                >
                  <FiLinkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-24 pt-8 border-t border-white/5 text-center text-sm text-slate-500">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-4">
            <p>
              © {new Date().getFullYear()} {siteConfig.name}. Designed for the
              web.
            </p>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />{" "}
                Available for work
              </span>
              <span>India Standard Time</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;