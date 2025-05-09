interface ProjectCardProps {
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
