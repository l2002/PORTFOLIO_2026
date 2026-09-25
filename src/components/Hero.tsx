import { useState } from 'react';
import { motion } from 'motion/react';
import { Play, Sparkles, ArrowRight, CheckCircle2, Copy, Check, Download, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] glow-orb-1 rounded-full pointer-events-none blur-3xl opacity-70" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] glow-orb-2 rounded-full pointer-events-none blur-3xl opacity-60" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] glow-orb-3 rounded-full pointer-events-none blur-3xl opacity-50" />

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:28px_28px] opacity-40 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto w-full flex flex-col items-center text-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-cyan-400/20 text-cyan-300 text-xs sm:text-sm font-bold mb-6 shadow-sm shadow-cyan-500/10"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
          </span>
          <span>Junior SEO Specialist & Front-end Developer</span>
        </motion.div>

        {/* Main Name & Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4 leading-[1.15]"
        >
          Xin chào, tôi là{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent underline decoration-cyan-400/30 decoration-wavy decoration-2">
            Nguyễn Minh Luân
          </span>
        </motion.h1>

        {/* Catchy, Plump Tagline (Ít chữ, đơn giản) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-2xl text-slate-300 font-semibold max-w-2xl mx-auto mb-6 leading-relaxed"
        >
          Tối ưu hóa công cụ tìm kiếm <span className="text-cyan-300 font-bold">(SEO)</span> & lập trình{' '}
          <span className="text-indigo-300 font-bold">ReactJS / Web</span> tốc độ cao, chuẩn UX.
        </motion.p>

        {/* Special Skills Pill Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mb-8"
        >
          <a
            href="#special-skills"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl glass-pill hover:border-emerald-400/50 text-emerald-300 hover:text-emerald-200 text-xs sm:text-sm font-bold transition-all shadow-md shadow-emerald-500/10 group"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Kỹ năng đặc biệt: Biết Code + Biết Linux</span>
            <span className="text-emerald-400 group-hover:translate-x-0.5 transition-transform">→</span>
          </a>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3.5 mb-12"
        >
          <a
            href="#projects"
            id="hero-view-projects-btn"
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl glass-button-primary text-slate-950 font-extrabold text-base transition-all group"
          >
            <Play className="w-4 h-4 fill-slate-950 group-hover:scale-110 transition-transform" />
            <span>Xem Video Dự Án</span>
          </a>

          <button
            onClick={handleCopyEmail}
            id="hero-copy-email-btn"
            className="flex items-center gap-2 px-5 py-3.5 rounded-2xl glass-panel glass-panel-hover text-slate-200 font-bold text-base border border-white/15"
          >
            {copiedEmail ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-300">Đã sao chép Email!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-cyan-400" />
                <span>Sao chép Email</span>
              </>
            )}
          </button>
        </motion.div>

        {/* Quick Highlights / Mini Glass Bento Cards */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 w-full max-w-4xl"
        >
          <div className="p-4 rounded-3xl glass-panel border border-white/10 flex flex-col items-center justify-center text-center">
            <span className="text-2xl sm:text-3xl font-black text-cyan-400">10.000+</span>
            <span className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">Từ khóa nghiên cứu</span>
          </div>

          <div className="p-4 rounded-3xl glass-panel border border-white/10 flex flex-col items-center justify-center text-center">
            <span className="text-2xl sm:text-3xl font-black text-indigo-400">200+</span>
            <span className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">Topic Outline SEO</span>
          </div>

          <div className="p-4 rounded-3xl glass-panel border border-white/10 flex flex-col items-center justify-center text-center">
            <span className="text-2xl sm:text-3xl font-black text-sky-400">ReactJS</span>
            <span className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">SPA & TailwindCSS</span>
          </div>

          <div className="p-4 rounded-3xl glass-panel border border-white/10 flex flex-col items-center justify-center text-center">
            <span className="text-xl sm:text-2xl font-black text-emerald-400">Code & Linux</span>
            <span className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">Kỹ năng đặc biệt</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
