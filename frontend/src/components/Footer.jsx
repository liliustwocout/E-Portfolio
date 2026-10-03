import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-white/[0.08] bg-[#03050c]/90 backdrop-blur-xl py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          {/* Brand Info */}
          <div>
            <div className="font-display font-bold text-xl tracking-tight text-white flex items-center gap-2">
              Dat Le<span className="text-cyan-400">.dev</span>
            </div>
            <p className="text-xs text-slate-400 font-mono mt-1">
              Creative Full-Stack & 3D Web Application Developer
            </p>
          </div>

          {/* Operational Status */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>All systems operational & ready for work</span>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-medium text-slate-300 hover:text-white transition-all hover:scale-105"
          >
            <span>Back to top</span>
            <FiArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Bottom credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Dat Le. Designed & built with React 19, Three.js & Django REST.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/liliustwocout"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              GitHub
            </a>
            <span className="text-slate-600">•</span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-violet-400 transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-slate-600">•</span>
            <a
              href="mailto:liliusgamer@gmail.com"
              className="hover:text-cyan-400 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
