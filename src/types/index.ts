export interface NavLink {
  name: string;
  href: string;
}

export interface Project {
  title: string;         // max 60 chars
  description: string;   // max 150 chars
  tags: string[];        // 1-5 items
  link?: string;         // optional external URL
  image: string;         // image URL or local path
}

export interface Testimonial {
  name: string;
  title: string;         // job title
  quote: string;
}

export interface ExperienceEntry {
  id: string;
  company: string;
  jobTitle: string;
  dateRange: string;     // e.g. "Jan 2022 – Present"
  responsibilities: string[];
}

export interface Certification {
  name: string;          // max 100 chars
  organization: string;
  dateObtained: string;  // "Month Year" format
}

export interface PhaseInfo {
  number: number;
  title: string;
  description: string;   // max 200 chars
}

export interface SkillCategory {
  category: string;
  items: string[];
  icon: string;          // Lucide icon name
}
