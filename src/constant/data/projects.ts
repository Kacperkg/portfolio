import type { Project } from "~/constant/interfaces";
import hivePreview from "~/assets/hive-preview.png";
import portfolioPreview from "~/assets/portfolio-preview.png";

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Portfolio Redesign",
    description: "A minimal, dark-themed personal portfolio.",
    imageUrl: portfolioPreview.src,
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
