"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const AboutLanding = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-screen flex-col justify-center pt-24 pb-16"
    >
      <div className="animate-fade-in mx-auto max-w-4xl">
        <div className="mb-8 text-left">
          <h2 className="text-secondary mb-3 text-lg tracking-widest uppercase">
            About Me
          </h2>
          <h1 className="text-6xl font-medium tracking-tighter sm:text-7xl md:text-8xl">
            Kacper Gajdarski.
          </h1>
        </div>

        <p className="text-secondary mb-8 max-w-3xl text-xl leading-relaxed md:text-2xl">
          Frontend developer based in Edinburgh, focusing on creating responsive
          web applications. Recently graduated and eager to apply my skills in
          real-world projects.
        </p>

        <Link
          href="mailto:gajdarski.kacper@gmail.com"
          className="group flex w-fit items-center rounded-sm bg-white px-4 px-8 py-2 text-black"
        >
          Get in touch
          <ArrowRight className="ml-2 h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.section>
  );
};
