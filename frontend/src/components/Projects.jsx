import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiExternalLink,
  FiGithub,
  FiFolder,
  FiCode,
  FiLayers,
  FiStar,
  FiArrowUpRight,
} from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";

// Featured rich fallback projects that merge with backend API data
const FEATURED_PROJECTS = [
  {
    id: 1,
    title: "DevShare-Lite",
    category: "Full-Stack",
    description:
      "Nền tảng chia sẻ kiến thức IT & hỏi đáp cộng đồng. Bảo mật JWT, trình soạn thảo Markdown, hệ thống bình luận đa cấp (nested comments), phân loại tags thông minh và hệ thống profile cá nhân hoàn chỉnh.",
    link: "https://github.com/liliusgamer/DevShare-Lite",
    demo: "https://devshare-lite.demo",
    tags: ["Django REST", "React", "PostgreSQL", "JWT", "Tailwind CSS"],
    imageGradient: "from-cyan-500/20 via-blue-600/20 to-purple-600/20",
    badge: "Featured / Production Ready",
    stats: { stars: 12, forks: 4 },
  },
  {
    id: 2,
    title: "Spatial 3D Canvas Portfolio",
    category: "3D & Creative",
    description:
      "Trải nghiệm portfolio 3D tương tác sử dụng React Three Fiber & Three.js. Hệ thống vật thể phản hồi mượt mà theo cuộn trang (scroll progress), particle nebula 3D và tối ưu 60 FPS mượt mà.",
    link: "https://github.com/liliustwocout/E-Portfolio",
    demo: "http://localhost:5173",
    tags: ["React 19", "Three.js", "R3F", "Framer Motion", "Tailwind CSS"],
    imageGradient: "from-purple-600/20 via-fuchsia-500/20 to-pink-500/20",
    badge: "Interactive 3D Web",
    stats: { stars: 24, forks: 8 },
  },
  {
    id: 3,
    title: "CyberPulse Realtime Dashboard",
    category: "Full-Stack",
    description:
      "Bảng điều khiển giám sát hệ thống thời gian thực với biểu đồ phân tích tương tác, xác thực người dùng bảo mật, thông báo đẩy và phân tích chỉ số backend trực quan.",
    link: "https://github.com/liliustwocout",
    demo: "#",
    tags: ["Django", "React", "Recharts", "WebSockets", "Redis"],
    imageGradient: "from-emerald-500/20 via-teal-600/20 to-cyan-600/20",
    badge: "Realtime Analytics",
    stats: { stars: 18, forks: 5 },
  },
  {
    id: 4,
    title: "CloudFlow REST API Engine",
    category: "Backend Systems",
    description:
      "Microservice backend API chuyên xử lý dữ liệu tải cao, hỗ trợ phân trang cursor, bộ lọc linh hoạt, tài liệu OpenAPI Swagger chuẩn chỉnh và kiểm thử tự động toàn diện.",
    link: "https://github.com/liliustwocout",
    demo: "#",
    tags: ["Python 3.11", "Django DRF", "PostgreSQL", "Docker", "PyTest"],
    imageGradient: "from-amber-500/20 via-orange-600/20 to-red-600/20",
    badge: "High-Performance Backend",
    stats: { stars: 15, forks: 3 },
  },
];

export default function Projects() {
  const [projects, setProjects] = useState(FEATURED_PROJECTS);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(false);

  // Fetch real projects from Django backend
  useEffect(() => {
    async function loadBackendProjects() {
      try {
        setLoading(true);
        const res = await fetch("http://127.0.0.1:8000/api/projects/");
        if (res.ok) {
          const apiData = await res.json();
          if (Array.isArray(apiData) && apiData.length > 0) {
            // Merge backend projects with featured metadata
            const merged = apiData.map((item, index) => {
              const fallback = FEATURED_PROJECTS[index] || FEATURED_PROJECTS[0];
              return {
                id: item.id || index + 1,
                title: item.title,
                category: fallback.category || "Full-Stack",
                description: item.description,
                link: item.link || fallback.link,
                demo: fallback.demo || item.link,
                tags: fallback.tags || ["Django", "React"],
                imageGradient: fallback.imageGradient,
                badge: fallback.badge || "Live Project",
                stats: fallback.stats || { stars: 8, forks: 2 },
              };
            });

            // Combine unique items
            const extraFeatured = FEATURED_PROJECTS.filter(
              (fp) => !merged.some((m) => m.title.toLowerCase() === fp.title.toLowerCase())
            );
            setProjects([...merged, ...extraFeatured]);
          }
        }
      } catch (err) {
        console.warn("Using offline portfolio project fixtures", err);
      } finally {
        setLoading(false);
      }
    }

    loadBackendProjects();
  }, []);

  const categories = ["All", "Full-Stack", "3D & Creative", "Backend Systems"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative min-h-screen py-24 px-6">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-4">
              <HiSparkles className="w-3.5 h-3.5" />
              <span>SHOWCASE & CASE STUDIES</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight">
              Featured{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="mt-3 text-slate-400 text-sm md:text-base max-w-xl">
              Mỗi sản phẩm là sự kết hợp chỉn chu giữa tư duy kiến trúc backend và trải nghiệm giao diện người dùng sống động.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl glass-card border border-white/10 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-300 ${
                  filter === cat
                    ? "bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-glow-cyan/30"
                    : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid with 3D Hover & Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative rounded-3xl glass-card border border-white/[0.08] hover:border-cyan-500/40 p-6 md:p-8 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:shadow-glow-cyan/20"
              >
                {/* Background Ambient Glow */}
                <div
                  className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${project.imageGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                <div className="relative z-10">
                  {/* Top Bar: Category badge & External Links */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
                      <FiFolder className="w-3.5 h-3.5" />
                      {project.badge || project.category}
                    </span>

                    <div className="flex items-center gap-2">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View Source Code"
                          className="w-9 h-9 rounded-xl bg-white/[0.05] hover:bg-white/[0.12] border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-300 transition-all hover:scale-105"
                        >
                          <FiGithub className="w-4 h-4" />
                        </a>
                      )}
                      {project.demo && project.demo !== "#" && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Open Live Demo"
                          className="w-9 h-9 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/30 flex items-center justify-center text-cyan-300 hover:text-white transition-all hover:scale-105"
                        >
                          <FiArrowUpRight className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Visual Preview Banner with Cyber Grid */}
                  <div className="relative h-44 rounded-2xl bg-[#090e1f] border border-white/5 overflow-hidden p-5 flex flex-col justify-between mb-6 group-hover:border-cyan-500/30 transition-colors">
                    <div className="cyber-bg-grid absolute inset-0 opacity-40" />
                    
                    {/* Floating 3D Geometric Preview Icon */}
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.08] backdrop-blur-md border border-white/10 flex items-center justify-center text-cyan-400">
                        <FiCode className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono text-slate-400 bg-black/40 px-2.5 py-1 rounded-full border border-white/5 backdrop-blur-md">
                        {project.category}
                      </span>
                    </div>

                    <div className="relative z-10">
                      <div className="font-display font-bold text-lg md:text-xl text-white group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-xs md:text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags Bottom */}
                <div className="relative z-10 pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono text-slate-300 bg-white/[0.04] border border-white/5 px-2.5 py-1 rounded-lg group-hover:border-white/15 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Chi tiết</span>
                    <FiArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
