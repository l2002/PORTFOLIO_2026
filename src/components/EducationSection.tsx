import { motion } from 'motion/react';
import { GraduationCap, Award, Calendar, CheckCircle2 } from 'lucide-react';
import { educationList, certificatesList } from '../data/portfolioData';

export default function EducationSection() {
  return (
    <section className="py-16 px-4 sm:px-6 relative">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">Học Vấn</span>
                  <h3 className="text-lg font-bold text-white">Đại Học & Chuyên Ngành</h3>
                </div>
              </div>

              {educationList.map((edu, idx) => (
                <div key={idx} className="p-4 rounded-2xl glass-pill mb-3">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="text-base font-bold text-white">{edu.degree}</h4>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-400/10 text-amber-300">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-slate-300 mb-1">{edu.school}</p>
                  {edu.details && (
                    <p className="text-xs text-slate-400 font-medium">{edu.details}</p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certificates Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">Chứng Chỉ</span>
                  <h3 className="text-lg font-bold text-white">Khóa Học Chuyên Môn</h3>
                </div>
              </div>

              <div className="space-y-3">
                {certificatesList.map((cert, idx) => (
                  <div key={idx} className="p-4 rounded-2xl glass-pill flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <div>
                        <h4 className="text-sm font-bold text-white">{cert.name}</h4>
                        <span className="text-xs text-slate-400 font-medium">{cert.issuer}</span>
                      </div>
                    </div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-xl glass-pill text-emerald-300 shrink-0">
                      {cert.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
