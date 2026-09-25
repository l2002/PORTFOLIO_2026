import { Experience, Project, SkillCategory, EducationItem, CertificateItem } from '../types';

export const personalInfo = {
  name: 'Nguyễn Minh Luân',
  title: 'SEO Specialist & Web Developer',
  tagline: 'Kết hợp kỹ thuật SEO chuẩn xác và lập trình Web hiện đại để bứt phá traffic & trải nghiệm.',
  bio: 'Tốt nghiệp chuyên ngành Công nghệ Phần mềm (HUIT). Đam mê tối ưu hóa công cụ tìm kiếm (On-page, Silo, Technical SEO) kết hợp thế mạnh phát triển Web hiện đại (ReactJS, WordPress, TailwindCSS) và ứng dụng AI để tối đa hóa hiệu suất.',
  email: 'luannguyen0202.huit@gmail.com',
  phone: '0783725958',
  location: 'Hóc Môn, TP. Hồ Chí Minh',
  github: 'https://github.com/l2002',
  portfolioDemo: 'https://l2002.github.io/portfolio/',
  shopeeShop: 'https://shopee.vn/shop/126386465',
  availableForWork: true,
};

export const experiences: Experience[] = [
  {
    id: 'falico',
    role: 'Junior SEO Website',
    company: 'CÔNG TY TNHH TM DV MINH PHÚ FALICO',
    period: '04/2026 — Hiện tại',
    type: 'fulltime',
    highlights: [
      'Nghiên cứu bộ từ khóa 10.000+ từ cho các nhóm dịch vụ (Giặt Nệm, Sofa, Ghế, Topper...).',
      'Xây dựng hệ thống SILO, Topic Cluster và hơn 200 Outline bài viết chuẩn SEO.',
      'Tối ưu On-page SEO, URL structure, xử lý breadcrumbs và ảnh chuẩn công cụ tìm kiếm.',
      'Tận dụng AI và Vibe Coding tools để tự động hóa, tăng tốc độ sản xuất nội dung chất lượng cao.',
    ],
    skills: ['Silo Structure', 'Topic Cluster', 'On-page SEO', 'AI Workflow', 'Keyword Research'],
  },
  {
    id: 'shopee',
    role: 'Chủ gian hàng / Vận hành E-Commerce',
    company: 'GIAN HÀNG CÁ NHÂN — SHOPEE',
    period: '2025 — 2026',
    type: 'freelance',
    highlights: [
      'Ứng dụng thuật toán SEO sàn: Nghiên cứu volume tìm kiếm để tối ưu tiêu đề, mô tả và hashtag sản phẩm.',
      'Tối ưu tỷ lệ chuyển đổi (CTR/CR) thông qua hình ảnh thu hút và nội dung chuẩn SEO.',
    ],
    skills: ['Shopee SEO', 'E-commerce SEO', 'Data Analytics', 'Conversion Rate'],
    link: 'https://shopee.vn/shop/126386465',
  },
  {
    id: 'phongtro123',
    role: 'Full-stack Developer',
    company: 'DỰ ÁN CLONE PHONGTRO123 (Nền tảng Listing)',
    period: '11/2025 — 03/2026',
    type: 'project',
    highlights: [
      'Xây dựng ứng dụng Single Page Application (SPA) với ReactJS & TailwindCSS, tối ưu độ mượt và thời gian phản hồi Client.',
      'Thiết kế bộ lọc và tìm kiếm nâng cao với URL động thân thiện chuẩn SEO bot.',
      'Phát triển RESTful API với Node.js, ExpressJS và cơ sở dữ liệu MySQL.',
    ],
    skills: ['ReactJS', 'TailwindCSS', 'Node.js', 'ExpressJS', 'MySQL', 'RESTful API', 'SEO-friendly URL'],
    link: 'https://cho-thue-phong-tro.vercel.app/',
  },
  {
    id: 'isvn20',
    role: 'Thực tập sinh Digital Marketing',
    company: 'CÔNG TY CỔ PHẦN ISVN20',
    period: '09/2023 — 12/2023',
    type: 'internship',
    highlights: [
      'Quản trị website WordPress về Văn hóa Nhật Bản (nhatbanaz): tối ưu on-page, heading, internal link, URL.',
      'Viết 20+ bài viết chuẩn SEO chuyên sâu, giúp gia tăng lưu lượng truy cập tự nhiên cho website.',
      'Hỗ trợ xây dựng liên kết backlink và đẩy thứ hạng từ khóa mục tiêu.',
    ],
    skills: ['WordPress CMS', 'Content SEO', 'Internal Linking', 'Backlinks', 'On-page'],
    link: 'https://nhatbanaz.wordpress.com/',
  },
];

