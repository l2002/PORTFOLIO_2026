import { motion } from 'motion/react';
import { Briefcase, Calendar, CheckCircle2, Building, ExternalLink, Sparkles } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full glass-pill text-indigo-300 text-xs font-bold uppercase tracking-wider mb-3 border border-indigo-500/20"
          >
            <Briefcase className="w-3.5 h-3.5" />
            Quá Trình Làm Việc
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-white mb-3"
          >
            Kinh Nghiệm Thực Chiến
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-400 font-medium max-w-xl mx-auto text-sm sm:text-base"
          >
            Hành trình triển khai SEO tổng thể, phát triển ứng dụng Web và vận hành kinh doanh thực tế.
          </motion.p>
        </div>

        {/* Timeline List */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 relative overflow-hidden group hover:border-cyan-400/30 transition-all duration-300"
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent group-hover:via-cyan-400/70 transition-all duration-500" />

              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full glass-pill text-cyan-300 border border-cyan-400/20">
                      {exp.type === 'fulltime' ? 'Toàn thời gian' : exp.type === 'project' ? 'Dự án thực tế' : exp.type === 'freelance' ? 'E-Commerce' : 'Thực tập'}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-slate-300 text-sm font-semibold">
                    <Building className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-2xl glass-pill text-slate-300 w-fit self-start shrink-0">
                  <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Highlights */}
              <ul className="space-y-2.5 mb-5 text-slate-300 text-sm leading-relaxed">
                {exp.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Tags & Optional Link */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-1.5">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-xl text-xs font-semibold bg-white/5 text-slate-300 border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Xem liên kết</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
