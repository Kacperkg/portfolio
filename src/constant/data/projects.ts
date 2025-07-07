import type { Project } from "~/constant/interfaces";
import hivePreview from "~/assets/hive-preview.png";
import carvaultPreview from "~/assets/carvault-preview.jpg";
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
    githubUrl: "https://github.com/kacperkg/portfolio",
  },
  {
    id: 2,
    title: "CarVault - Car Tracking Website",
    description:
      "A modern, interactive car tracking website for car enthusiasts.",
    imageUrl: carvaultPreview.src,
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Next.js",
      "Shadcn/UI",
      "tRPC",
      "Supabase",
      "Clerk",
      "Vercel",
    ],
    construction: true,
    demoUrl: "https://carvault.kacpergajdarski.com",
    githubUrl: "https://github.com/Kacperkg/cargarage",
  },
];
