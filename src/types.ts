export type PersonaMode = 'all' | 'engineering' | 'scrum';

export interface ArchitectureNode {
  layer: string;
  technology: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Mobile Application' | 'B2B Enterprise SaaS' | 'Marketplace' | 'E-Commerce';
  techStack: string[];
  framework: string;
  image: string;
  description: string;
  overview: string;
  features: string[];
  responsibilities: string[];
  architecture: string[];
  architectureFlow?: ArchitectureNode[];
  impactMetrics?: { label: string; value: string }[];
  liveUrl?: string;
  badge?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  type: string;
  highlights: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  honors?: string;
}

export interface SkillCategory {
  category: string;
  skills: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Proficient';
    years?: string;
  }[];
}
