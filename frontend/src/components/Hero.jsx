import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiGithub, FiTerminal, FiLayers, FiCpu } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-6 overflow-hidden"
    >
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border border-cyan-500/30 text-xs md:text-sm font-medium text-cyan-300 mb-8 shadow-glow-cyan/20"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>Available for Full-Stack & 3D Engineering roles</span>
            <HiSparkles className="w-4 h-4 text-cyan-400 ml-0.5" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.08] text-white max-w-4xl"
          >
            Crafting{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent text-glow-cyan">
              Hyper-Fluid
            </span>{" "}
            3D Web & Modern{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-purple-300 bg-clip-text text-transparent text-glow-purple">
              Full-Stack
            </span>{" "}
            Systems.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-slate-300 text-base sm:text-xl max-w-2xl font-light leading-relaxed"
          >
            Hi, I'm <strong className="text-white font-medium">Dat Le</strong>. I engineer high-performance web applications combining cutting-edge 3D visuals with scalable Django & React architectures.
          </motion.p>

          {/* Call-to-action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <button
              onClick={() => scrollTo("projects")}
              className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 shadow-glow-cyan hover:shadow-glow-purple transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>Explore My Works</span>
              <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 glass-card border border-white/10 hover:border-cyan-400/40 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>Contact Me</span>
            </button>

            <a
              href="https://github.com/liliustwocout"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-300 glass-card border border-white/10 hover:border-violet-500/40 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <FiGithub className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </motion.div>

          {/* Quick Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl"
          >
            {[
              { label: "Frontend", desc: "React 19 & Three.js", icon: FiLayers, color: "text-cyan-400" },
              { label: "Backend", desc: "Django REST & Python", icon: FiTerminal, color: "text-emerald-400" },
              { label: "Performance", desc: "60+ FPS Fluid Motion", icon: FiCpu, color: "text-purple-400" },
              { label: "Architecture", desc: "Full-Stack & Cloud", icon: HiSparkles, color: "text-amber-400" },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="glass-card p-4 rounded-xl text-left border border-white/[0.07] hover:border-white/20 transition-all duration-300 group"
                >
                  <Icon className={`w-5 h-5 ${stat.color} mb-2 group-hover:scale-110 transition-transform`} />
                  <div className="font-display font-bold text-sm text-white">{stat.label}</div>
                  <div className="text-[11px] text-slate-400 font-mono mt-0.5">{stat.desc}</div>
                </div>
              );
            })}
          </motion.div>

          {/* Scroll Down Prompt */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            onClick={() => scrollTo("about")}
            className="mt-16 flex flex-col items-center gap-2 cursor-pointer group"
          >
            <span className="text-[11px] uppercase tracking-widest font-mono text-slate-400 group-hover:text-cyan-400 transition-colors">
              Scroll to discover 3D experience
            </span>
            <div className="w-5 h-9 rounded-full border-2 border-slate-500/50 group-hover:border-cyan-400 flex items-start justify-center p-1 transition-colors">
              <motion.div
                animate={{ y: [0, 14, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-cyan-400"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
