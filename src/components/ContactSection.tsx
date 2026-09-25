import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Check, Copy, Sparkles, MessageSquare, ExternalLink, Briefcase, Code2, Users } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSent, setFormSent] = useState<'gmail' | 'default' | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    topic: 'SEO Website',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const quickTemplates = [
    {
      label: 'Tuyển dụng SEO',
      icon: Briefcase,
      topic: 'Vị trí Nhân viên SEO Website',
      text: 'Chào Luân, bên mình đang tuyển vị trí Nhân viên SEO Website. Hồ sơ và kinh nghiệm tối ưu từ khóa / On-page của bạn rất phù hợp. Bên mình muốn mời bạn trao đổi chi tiết hơn về cơ hội này.',
    },
    {
      label: 'Tuyển Web Dev',
      icon: Code2,
      topic: 'Vị trí Web Developer / ReactJS',
      text: 'Chào Luân, công ty mình đang tìm kiếm Web Developer có kinh nghiệm ReactJS và tối ưu hiệu suất. Mong muốn được kết nối và trao đổi thêm cùng bạn.',
    },
    {
      label: 'Hợp tác dự án',
      icon: Users,
      topic: 'Hợp tác dự án / Freelance',
      text: 'Chào Luân, mình có dự án website cần tối ưu cấu trúc SEO và giao diện người dùng. Rất mong có cơ hội hợp tác cùng bạn.',
    },
  ];

  const applyTemplate = (tmpl: typeof quickTemplates[0]) => {
    setFormData((prev) => ({
      ...prev,
      topic: tmpl.topic,
      message: tmpl.text,
    }));
  };

  const buildMailContent = () => {
    const senderName = formData.name.trim() || 'Nhà Tuyển Dụng';
    const companyStr = formData.company.trim() ? ` [${formData.company.trim()}]` : '';
    const senderEmail = formData.email.trim() ? `\nEmail liên hệ lại: ${formData.email.trim()}` : '';
    const subject = `[Tuyển Dụng/Hợp Tác]${companyStr} Thư liên hệ từ ${senderName} - ${formData.topic}`;
    const body = `Kính gửi bạn Nguyễn Minh Luân,\n\nTôi là: ${senderName}${companyStr}${senderEmail}\nChủ đề: ${formData.topic}\n\nNội dung trao đổi:\n${formData.message || 'Chúng tôi rất quan tâm đến hồ sơ của bạn và muốn trao đổi thêm về cơ hội việc làm.'}\n\nRất mong sớm nhận được phản hồi từ bạn!\nTrân trọng.`;
    return { subject, body };
  };

  const handleSendViaGmail = (e?: FormEvent) => {
    if (e) e.preventDefault();
    const { subject, body } = buildMailContent();
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');

    setFormSent('gmail');
    setTimeout(() => setFormSent(null), 4000);
  };

  const handleSendViaDefault = (e?: FormEvent) => {
    if (e) e.preventDefault();
    const { subject, body } = buildMailContent();
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;

    setFormSent('default');
    setTimeout(() => setFormSent(null), 4000);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 relative">
      {/* Glow orb */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] glow-orb-1 rounded-full pointer-events-none blur-3xl opacity-50" />

      <div className="max-w-5xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full glass-pill text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3 border border-cyan-500/20"
          >
            <Send className="w-3.5 h-3.5" />
            Liên Hệ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-white mb-3"
          >
            Kết Nối & Tuyển Dụng
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-400 font-medium max-w-xl mx-auto text-sm sm:text-base"
          >
            Quý nhà tuyển dụng có thể gửi thư trực tiếp qua Gmail hoặc sao chép thông tin liên hệ nhanh bên dưới.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Direct Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 space-y-4"
          >
            {/* Email Card with Direct Gmail Action */}
            <div className="p-5 rounded-3xl glass-panel border border-white/10 flex flex-col gap-3 group">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3.5 overflow-hidden">
                  <div className="w-11 h-11 rounded-2xl bg-rose-500/15 border border-rose-400/20 flex items-center justify-center text-rose-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-xs font-bold text-slate-400 block">Địa chỉ Gmail</span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-bold text-white hover:text-cyan-300 transition-colors truncate block"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  id="copy-email-contact-btn"
                  aria-label="Sao chép email"
                  title="Sao chép địa chỉ email"
                  className="p-2.5 rounded-2xl glass-pill hover:bg-white/15 text-slate-300 hover:text-white transition-all shrink-0"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Direct Gmail compose button on the card */}
              <button
                type="button"
                onClick={() => handleSendViaGmail()}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-2xl bg-rose-500/15 hover:bg-rose-500/25 border border-rose-500/30 text-rose-200 text-xs font-bold transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-rose-400" />
                <span>Mở soạn thư trên Gmail</span>
                <ExternalLink className="w-3 h-3 text-rose-400" />
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-3xl glass-panel border border-white/10 flex items-center justify-between gap-3 group">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 block">Số Điện Thoại / Zalo</span>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-sm font-bold text-white hover:text-emerald-300 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyPhone}
                id="copy-phone-contact-btn"
                aria-label="Sao chép số điện thoại"
                title="Sao chép số điện thoại"
                className="p-2.5 rounded-2xl glass-pill hover:bg-white/15 text-slate-300 hover:text-white transition-all shrink-0"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-3xl glass-panel border border-white/10 flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 block">Khu Vực Làm Việc</span>
                <span className="text-sm font-bold text-white">{personalInfo.location}</span>
              </div>
            </div>

            {/* Recruiter Note */}
            <div className="p-4 rounded-3xl bg-cyan-500/10 border border-cyan-400/20 text-xs text-slate-300 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-cyan-300">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Sẵn sàng phỏng vấn & nhận việc</span>
              </div>
              <p className="text-slate-400">
                Ưu tiên vị trí Nhân viên SEO Website, Junior SEO hoặc Front-end Web Developer tại TP.HCM.
              </p>
            </div>
          </motion.div>

          {/* Right Message Form for Recruiters */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 p-6 sm:p-8 rounded-3xl glass-panel border border-white/10"
          >
            <div className="flex items-center justify-between gap-3 mb-2">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                <span>Soạn Thư Gửi Tới Nguyễn Minh Luân</span>
              </h3>
              <span className="text-xs px-2.5 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-400/30 font-semibold flex items-center gap-1">
                <Mail className="w-3 h-3 text-rose-400" />
                Hỗ trợ gửi qua Gmail
              </span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm font-medium mb-4">
              Chọn mẫu tin nhắn nhanh hoặc điền thông tin để chuyển trực tiếp sang hộp thư Gmail.
            </p>

            {/* Quick Templates for Recruiters */}
            <div className="mb-5">
              <span className="block text-xs font-bold text-slate-400 mb-2">Mẫu tin nhắn nhanh cho nhà tuyển dụng:</span>
              <div className="flex flex-wrap gap-2">
                {quickTemplates.map((tmpl) => {
                  const Icon = tmpl.icon;
                  const isSelected = formData.topic === tmpl.topic;
                  return (
                    <button
                      key={tmpl.label}
                      type="button"
                      onClick={() => applyTemplate(tmpl)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-2xl text-xs font-bold transition-all ${
                        isSelected
                          ? 'bg-cyan-500/25 text-cyan-200 border border-cyan-400/50 shadow-sm shadow-cyan-500/20'
                          : 'glass-pill text-slate-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{tmpl.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <form onSubmit={handleSendViaGmail} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold text-slate-300 mb-1.5">
                    Họ & Tên / Người Tuyển Dụng
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="VD: Chị Mai (HR)"
                    className="w-full px-4 py-2.5 rounded-2xl bg-slate-950/60 border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-cyan-400/60 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-company" className="block text-xs font-bold text-slate-300 mb-1.5">
                    Tên Công Ty / Doanh Nghiệp
                  </label>
                  <input
                    type="text"
                    id="contact-company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="VD: Công ty TNHH XYZ"
                    className="w-full px-4 py-2.5 rounded-2xl bg-slate-950/60 border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-cyan-400/60 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-bold text-slate-300 mb-1.5">
                  Email Phản Hồi Của Bạn
                </label>
                <input
                  type="email"
                  id="contact-email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="hr@congty.com"
                  className="w-full px-4 py-2.5 rounded-2xl bg-slate-950/60 border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-cyan-400/60 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-bold text-slate-300 mb-1.5">
                  Nội Dung Trao Đổi / Mời Phỏng Vấn
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Trao đổi về vị trí công việc, mức đãi ngộ hoặc thông tin dự án..."
                  className="w-full px-4 py-2.5 rounded-2xl bg-slate-950/60 border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-cyan-400/60 transition-colors resize-none"
                />
              </div>

              {/* Action Buttons: Gmail Primary & Mailto Secondary */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  type="submit"
                  id="contact-submit-gmail-btn"
                  className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-2xl bg-gradient-to-r from-rose-500 via-red-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white font-extrabold text-sm shadow-lg shadow-rose-500/25 transition-all group"
                >
                  {formSent === 'gmail' ? (
                    <>
                      <Check className="w-4 h-4 text-white" />
                      <span>Đang mở Gmail...</span>
                    </>
                  ) : (
                    <>
                      <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span>Gửi Ngay Qua Gmail</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleSendViaDefault}
                  id="contact-submit-default-btn"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-4 rounded-2xl glass-pill hover:bg-white/15 text-slate-200 font-bold text-xs sm:text-sm border border-white/10 transition-all"
                  title="Mở ứng dụng Mail mặc định trên thiết bị"
                >
                  <Send className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Ứng Dụng Mail Khác</span>
                </button>
              </div>

              {formSent && (
                <div className="p-3 rounded-2xl bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-semibold flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Đã chuẩn bị thư với địa chỉ luannguyen0202.huit@gmail.com! Bạn chỉ cần nhấn Gửi trong Gmail.</span>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

