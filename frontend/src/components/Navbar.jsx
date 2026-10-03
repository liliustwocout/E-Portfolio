import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiMenu, FiX, FiCode } from "react-icons/fi";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const scrollPosition = window.scrollY + 260;
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 py-4 md:py-6 transition-all duration-300">
      <div
        className={`w-full max-w-6xl flex items-center justify-between px-5 md:px-8 py-3 rounded-2xl transition-all duration-300 ${
          scrolled
            ? "glass-nav shadow-glass border border-white/10 bg-[#060914]/80 backdrop-blur-xl"
            : "bg-transparent border border-transparent"
        }`}
      >
        {/* Brand / Logo */}
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2.5 text-left group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-violet-600 flex items-center justify-center text-white shadow-glow-cyan text-sm font-bold group-hover:scale-105 transition-transform">
            <FiCode className="w-5 h-5" />
          </div>
          <div>
            <div className="font-display font-bold text-base md:text-lg tracking-tight bg-gradient-to-r from-white via-slate-200 to-cyan-300 bg-clip-text text-transparent">
              Dat Le<span className="text-cyan-400">.dev</span>
            </div>
            <div className="text-[10px] uppercase font-mono tracking-widest text-slate-400 hidden sm:block">
              Full-Stack & 3D Web
            </div>
          </div>
        </button>

        {/* Desktop Nav Links with Framer Motion animated active indicator */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.04] p-1.5 rounded-full border border-white/10 backdrop-blur-md">
          {sections.map((sec) => {
            const isActive = activeSection === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => scrollTo(sec.id)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors ${
                  isActive ? "text-white font-semibold" : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/25 via-violet-500/30 to-purple-600/30 rounded-full border border-cyan-400/30 shadow-[0_0_12px_rgba(0,240,255,0.25)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{sec.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Action Icons & CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/liliustwocout"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="w-9 h-9 rounded-xl bg-white/[0.05] hover:bg-white/[0.12] border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-300 transition-all hover:scale-105"
          >
            <FiGithub className="w-4 h-4" />
          </a>
          <button
            onClick={() => scrollTo("contact")}
            className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 shadow-glow-cyan hover:shadow-glow-purple transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Let's Talk
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2.5 rounded-xl bg-white/[0.06] border border-white/10 text-slate-200"
          >
            {mobileMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 bg-[#0a0e1e]/95 border border-white/10 backdrop-blur-2xl rounded-2xl p-6 shadow-2xl flex flex-col gap-3 md:hidden z-50"
          >
            {sections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => scrollTo(sec.id)}
                className={`py-2 px-4 rounded-xl text-left text-sm font-medium ${
                  activeSection === sec.id
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                    : "text-slate-300 hover:bg-white/[0.05]"
                }`}
              >
                {sec.label}
              </button>
            ))}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <a
                href="https://github.com/liliustwocout"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-slate-400 hover:text-cyan-300"
              >
                <FiGithub className="w-4 h-4" /> GitHub
              </a>
              <button
                onClick={() => scrollTo("contact")}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-violet-600 shadow-glow-cyan"
              >
                Let's Talk
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
