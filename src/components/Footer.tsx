import { Github, Mail, Phone, ExternalLink, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-white text-base tracking-tight">Nguyễn Minh Luân</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-400/20 font-bold">
              Portfolio
            </span>
          </div>
          <p className="text-xs text-slate-400 font-medium">
            Chuyên viên SEO Website & Lập trình Web hiện đại
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-2xl glass-pill hover:bg-white/15 text-slate-300 hover:text-white transition-colors"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            className="p-2.5 rounded-2xl glass-pill hover:bg-white/15 text-slate-300 hover:text-cyan-300 transition-colors"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          <a
            href={`tel:${personalInfo.phone}`}
            className="p-2.5 rounded-2xl glass-pill hover:bg-white/15 text-slate-300 hover:text-emerald-300 transition-colors"
            title="Điện thoại"
          >
            <Phone className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-medium gap-2">
        <span>© {new Date().getFullYear()} Nguyễn Minh Luân. All rights reserved.</span>
        <span>Thiết kế phong cách Glassmorphism mượt mà</span>
      </div>
    </footer>
  );
}
