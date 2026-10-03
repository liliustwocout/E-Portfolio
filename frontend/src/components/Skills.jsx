import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiLayers,
  FiServer,
  FiTool,
  FiCheckCircle,
  FiZap,
  FiBox,
} from "react-icons/fi";
import {
  SiReact,
  SiThreedotjs,
  SiTailwindcss,
  SiDjango,
  SiPython,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiVite,
  SiJavascript,
} from "react-icons/si";

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend & 3D Creative",
    icon: FiLayers,
    color: "from-cyan-500 to-blue-600",
    glowColor: "rgba(0, 240, 255, 0.25)",
    description:
      "Crafting immersive, fluid, 60 FPS interfaces with modern React, Three.js shaders, and responsive design systems.",
    skills: [
      { name: "React 19 & Next.js", level: 92, icon: SiReact, tag: "Core" },
      { name: "Three.js & R3F", level: 88, icon: SiThreedotjs, tag: "3D Graphics" },
      { name: "Tailwind CSS", level: 95, icon: SiTailwindcss, tag: "Styling" },
      { name: "Framer Motion", level: 90, icon: FiZap, tag: "Animation" },
      { name: "JavaScript / ES6+", level: 94, icon: SiJavascript, tag: "Language" },
      { name: "Vite & Tooling", level: 90, icon: SiVite, tag: "Bundler" },
    ],
  },
  {
    id: "backend",
    title: "Backend & Systems Architecture",
    icon: FiServer,
    color: "from-purple-500 to-indigo-600",
    glowColor: "rgba(147, 51, 234, 0.25)",
    description:
      "Architecting clean, scalable RESTful APIs, relational databases, security authentication, and performant server runtimes.",
    skills: [
      { name: "Django & DRF", level: 93, icon: SiDjango, tag: "Framework" },
      { name: "Python 3.11+", level: 92, icon: SiPython, tag: "Language" },
      { name: "PostgreSQL & SQLite", level: 86, icon: SiPostgresql, tag: "Database" },
      { name: "JWT Auth & Security", level: 88, icon: FiCheckCircle, tag: "Auth" },
      { name: "RESTful API Design", level: 94, icon: FiServer, tag: "APIs" },
      { name: "ORM & Optimization", level: 87, icon: FiTool, tag: "Data" },
    ],
  },
  {
    id: "tools",
    title: "DevOps & Engineering Tools",
    icon: FiTool,
    color: "from-emerald-500 to-teal-600",
    glowColor: "rgba(16, 185, 129, 0.25)",
    description:
      "Empowered with modern development workflows, containerization, version control, and continuous deployment.",
    skills: [
      { name: "Git & GitHub Workflows", level: 94, icon: SiGit, tag: "VCS" },
      { name: "Docker & Containerization", level: 82, icon: SiDocker, tag: "DevOps" },
      { name: "Postman & API Testing", level: 90, icon: FiTool, tag: "Testing" },
      { name: "Linux / PowerShell", level: 86, icon: FiTool, tag: "Environments" },
    ],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <section id="about" className="relative min-h-screen py-24 px-6">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-4">
            <FiZap className="w-3.5 h-3.5" />
            <span>CORE EXPERTISE & TECH STACK</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight">
            Specialized in{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 bg-clip-text text-transparent">
              High-Impact
            </span>{" "}
            Technologies
          </h2>
          <p className="mt-4 text-slate-400 text-sm md:text-base leading-relaxed">
            Bridging the gap between interactive 3D frontend visual design and rock-solid, production-ready backend infrastructure.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex p-1.5 rounded-2xl glass-card border border-white/10 gap-2">
            {skillCategories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-white/10 text-white shadow-glow-cyan/20 border border-white/15"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{cat.title.split(" ")[0]}</span>
                  <span className="sm:hidden">{cat.title.split(" ")[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const isHighlighted = activeTab === category.id;
            const CategoryIcon = category.icon;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className={`glass-card rounded-2xl p-6 relative overflow-hidden transition-all duration-500 border ${
                  isHighlighted
                    ? "border-cyan-500/40 ring-1 ring-cyan-500/20 shadow-glow-cyan/20"
                    : "border-white/[0.08] hover:border-white/20"
                }`}
              >
                {/* Glow accent in background */}
                <div
                  className="absolute -top-16 -right-16 w-36 h-36 rounded-full blur-3xl pointer-events-none opacity-30"
                  style={{ background: category.glowColor }}
                />

                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-tr ${category.color} text-white shadow-lg`}>
                    <CategoryIcon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    {category.skills.length} Technologies
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-slate-400 text-xs md:text-sm mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill List with Mini Progress Bars */}
                <div className="space-y-3.5">
                  {category.skills.map((skill, sIdx) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div key={sIdx} className="group">
                        <div className="flex items-center justify-between text-xs mb-1.5">
                          <div className="flex items-center gap-2 text-slate-200 group-hover:text-cyan-300 transition-colors">
                            <SkillIcon className="w-3.5 h-3.5 text-cyan-400" />
                            <span className="font-medium">{skill.name}</span>
                          </div>
                          <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/5">
                            {skill.tag}
                          </span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.1 * sIdx, ease: "easeOut" }}
                            className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