export const projects: Project[] = [
  {
    id: 'project-video-1',
    title: 'Demo Video Dự Án: Fullstack & Technical SEO',
    description: 'Video giới thiệu chi tiết kiến trúc ứng dụng, cách tổ chức mã nguồn ReactJS, tối ưu luồng dữ liệu và cấu trúc liên kết thân thiện với công cụ tìm kiếm.',
    youtubeId: 'Rw9pocBdXmw',
    youtubeUrl: 'https://youtu.be/Rw9pocBdXmw?si=lE-ojrffB7BRbLZ9',
    category: 'Full-stack / Web App',
    tags: ['ReactJS', 'TailwindCSS', 'SEO Friendly', 'Fast Performance', 'SPA'],
    demoUrl: 'https://cho-thue-phong-tro.vercel.app/',
    githubUrl: 'https://github.com/l2002/CHO-THUE-PHONG-TRO',
    featured: true,
  },
  {
    id: 'project-video-2',
    title: 'Demo Video Dự Án: Giao Diện & Tối Ưu Trải Nghiệm',
    description: 'Video thực tế trải nghiệm các tính năng điều hướng, hệ thống lọc tìm kiếm theo danh mục và tốc độ tải trang phản hồi cực nhanh trên nhiều thiết bị.',
    youtubeId: 'NeBPmJ0t-Qo',
    youtubeUrl: 'https://youtu.be/NeBPmJ0t-Qo?si=iEH20IziCXLsmLlG',
    category: 'UI/UX & Optimization',
    tags: ['UX/UI', 'Responsive', 'Dynamic Routing', 'CMS', 'Speed SEO'],
    demoUrl: 'https://l2002.github.io/portfolio/',
    githubUrl: 'https://github.com/l2002',
    featured: true,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'SEO & Tối Ưu Hóa',
    iconName: 'Search',
    skills: [
      { name: 'Technical SEO' },
      { name: 'On-page SEO' },
      { name: 'Cấu trúc Silo' },
      { name: 'Topic Cluster' },
      { name: 'E-commerce SEO' },
      { name: 'Internal Link' },
    ],
  },
  {
    title: 'Công Cụ & Phân Tích',
    iconName: 'BarChart3',
    skills: [
      { name: 'Google Search Console (GSC)' },
      { name: 'Google Analytics 4 (GA4)' },
      { name: 'Ahrefs' },
      { name: 'Semrush' },
      { name: 'Screaming Frog' },
      { name: 'Keyword Planner' },
    ],
  },
  {
    title: 'Lập Trình & Web Tech',
    iconName: 'Code2',
    skills: [
      { name: 'ReactJS' },
      { name: 'TailwindCSS' },
      { name: 'JavaScript (ES6+)' },
      { name: 'WordPress CMS' },
      { name: 'HTML5 / CSS3' },
      { name: 'Node.js & MySQL' },
    ],
  },
  {
    title: 'AI & Hiệu Suất Cao',
    iconName: 'Sparkles',
    skills: [
      { name: 'AI Vibe Coding' },
      { name: 'Automation Workflow' },
      { name: 'Prompt Engineering' },
      { name: 'Tối ưu tốc độ tải trang (PageSpeed)' },
      { name: 'Mobile-first UX' },
    ],
  },
];

export const educationList: EducationItem[] = [
  {
    degree: 'Cử nhân Công nghệ Phần mềm',
    school: 'Đại học Công Thương TP. Hồ Chí Minh (HUIT)',
    period: '2020 — 2025',
    details: 'GPA 2.86 • Chuyên ngành phát triển phần mềm, kiến trúc web và hệ thống thông tin.',
  },
];

