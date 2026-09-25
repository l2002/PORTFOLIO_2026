import { motion } from 'motion/react';
import { User, MapPin, Mail, Phone, GraduationCap, Github, ExternalLink, Sparkles, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full glass-pill text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3"
          >
            <User className="w-3.5 h-3.5" />
            Giới Thiệu
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-white"
          >
            Mục Tiêu & Định Hướng
          </motion.h2>
        </div>

        {/* Content Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Main Summary Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-7 p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 flex flex-col justify-between"
          >
            <div>
              <div className="inline-block p-3 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 text-cyan-400 mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Kỹ Thuật SEO Kép & Kiến Thức Lập Trình
              </h3>
              <p className="text-slate-300 text-base leading-relaxed mb-6 font-medium">
                Tốt nghiệp chuyên ngành <strong className="text-white">Công nghệ Phần mềm</strong> tại HUIT. 
                Sở hữu kinh nghiệm thực chiến về cấu trúc SILO, nghiên cứu từ khóa quy mô lớn, tối ưu On-page và Technical SEO 
                trên nền tảng <strong className="text-cyan-300">WordPress</strong> và <strong className="text-indigo-300">ReactJS</strong>.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2.5 text-slate-300 text-sm font-semibold">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Nghiên cứu & gom cụm từ khóa</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300 text-sm font-semibold">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Tối ưu On-page, URL & SILO</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300 text-sm font-semibold">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Hiểu mã nguồn & UX/UI</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-300 text-sm font-semibold">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>AI Vibe Coding & tự động hóa</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Info & Contacts Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-5 p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span>Thông Tin Cơ Bản</span>
              </h3>
              
              <ul className="space-y-3.5">
                <li className="flex items-center gap-3 p-2.5 rounded-2xl glass-pill">
                  <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                  <span className="text-sm font-semibold text-slate-200">{personalInfo.location}</span>
                </li>

                <li className="flex items-center gap-3 p-2.5 rounded-2xl glass-pill">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <a href={`mailto:${personalInfo.email}`} className="text-sm font-semibold text-slate-200 hover:text-cyan-300 truncate">
                    {personalInfo.email}
                  </a>
                </li>

                <li className="flex items-center gap-3 p-2.5 rounded-2xl glass-pill">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a href={`tel:${personalInfo.phone}`} className="text-sm font-semibold text-slate-200 hover:text-emerald-300">
                    {personalInfo.phone}
                  </a>
                </li>

                <li className="flex items-center gap-3 p-2.5 rounded-2xl glass-pill">
                  <GraduationCap className="w-4 h-4 text-amber-400 shrink-0" />
                  <span className="text-sm font-semibold text-slate-200">ĐH Công Thương TP.HCM (HUIT)</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 mt-4 border-t border-white/10 flex items-center gap-2.5">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-2xl glass-pill hover:bg-white/10 text-xs sm:text-sm font-bold text-slate-200 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.portfolioDemo}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-2xl glass-pill hover:bg-white/10 text-xs sm:text-sm font-bold text-cyan-300 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Demo Link</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
