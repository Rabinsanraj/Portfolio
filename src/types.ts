import { LucideIcon } from 'lucide-react';

export interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  type: string;
  location: string;
  description: string[];
}

export interface ProjectItem {
  id: number;
  title: string;
  role: string;
  description: string[];
  techStack: string[];
  verified: boolean;
  image: string;
  path:string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: LucideIcon;
}

export interface PvrSection {
  title: string;
  content: string;
  status: 'Verified' | 'Pending';
}