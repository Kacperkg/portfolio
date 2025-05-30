import type { Project } from "~/constant/interfaces";
import hivePreview from "~/assets/hive-preview.png";

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Portfolio Redesign",
    description: "A minimal, dark-themed personal portfolio.",
    imageUrl:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Next.js",
      "Framer Motion",
      "Vercel",
    ],
    demoUrl: "https://kacpergajdarski.com",
    githubUrl: "https://github.com/kacpergajdarski/portfolio",
  },
  {
    id: 2,
    title: "Hive - Workout Planner App",
    description:
      "A modern, interactive workout planner for fitness enthusiasts.",
    imageUrl: hivePreview.src,
    technologies: [
      "React Native",
      "TypeScript",
      "Expo",
      "Convex",
      "Clerk",
      "Reanimated",
      "Magic.link",
    ],
    construction: true,
  },
];
