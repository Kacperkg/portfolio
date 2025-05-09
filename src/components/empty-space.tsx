import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface EmptySpaceProps {
  projectCount: number;
}

const EmptySpace: React.FC<EmptySpaceProps> = ({ projectCount }) => {
  if (projectCount >= 3) return null;

  return (
    <div className="container mx-auto my-12 px-4">
      <div className="relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br from-gray-900 to-black p-8">
        <div className="bg-accent/20 absolute top-0 right-0 -mt-20 -mr-20 h-64 w-64 rounded-full opacity-50 blur-3xl"></div>
        <div className="bg-accent/10 absolute bottom-0 left-0 -mb-20 -ml-20 h-64 w-64 rounded-full opacity-30 blur-3xl"></div>

        <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="mb-4 inline-block rounded-sm bg-white/10 px-3 py-1 text-xs font-medium">
              Available for Work
            </span>
            <h2 className="mb-6 text-3xl leading-tight font-bold lg:text-5xl">
              Let&apos;s create something amazing together
            </h2>
            <p className="mb-8 max-w-md text-lg text-white/70">
              I&apos;m actively looking for a workplace as a front-end or mobile
              developer.
            </p>
            <Link
              href="mailto:gajdarski.kacper@gmail.com"
              className="group flex w-fit items-center rounded-sm bg-white px-4 px-8 py-2 text-black"
            >
              Get in touch
              <ArrowRight className="ml-2 h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="bg-accent/10 absolute -top-4 -right-4 h-24 w-24 rounded-full blur-xl"></div>
          <div className="bg-accent/10 absolute -bottom-4 -left-4 h-32 w-32 rounded-full blur-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default EmptySpace;
