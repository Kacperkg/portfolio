import type { SkillCategory } from "~/constant/interfaces";

const skillCategories: SkillCategory[] = [
  {
    title: "Front-End Development",
    skills: ["React", "TypeScript", "HTML/CSS", "Tailwind CSS"],
  },
  {
    title: "Mobile Development",
    skills: ["React Native", "Expo", "TypeScript", "iOS Simulator"],
  },
  {
    title: "Tools and Workflow",
    skills: [
      "Cursor",
      "Git & GitHub",
      "Figma (for UI)",
      "Chrome DevTools",
      "ESLint & Prettier",
    ],
  },
];

export default skillCategories;
