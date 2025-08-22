import type { Project } from "~/constant/interfaces";
import carvaultPreview from "~/assets/carvault-preview.jpg";
import portfolioPreview from "~/assets/portfolio-preview.png";
import {
  Car,
  Cloud,
  Code,
  Database,
  FileCode,
  Layers,
  Paintbrush,
  Shield,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-react";

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
    purpose: {
      title: "Purpose",
      desc: "The purpose of this portfolio website is to showcase my skills, projects, and experience as a developer in a clean, modern, and easily navigable format. It serves as a central hub for potential employers, collaborators, and clients to learn more about my work and technical abilities.",
    },
    techStack: [
      {
        icon: Code,
        title: "React",
        description:
          "Component-based UI library for building interactive user interfaces",
      },
      {
        icon: FileCode,
        title: "TypeScript",
        description:
          "Strongly typed JavaScript for safer and more maintainable code",
      },
      {
        icon: Paintbrush,
        title: "Tailwind CSS",
        description:
          "Utility-first CSS framework for rapid and responsive styling",
      },
      {
        icon: Layers,
        title: "Next.js",
        description:
          "Full-stack React framework with server-side rendering and static generation",
      },
      {
        icon: Sparkles,
        title: "Framer Motion",
        description:
          "Powerful animation library for smooth and interactive motion design",
      },
      {
        icon: Cloud,
        title: "Vercel",
        description:
          "Optimized deployment platform for Next.js with global edge network",
      },
    ],
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
    purpose: {
      title: "Purpose & Vision",
      desc: "This project serves as a personal hobby platform where I can track detailed information about my car (and hopefully future cars). I wanted to create a practical space to log projects, road trips, and general car-related activities that feels both functional and fun.",
    },
    learningGoal: {
      title: "Learning Goals",
      desc: "I built this primarily to practice React concepts and learn how to apply them in a real-world scenario. Instead of creating a bunch of small, disconnected projects, I wanted to develop something that feels like an actual product I could use day-to-day.",
    },
    techStack: [
      {
        icon: Car,
        title: "Next.js 14",
        description:
          "Server-side rendering with App Router for optimal performance",
      },
      {
        icon: Code,
        title: "TypeScript",
        description: "Type safety and enhanced development experience",
      },
      {
        icon: Zap,
        title: "tRPC",
        description: "End-to-end type safety without GraphQL complexity",
      },
      {
        icon: Database,
        title: "Prisma + PostgreSQL",
        description: "Type-safe database toolkit with robust queries",
      },
      {
        icon: Shield,
        title: "Clerk Auth",
        description: "Secure authentication with pre-built components",
      },
      {
        icon: Wrench,
        title: "Tailwind + shadcn/ui",
        description: "Utility-first styling with reusable components",
      },
    ],
    technicalDesc: {
      backEndArch: {
        title: "Backend Architecture",
        desc: "I'm using Supabase with PostgreSQL for the backend. Supabase provides real-time subscriptions and built-in authentication, while PostgreSQL offers a reliable database for storing car data, user information, and logs. For file uploads, I chose UploadThing as it integrates seamlessly with my stack and simplifies image handling for car photos and documentation.",
      },
      devPhys: {
        title: "Development Philosophy",
        desc: "This project helps me understand how different tools fit together in a full-stack application, while giving me a platform I can actually use for my car hobby. It's about learning by building something real rather than following tutorials.",
      },
    },
  },
];
