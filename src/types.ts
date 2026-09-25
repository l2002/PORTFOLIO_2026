export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  type: 'fulltime' | 'freelance' | 'internship' | 'project';
  highlights: string[];
  skills: string[];
  link?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  youtubeUrl: string;
  category: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; level?: string }[];
}

export interface EducationItem {
  degree: string;
  school: string;
  period: string;
  details?: string;
}

export interface CertificateItem {
  name: string;
  issuer: string;
  date: string;
}

export interface SpecialSkillDetail {
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  points: string[];
  techTags: string[];
  snippetTitle: string;
  snippetCode: string;
}
