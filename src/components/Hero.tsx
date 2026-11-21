import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Check, Copy } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const heroStats = [
    {
      value: '10K+',
      line1: 'Từ khóa',
      line2: 'nghiên cứu',
    },
    {
      value: '200+',
      line1: 'Outline bài',
      line2: 'chuẩn SEO',
    },
    {
      value: '03',
      line1: 'Code · Linux',
      line2: 'Phần cứng',
    },
  ];

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 px-4 sm:px-8 overflow-hidden bg-[#050811]">
      {/* Cobalt Radial Atmosphere Behind Portrait */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[520px] bg-blue-700/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#090d16] via-[#090d16]/75 to-transparent z-20" />
      </div>

      {/* Main Container */}
      <div className="relative max-w-6xl mx-auto w-full flex-1 flex flex-col justify-between z-10">
        {/* Top Row: Left Discipline Kicker & Right Availability Note */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4 sm:mb-6">
          <div className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em] text-blue-400 leading-snug">
            <p>SEO Specialist</p>
            <p className="text-blue-300/80">Web &amp; Technical SEO</p>
          </div>

          <div className="text-left sm:text-right text-xs text-slate-400 leading-snug">
            <p className="font-semibold text-slate-200">Sẵn sàng làm việc</p>
            <p>Full-time &amp; Dự án SEO</p>
          </div>
        </div>

        {/* Center Editorial Composition with Giant Cobalt "PORTFOLIO" Backdrop */}
        <div className="relative flex-1 flex items-center py-4 lg:py-0">
          {/* Giant Cobalt Display Wordmark Layer */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-1/2 -translate-y-[52%] flex justify-center items-center pointer-events-none select-none z-0 overflow-visible"
          >
            <span className="font-['Oswald'] font-bold uppercase text-[24vw] sm:text-[21vw] lg:text-[17.5rem] xl:text-[19.5rem] leading-[0.84] tracking-[-0.02em] bg-gradient-to-b from-[#2563eb] via-[#1d4ed8] to-[#1e3a8a]/25 bg-clip-text text-transparent whitespace-nowrap">
              PORTFOLIO
            </span>
          </div>

          {/* 3-Column Foreground Split */}
          <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-4">
            {/* Left Column: Cursive Intro + Massive Name + Role + CTA */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="lg:col-span-5 flex flex-col items-start text-left pt-6 lg:pt-28 lg:self-end lg:pb-8"
            >
              <span className="font-['Dancing_Script'] font-bold text-3xl sm:text-4xl lg:text-[2.75rem] text-white -rotate-3 origin-left mb-1 drop-shadow-[0_4px_18px_rgba(5,8,17,0.95)]">
                Xin chào, tôi là
              </span>

              <h1 className="font-['Oswald'] font-bold uppercase text-5xl sm:text-7xl lg:text-[5.25rem] leading-[0.94] tracking-tight text-white drop-shadow-[0_8px_30px_rgba(5,8,17,0.95)]">
                MINH LUÂN
              </h1>

              <div className="mt-5 text-base sm:text-lg font-extrabold uppercase tracking-wide text-blue-400 leading-tight drop-shadow-[0_2px_12px_rgba(5,8,17,0.9)]">
                <p>SEO Specialist &amp;</p>
                <p>Web Developer</p>
              </div>

              <p className="mt-3 text-sm text-slate-300 max-w-sm leading-relaxed font-medium drop-shadow-[0_2px_10px_rgba(5,8,17,0.95)]">
                Từ nghiên cứu từ khóa đến kiến trúc kỹ thuật. Kết hợp Technical SEO, ReactJS và Linux để bứt phá traffic bền vững.
              </p>

              {/* Primary & Secondary Actions */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  id="hero-view-projects-btn"
                  className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-sm shadow-lg shadow-blue-600/30 transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Khám phá dự án</span>
                  <ArrowDown className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  id="hero-copy-email-btn"
                  className="inline-flex items-center gap-2 px-4 py-3 bg-[#0a1020]/85 hover:bg-slate-800/90 border border-white/15 text-slate-200 font-semibold text-sm rounded-sm transition-colors whitespace-nowrap shrink-0"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-300">Đã sao chép Email</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-blue-400" />
                      <span>Sao chép Email</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>

            {/* Center Column: Cutout Portrait Overlapping "PORTFOLIO" */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="lg:col-span-4 flex justify-center items-end relative self-end"
            >
              <div className="relative w-[320px] sm:w-[400px] lg:w-[480px] xl:w-[520px] lg:-mx-12 aspect-[4/5] flex items-end justify-center">
                {/* Fallback backdrop if image is unavailable */}
                <div className="absolute inset-x-10 bottom-6 top-12 rounded-t-full bg-gradient-to-b from-blue-600/15 to-transparent pointer-events-none" />
                <img
                  src="/assets/aistudio/c1dce8aabd583d066449-removebg-preview_531104d6.png"
                  alt="Chân dung Nguyễn Minh Luân"
                  referrerPolicy="no-referrer"
                  className="relative z-10 w-full h-full object-contain object-bottom drop-shadow-[0_18px_45px_rgba(37,99,235,0.28)] [mask-image:linear-gradient(to_bottom,black_82%,transparent_100%)]"
                />
              </div>
            </motion.div>

            {/* Right Column: Vertical Cobalt Metrics Stack */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.14 }}
              className="lg:col-span-3 flex flex-row lg:flex-col flex-wrap justify-between lg:justify-end items-center lg:items-end gap-6 sm:gap-8 lg:gap-7 pt-4 lg:pt-28 lg:self-end lg:pb-10"
            >
              {heroStats.map((stat) => (
                <div
                  key={stat.value}
                  className="flex items-center gap-3 lg:w-52 lg:justify-end"
                >
                  <span className="font-['Oswald'] font-bold text-4xl sm:text-5xl text-blue-500 tabular-nums leading-none tracking-tight drop-shadow-[0_4px_14px_rgba(37,99,235,0.25)]">
                    {stat.value}
                  </span>
                  <div className="text-xs text-slate-300 font-medium leading-tight border-l border-white/15 pl-3 min-w-[78px]">
                    <p>{stat.line1}</p>
                    <p className="text-slate-400">{stat.line2}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Subtle Scroll Anchor */}
        <div className="relative z-30 flex items-center justify-between pt-4 border-t border-white/5 text-xs text-slate-400">
          <a
            href="#special-skills"
            className="hover:text-blue-400 transition-colors font-medium"
          >
            Kỹ năng đặc biệt: Code · Linux · Thay thế linh kiện Laptop
          </a>
          <a
            href="#about"
            className="uppercase tracking-[0.18em] text-[11px] font-semibold text-slate-400 hover:text-white transition-colors whitespace-nowrap shrink-0"
          >
            Cuộn xuống ↓
          </a>
        </div>
      </div>
    </section>
  );
}
