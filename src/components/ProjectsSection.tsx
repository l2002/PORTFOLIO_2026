import { useState } from 'react';
import { motion } from 'motion/react';
import { Play, Youtube, ExternalLink, Github, Sparkles, Layers, Maximize2 } from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function ProjectsSection() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] glow-orb-2 rounded-full pointer-events-none blur-3xl opacity-40" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full glass-pill text-rose-300 text-xs font-bold uppercase tracking-wider mb-3 border border-rose-500/20"
          >
            <Youtube className="w-3.5 h-3.5 text-rose-400" />
            Dự Án Nổi Bật
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-white mb-3"
          >
            Video Demo & Trải Nghiệm Thực Tế
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-400 font-medium max-w-xl mx-auto text-sm sm:text-base"
          >
            Xem trực tiếp video minh họa dự án ứng dụng web, tối ưu giao diện và cấu trúc dữ liệu.
          </motion.p>
        </div>

        {/* Project Video Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="rounded-3xl glass-panel border border-white/10 overflow-hidden flex flex-col justify-between hover:border-cyan-400/30 transition-all duration-300 group shadow-xl"
            >
              {/* YouTube Video Embed Header */}
              <div className="relative w-full aspect-video bg-slate-950 overflow-hidden">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${project.youtubeId}?rel=0&modestbranding=1`}
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>

              {/* Video Info Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-400/20">
                      {project.category}
                    </span>
                    <a
                      href={project.youtubeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-400 hover:text-rose-300 transition-colors"
                    >
                      <Youtube className="w-3.5 h-3.5" />
                      <span>Xem trên YouTube</span>
                    </a>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-4 font-medium">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-xl text-xs font-semibold glass-pill text-slate-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Links */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-2xl glass-button-primary text-slate-950 font-bold text-xs sm:text-sm transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-2xl glass-pill hover:bg-white/15 text-slate-200 font-bold text-xs sm:text-sm transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Mã Nguồn</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Project Callout Card with Embedded Vimeo Video */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl glass-panel border border-cyan-500/25 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-indigo-950/50 overflow-hidden shadow-2xl"
        >
          {/* Header row inside card */}
          <div className="p-6 sm:p-7 pb-4 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-400 shrink-0 shadow-inner">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 uppercase tracking-wider">
                    Dự Án Nổi Bật • Video Demo Thực Tế
                  </span>
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-white">
                  Dự Án Clone PhongTro123 (Full-stack Listing)
                </h4>
              </div>
            </div>

            <div className="flex items-center gap-2.5 shrink-0">
              <a
                href="https://vimeo.com/1230112432?share=copy&fl=sv&fe=ci"
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 rounded-xl glass-pill hover:bg-white/10 text-cyan-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-all border border-cyan-400/30"
              >
                <span>Xem trên Vimeo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Video Player (Vimeo 1230112432) */}
          <div className="relative w-full aspect-video bg-black overflow-hidden border-b border-white/5">
            <iframe
              src="https://player.vimeo.com/video/1230112432?title=0&byline=0&portrait=0&badge=0"
              title="Dự Án Clone PhongTro123 (Full-stack Listing)"
              allow="autoplay; fullscreen; picture-in-picture; encrypted-media; accelerometer; gyroscope"
              allowFullScreen
              className="w-full h-full border-0 absolute inset-0"
            />
          </div>

          {/* Footer row with details and action links */}
          <div className="p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-sm text-slate-300 font-medium mb-3 max-w-2xl leading-relaxed">
                Ứng dụng ReactJS + TailwindCSS, tích hợp SEO-friendly URL, tối ưu crawl budget và bộ lọc dữ liệu nhanh chuẩn On-page SEO.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {['ReactJS', 'TailwindCSS', 'Node.js', 'ExpressJS', 'MySQL', 'SEO-friendly URL'].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-xl text-xs font-semibold glass-pill text-slate-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
              <a
                href="https://cho-thue-phong-tro.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-none text-center px-5 py-2.5 rounded-2xl glass-button-primary text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Mở Trang Demo</span>
              </a>
              <a
                href="https://github.com/l2002/CHO-THUE-PHONG-TRO"
                target="_blank"
                rel="noreferrer"
                className="flex-1 sm:flex-none text-center px-4 py-2.5 rounded-2xl glass-pill hover:bg-white/15 text-slate-200 font-bold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>Mã Nguồn</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
