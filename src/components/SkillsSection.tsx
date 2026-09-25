import { motion } from 'motion/react';
import { Search, BarChart3, Code2, Sparkles, Check, Terminal } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const iconMap: Record<string, typeof Search> = {
  Search,
  BarChart3,
  Code2,
  Sparkles,
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full glass-pill text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3 border border-cyan-500/20"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Năng Lực Chuyên Môn
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-white mb-3"
          >
            Kỹ Năng & Công Cụ Sử Dụng
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-400 font-medium max-w-xl mx-auto text-sm sm:text-base"
          >
            Tổng hợp các kỹ năng SEO kỹ thuật, công cụ phân tích dữ liệu và lập trình web hiện đại.
          </motion.p>
        </div>

        {/* 4 Category Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {skillCategories.map((category, idx) => {
            const Icon = iconMap[category.iconName] || Sparkles;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 sm:p-7 rounded-3xl glass-panel border border-white/10 hover:border-cyan-400/30 transition-all group"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-2xl glass-pill text-xs sm:text-sm font-semibold text-slate-200 hover:text-cyan-300 hover:border-cyan-400/30 transition-all cursor-default"
                    >
                      <Check className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Special Skill Callout Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 p-5 sm:p-6 rounded-3xl glass-panel border border-emerald-500/25 flex flex-col sm:flex-row items-center justify-between gap-4 bg-emerald-950/20"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shrink-0">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-extrabold uppercase text-emerald-300">Điểm Khác Biệt Nổi Bật</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">Hiếm có</span>
              </div>
              <p className="text-sm font-bold text-white mt-0.5">
                Kỹ Năng Đặc Biệt: Biết Code (ReactJS / JS) + Biết Linux (Kali / Ubuntu / Bash)
              </p>
            </div>
          </div>
          <a
            href="#special-skills"
            className="px-5 py-2.5 rounded-2xl glass-pill hover:bg-emerald-500/25 text-emerald-200 hover:text-white border border-emerald-400/30 text-xs sm:text-sm font-bold transition-all shrink-0 flex items-center gap-1.5"
          >
            <span>Khám Phá Chi Tiết</span>
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
