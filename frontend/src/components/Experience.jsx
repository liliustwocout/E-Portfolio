import React from "react";
import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";

const experiences = [
  {
    role: "Senior Full-Stack & 3D Web Engineer",
    company: "Tech Innovation Hub",
    period: "2023 — Present",
    location: "Ho Chi Minh City, Vietnam",
    type: "Full-time",
    description:
      "Chủ trì phát triển các giải pháp Web tương tác 3D và hệ thống API Django REST hiệu năng cao, phục vụ hàng chục ngàn người dùng hoạt động.",
    achievements: [
      "Tối ưu hóa pipeline Three.js và React 19, duy trì chỉ số khung hình 60 FPS ổn định trên cả thiết bị di động.",
      "Xây dựng kiến trúc REST API & caching với Django + Redis, cắt giảm độ trễ phản hồi trung bình 45%.",
      "Thiết lập CI/CD pipeline tự động hóa kiểm thử và triển khai với Docker và GitHub Actions.",
    ],
    skills: ["React 19", "Three.js", "Django REST", "Docker", "PostgreSQL", "Tailwind CSS"],
    accentColor: "from-cyan-400 to-blue-500",
  },
  {
    role: "Full-Stack Developer",
    company: "Digital Studio & Solutions",
    period: "2021 — 2023",
    location: "Remote",
    type: "Full-time",
    description:
      "Phát triển các ứng dụng thương mại điện tử, hệ thống quản trị dữ liệu và giao diện web hiện đại với React và Python backend.",
    achievements: [
      "Xây dựng hơn 10+ giao diện web responsive đạt điểm Google Lighthouse trên 95.",
      "Thiết kế cơ sở dữ liệu quan hệ tối ưu hóa câu truy vấn, hỗ trợ thanh toán bảo mật và JWT authentication.",
      "Đóng góp nâng cấp hệ thống thư viện UI nội bộ tái sử dụng cho 5 dự án khách hàng lớn.",
    ],
    skills: ["React", "Python", "REST APIs", "Tailwind", "Git", "Framer Motion"],
    accentColor: "from-violet-400 to-purple-600",
  },
  {
    role: "Frontend & Web Creative Intern",
    company: "Creative Labs",
    period: "2020 — 2021",
    location: "Ho Chi Minh City, Vietnam",
    type: "Internship",
    description:
      "Tiếp cận và xây dựng các animation web sáng tạo, responsive layout và tích hợp API từ backend team.",
    achievements: [
      "Triển khai giao diện landing page với micro-interactions và hiệu ứng scroll mượt mà.",
      "Tham gia kiểm thử giao diện chéo trình duyệt (Cross-browser testing) và cải thiện khả năng tiếp cận (Accessibility).",
    ],
    skills: ["JavaScript", "HTML5/CSS3", "React Basics", "UI/UX Design"],
    accentColor: "from-emerald-400 to-teal-500",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative min-h-screen py-24 px-6">
      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-4">
            <FiBriefcase className="w-3.5 h-3.5" />
            <span>CAREER PATH & EXPERIENCE</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight">
            Work Experience &{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 bg-clip-text text-transparent">
              Milestones
            </span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm md:text-base leading-relaxed">
            Hành trình thực chiến qua các sản phẩm công nghệ từ giao diện người dùng sống động tới kiến trúc backend vững chắc.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 md:pl-10 border-l border-white/10 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Glowing Timeline Marker Node */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-[#05070f] border-2 border-cyan-400 flex items-center justify-center shadow-glow-cyan">
                <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
              </div>

              {/* Experience Card */}
              <div className="glass-card rounded-3xl p-6 md:p-8 border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-300 hover:shadow-glow-cyan/10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                  <div>
                    <h3 className="font-display font-bold text-xl md:text-2xl text-white group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-cyan-400 font-medium text-sm md:text-base mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-slate-400">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] border border-white/5">
                      <FiCalendar className="w-3.5 h-3.5 text-cyan-400" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] border border-white/5">
                      <FiMapPin className="w-3.5 h-3.5 text-violet-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-5">
                  {exp.description}
                </p>

                {/* Key Achievements */}
                <div className="space-y-2.5 mb-6">
                  {exp.achievements.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-slate-300">
                      <FiCheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Skills tags */}
                <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-2">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs font-mono text-slate-300 bg-white/[0.04] border border-white/5 px-2.5 py-1 rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
