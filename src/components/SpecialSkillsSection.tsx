import { motion } from 'motion/react';
import { Code2, Terminal, Wrench, Flame, Sparkles, Zap, ShieldCheck, Cpu } from 'lucide-react';
import VideoPlayerCard from './VideoPlayerCard';

export default function SpecialSkillsSection() {
  return (
    <section id="special-skills" className="py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] glow-orb-1 rounded-full pointer-events-none blur-3xl opacity-40" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] glow-orb-2 rounded-full pointer-events-none blur-3xl opacity-35" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header - Only Main Title */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-emerald-400/30 text-emerald-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 shadow-sm shadow-emerald-500/10"
          >
            <Flame className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span>Kỹ Năng Đặc Biệt</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight"
          >
            Biết Code <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">+</span> Linux <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">+</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-300">Thay Thế Linh Kiện Laptop</span>
          </motion.h2>
        </div>

        {/* 3-Column Video Cards - Only Titles and Videos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Card 1: BIẾT CODE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-5 sm:p-6 rounded-3xl glass-panel border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 shadow-xl relative overflow-hidden group flex flex-col justify-between"
          >
            {/* Header: Title */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform shadow-inner shrink-0">
                <Code2 className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-cyan-300 block">
                  Kỹ Năng 1
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Biết Code
                </h3>
              </div>
            </div>

            {/* Video Player */}
            <VideoPlayerCard
              storageKey="video_coding"
              defaultTitle="Video Demo: Lập Trình Frontend (VS Code)"
              badge="Video Demo • Biết Code"
              badgeColor="cyan"
              defaultVideoUrl="https://vimeo.com/1230106443?fl=tl&fe=ec"
            />
          </motion.div>

          {/* Card 2: LINUX */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-5 sm:p-6 rounded-3xl glass-panel border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 shadow-xl relative overflow-hidden group flex flex-col justify-between"
          >
            {/* Header: Title */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform shadow-inner shrink-0">
                <Terminal className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-300 block">
                  Kỹ Năng 2
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Linux
                </h3>
              </div>
            </div>

            {/* Video Player */}
            <VideoPlayerCard
              storageKey="video_linux"
              defaultTitle="Video Demo: Sniffing - Tấn công dò tìm dữ liệu"
              badge="Video Demo • Linux"
              badgeColor="emerald"
              defaultVideoUrl="https://vimeo.com/1230105978?fl=tl&fe=ec"
            />
          </motion.div>

          {/* Card 3: THAY THẾ LINH KIỆN LAPTOP */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="p-5 sm:p-6 rounded-3xl glass-panel border border-amber-500/20 hover:border-amber-400/40 transition-all duration-300 shadow-xl relative overflow-hidden group flex flex-col justify-between"
          >
            {/* Header: Title */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform shadow-inner shrink-0">
                <Wrench className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-amber-300 block">
                  Kỹ Năng 3
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Thay Thế Linh Kiện Laptop
                </h3>
              </div>
            </div>

            {/* Video Player */}
            <VideoPlayerCard
              storageKey="video_hardware"
              defaultTitle="Video Demo: Tháo Lắp & Thay Thế Linh Kiện Laptop"
              badge="Video Demo • Phần Cứng Laptop"
              badgeColor="amber"
              defaultVideoUrl="https://vimeo.com/1230105890?fl=tl&fe=ec"
            />
          </motion.div>
        </div>

        {/* Why this matters for recruiters (Callout Card) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/15 bg-gradient-to-r from-cyan-950/40 via-slate-900/70 to-indigo-950/40 shadow-2xl"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 text-cyan-300 text-xs sm:text-sm font-extrabold uppercase tracking-wide">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Giá trị mang lại cho Doanh Nghiệp & Đội Ngũ Tuyển Dụng</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-white">
                Tại sao bạn lại chọn nhân sự SEO biết code, biết linux & kỹ thuật phần cứng?
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed font-medium">
                Khoảng cách giữa SEO, Dev và Hạ tầng Server thường rất lớn. Một nhân sự làm chủ từ Code, Hệ điều hành Linux đến Phần cứng máy trạm mang lại lợi thế vượt trội:
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <a
                href="#contact"
                className="px-6 py-3 rounded-2xl glass-button-primary text-slate-950 font-extrabold text-sm text-center transition-all"
              >
                Mời Phỏng Vấn Ngay
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/10">
            <div className="p-4 rounded-2xl glass-pill">
              <div className="flex items-center gap-2 mb-1.5 text-cyan-300 font-bold text-sm">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>Tự giải quyết sự cố Web</span>
              </div>
              <p className="text-xs text-slate-300 font-medium">
                Tự sửa lỗi cấu trúc thẻ, redirect 301, canonical, render-blocking mà không phải chờ đợi IT ticket.
              </p>
            </div>

            <div className="p-4 rounded-2xl glass-pill">
              <div className="flex items-center gap-2 mb-1.5 text-emerald-300 font-bold text-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Phân tích log & Linux Server</span>
              </div>
              <p className="text-xs text-slate-300 font-medium">
                Đọc file log Nginx/Apache trên Linux xem Googlebot cào trang nào, phát hiện trang 404 ẩn và tối ưu crawl budget.
              </p>
            </div>

            <div className="p-4 rounded-2xl glass-pill">
              <div className="flex items-center gap-2 mb-1.5 text-amber-300 font-bold text-sm">
                <Cpu className="w-4 h-4 text-amber-400" />
                <span>Làm chủ thiết bị & Tự động hóa</span>
              </div>
              <p className="text-xs text-slate-300 font-medium">
                Tự nâng cấp RAM/SSD, bảo trì phần cứng máy tính và viết script tự động hóa tác vụ SEO không bị gián đoạn.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
