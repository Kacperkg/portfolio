import { type LucideIcon } from "lucide-react";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  construction?: boolean;

  purpose?: Purpose;
  learningGoal?: LearningGoal;
  techStack?: TechItem[];
  technicalDesc?: TechincalDecision;
}

interface TechItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface TechincalDecision {
  backEndArch: BackendArch;
  devPhys: DevelopmentPhys;
}

interface BackendArch {
  title: string;
  desc: string;
}

interface DevelopmentPhys {
  title: string;
  desc: string;
}

interface Purpose {
  title: string;
  desc: string;
}

interface LearningGoal {
  title: string;
  desc: string;
}

interface ExperienceItem {
  period: string;
  company: string;
  location: string;
  role: string;
}

interface SkillCategory {
  title: string;
  skills: string[];
}

export type { ProjectCardProps, Project, ExperienceItem, SkillCategory };