export const certificatesList: CertificateItem[] = [
  {
    name: 'JavaScript Nâng Cao',
    issuer: 'F8 FullStack',
    date: '05/2025',
  },
  {
    name: 'JavaScript Cơ Bản',
    issuer: 'F8 FullStack',
    date: '07/2023',
  },
];

export const specialSkillsData = {
  sectionTitle: 'Kỹ Năng Đặc Biệt',
  highlight: 'Biết Code + Biết Linux',
  tagline: 'Lợi thế cạnh tranh hiếm có: Tối ưu SEO từ chiều sâu mã nguồn đến tận cấu hình hạ tầng máy chủ',
  coding: {
    title: 'Kỹ Năng 1: Biết Code',
    badge: 'Software & Frontend Mastery',
    subtitle: 'Lập trình Frontend & Tối ưu Core Web Vitals',
    description: 'Xuất thân từ chuyên ngành Công nghệ Phần mềm (HUIT), có khả năng đọc hiểu, gỡ lỗi và viết mã nguồn trực tiếp (ReactJS, JavaScript, TailwindCSS) thay vì chỉ chỉnh sửa bề mặt.',
    points: [
      'Đọc & viết thành thạo JavaScript (ES6+), ReactJS, TailwindCSS, cấu trúc DOM',
      'Tối ưu các chỉ số Core Web Vitals (LCP, INP, CLS) giảm thiểu render-blocking resources',
      'Tự viết Schema JSON-LD có cấu trúc (Breadcrumb, Article, Product, Organization, FAQ)',
      'Phát triển công cụ AI Vibe Coding & script tự động hóa gom cụm từ khóa, sinh outline',
      'Hiểu sâu cơ chế Client-side Rendering (CSR) vs Server-side Rendering (SSR) trong SEO bot',
    ],
    techTags: ['ReactJS', 'JavaScript / TypeScript', 'TailwindCSS', 'Node.js', 'Core Web Vitals', 'Schema JSON-LD', 'REST API'],
    snippetTitle: 'SEO-Optimizer.tsx',
    snippetCode: `// Tự động hóa cấu trúc Schema & Tối ưu Core Web Vitals
export const injectArticleSchema = (article: ArticleData) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": article.title,
    "keywords": article.keywords.join(", "),
    "image": article.optimizedWebpUrl,
    "publisher": { "@type": "Organization", "name": "Falico" },
    "datePublished": article.publishedAt,
  };
  return JSON.stringify(schema);
};`,
  },
  linux: {
    title: 'Kỹ Năng 2: Biết Linux',
    badge: 'System Admin & Terminal Power',
    subtitle: 'Làm chủ Terminal, Server & Phân tích Log Crawl',
    description: 'Thành thạo dòng lệnh Linux (Kali Linux, Ubuntu), quản trị web server Nginx/Apache, theo dõi hành vi của bot công cụ tìm kiếm qua Server Access Logs và tối ưu tốc độ máy chủ (TTFB).',
    points: [
      'Sử dụng thành thạo CLI Terminal & viết Bash script tự động hóa tác vụ',
      'Quản trị máy chủ web Nginx, Apache, cấu hình reverse proxy, SSL certbot & CDN',
      'Phân tích Server Access Logs để theo dõi chính xác tần suất và thời điểm Googlebot crawl',
      'Tối ưu Time to First Byte (TTFB), gzip/brotli compression và cache policy ở tầng server',
      'Kiến thức mạng & bảo mật thông tin (Network protocols, iptables, kiểm thử bảo mật WiFi)',
    ],
    techTags: ['Kali Linux', 'Ubuntu Server', 'Bash Scripting', 'Nginx & Apache', 'Googlebot Log Analysis', 'TTFB Optimization', 'Network & SSL'],
    snippetTitle: 'nginx-access-log-audit.sh',
    snippetCode: `#!/bin/bash
# Phân tích tần suất Googlebot crawl website theo thời gian thực
echo "[+] Đang quét log Googlebot từ /var/log/nginx/access.log..."
grep -i "Googlebot" /var/log/nginx/access.log | \\
awk '{print $1, $4, $7, $9}' | \\
sort | uniq -c | sort -nr | head -n 10
echo "[✓] Phát hiện 1,428 lượt crawl hôm nay - Mã HTTP 200: 98.4%"`,
  },
};
