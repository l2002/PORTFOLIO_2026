import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Sparkles, Send, Github, Phone } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Giới Thiệu', href: '#about' },
    { label: 'Dự Án Video', href: '#projects' },
    { label: 'Kỹ Năng Đặc Biệt', href: '#special-skills' },
    { label: 'Kinh Nghiệm', href: '#experience' },
    { label: 'Kỹ Năng', href: '#skills' },
    { label: 'Liên Hệ', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 transition-all duration-300 pointer-events-none">
      <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Brand Logo */}
        <a
          href="#"
          id="nav-brand-logo"
          className="flex items-center gap-2.5 px-4 py-2 rounded-2xl glass-nav hover:border-cyan-400/40 transition-all duration-300 group"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-500 flex items-center justify-center text-white font-bold text-base shadow-sm group-hover:scale-105 transition-transform">
            L
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-100 text-sm tracking-tight flex items-center gap-1.5">
              Minh Luân
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </span>
            <span className="text-[11px] text-cyan-300/80 font-medium">SEO & Web Dev</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          id="desktop-navigation"
          className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-300 ${
            isScrolled ? 'glass-nav shadow-lg' : 'bg-slate-900/40 backdrop-blur-md border border-white/5'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-1.5 text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            id="nav-github-link"
            className="p-2.5 rounded-2xl glass-pill hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            title="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            id="nav-contact-cta"
            className="flex items-center gap-2 px-4 py-2 rounded-2xl glass-button-primary text-slate-950 font-bold text-sm transition-all"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Liên Hệ</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          id="mobile-menu-toggle"
          aria-label="Mở menu điều hướng"
          className="md:hidden p-2.5 rounded-2xl glass-nav text-slate-200 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden mt-3 p-4 rounded-3xl glass-nav max-w-sm mx-auto flex flex-col gap-2 pointer-events-auto shadow-2xl border border-white/15"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 text-base font-semibold text-slate-200 hover:text-white hover:bg-white/10 rounded-2xl transition-all"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-white/10 flex items-center justify-between gap-2 mt-1">
            <a
              href={`tel:${personalInfo.phone}`}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-2xl glass-pill text-sm font-semibold text-slate-200"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>Gọi Ngay</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-2xl glass-button-primary text-slate-950 text-sm font-bold"
            >
              <Send className="w-4 h-4" />
              <span>Gửi Tin Nhắn</span>
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
