/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  ChevronDown, 
  Menu, 
  X,
  Code2,
  Palette,
  Terminal,
  Cpu
} from "lucide-react";
import { useState, useEffect } from "react";

const PROJECTS = [
  {
    title: "Smoke Test Sheet Automation",
    description: "A robust solution for automating smoke test sheet updates, seamlessly integrating CI/CD pipelines with Google Sheets for real-time synchronization.",
    tags: ["CI/CD", "JavaScript", "Automation"],
    link: "https://github.com/umar225/SmokeTestSheetAutomation",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    title: "Amber Loyalty Programme",
    description: "Quality assurance for Al Tayer Group's premium loyalty programme across various stores and malls.",
    tags: ["Exploratory Testing", "Test Planning", "QA"],
    link: "https://www.altayer.com/amber",
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    title: "Bloomingdale's UAE",
    description: "End-to-end testing for the luxury department store's digital presence in the Middle East.",
    tags: ["E2E Testing", "Exploratory Testing", "Retail"],
    link: "https://bloomingdales.ae/",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    title: "Bookado",
    description: "Rigorous testing for a platform focused on discovering tours, attractions, and activities.",
    tags: ["Black Box Testing", "Exploratory Testing", "Travel"],
    link: "https://bookado.co.uk/",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    title: "GAP UAE",
    description: "Ensuring a seamless shopping experience for GAP's regional retail platform through comprehensive testing.",
    tags: ["Black Box Testing", "Exploratory Testing", "E-commerce"],
    link: "https://www.gap.ae/",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    title: "Mamas & Papas",
    description: "Quality assurance for the leading baby products and parenting solutions brand.",
    tags: ["E2E Testing", "Exploratory Testing", "QA"],
    link: "https://mamasandpapas.ae/",
    image: "/images.png"
  },
  {
    title: "Vidivet",
    description: "Testing for a veterinary app connecting pet owners with trusted UK vets for reliable advice.",
    tags: ["Test Planning", "E2E Testing", "Healthcare"],
    link: "https://vidivet.com/vets",
    image: "https://picsum.photos/seed/pet/800/600"
  }
];

const SKILLS = [
  { category: "Automation", items: ["Selenium", "Playwright", "Cypress", "JavaScript"], icon: <Terminal className="w-5 h-5" /> },
  { category: "Testing", items: ["E2E Testing", "Exploratory Testing", "Black Box", "API Testing"], icon: <Cpu className="w-5 h-5" /> },
  { category: "DevOps", items: ["CI/CD Pipelines", "Git", "Docker", "Jenkins"], icon: <Code2 className="w-5 h-5" /> },
  { category: "Management", items: ["Test Planning", "Bug Reporting", "Jira", "TestRail"], icon: <Palette className="w-5 h-5" /> }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-bg text-fg selection:bg-white selection:text-black">
      {/* Navbar */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-4 glass" : "py-8 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.a 
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-sans font-bold tracking-tighter"
          >
            Umar Javed
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-sm uppercase tracking-widest text-muted hover:text-fg transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-fg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-bg pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl font-serif italic"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px]" />
          </div>

          <div className="relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <img 
                src="/IMG-20231226-WA0006.jpg" 
                alt="Umar Javed" 
                className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-2 border-white/10 mx-auto hover:scale-105 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-8xl font-sans font-bold mb-4 tracking-tighter"
            >
              Umar Javed
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-2xl text-muted max-w-2xl mx-auto font-light tracking-wide"
            >
              Software Engineer in Test delivering reliable software through precise automation and rigorous testing.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex gap-6 justify-center"
            >
              <a href="#contact" className="px-8 py-3 bg-fg text-bg rounded-full font-medium hover:bg-muted transition-colors">
                Get in touch
              </a>
              <a href="#projects" className="px-8 py-3 border border-white/20 rounded-full font-medium hover:bg-white/5 transition-colors">
                View work
              </a>
            </motion.div>
          </div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted"
          >
            <ChevronDown />
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="md:w-1/3">
                <h2 className="text-sm uppercase tracking-[0.3em] text-muted mb-4">About Me</h2>
                <div className="h-px w-12 bg-white/20" />
              </div>
              <div className="md:w-2/3">
                <p className="text-2xl md:text-3xl font-light leading-relaxed text-balance">
                  I specialize in building <span className="text-fg font-medium italic">automated testing frameworks</span> and <span className="text-fg font-medium italic">quality assurance pipelines</span>. 
                  My mission is to ensure software reliability through rigorous validation and precise automation.
                </p>
                <p className="mt-8 text-muted leading-relaxed">
                  With a deep focus on the software development lifecycle, I help teams deliver high-quality products faster. 
                  I believe that quality is not an afterthought, but a core component of the engineering process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 px-6 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="text-sm uppercase tracking-[0.3em] text-muted mb-4">Selected Works</h2>
                <h3 className="text-4xl md:text-5xl font-serif italic">Featured Projects</h3>
              </div>
              <a href="#" className="hidden md:flex items-center gap-2 text-muted hover:text-fg transition-colors">
                View all projects <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROJECTS.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative"
                >
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-white/5 mb-6">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-medium">{project.title}</h4>
                    <a href={project.link} className="p-2 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-muted text-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-widest px-2 py-1 bg-white/5 rounded-md text-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="text-sm uppercase tracking-[0.3em] text-muted mb-4">Expertise</h2>
              <h3 className="text-4xl md:text-5xl font-serif italic">Technical Skills</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {SKILLS.map((skill, i) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-6 text-fg">
                    {skill.icon}
                    <h4 className="text-lg font-medium tracking-tight">{skill.category}</h4>
                  </div>
                  <ul className="space-y-3">
                    {skill.items.map(item => (
                      <li key={item} className="text-muted font-light flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-white/20" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-6 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-sm uppercase tracking-[0.3em] text-muted mb-8">Get In Touch</h2>
            <h3 className="text-4xl md:text-6xl font-serif italic mb-12 tracking-tighter text-balance">
              Collaborate with me to build reliable, <br className="hidden md:block" /> high-quality digital experiences.
            </h3>
            
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              <a 
                href="mailto:umarjaved225@gmail.com" 
                className="flex items-center gap-3 text-2xl font-light hover:text-muted transition-colors"
              >
                <Mail className="w-6 h-6" /> umarjaved225@gmail.com
              </a>
              <div className="hidden md:block w-px h-8 bg-white/20" />
              <div className="flex gap-8">
                <a href="https://github.com/umar225" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-fg transition-colors"><Github /></a>
                <a href="https://www.linkedin.com/in/umar-javed/" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-fg transition-colors"><Linkedin /></a>
              </div>
            </div>

            <div className="mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted">
              <p>© 2026 Umar Javed. All rights reserved.</p>
              <div className="flex gap-8">
                <a href="#" className="hover:text-fg transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-fg transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
