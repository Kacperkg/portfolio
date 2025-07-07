import type { SkillCategory } from "~/constant/interfaces";

const skillCategories: SkillCategory[] = [
  {
    title: "Front-End Development",
    skills: [
      "React",
      "TypeScript",
      "HTML/CSS",
      "Tailwind CSS",
      "Shadcn/UI",
      "Next.js",
    ],
  },
  {
    title: "Back-End",
    skills: ["tRPC", "Prisma", "Supabase", "Clerk"],
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
