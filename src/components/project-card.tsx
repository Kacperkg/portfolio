import Link from "next/link";
import type { Project } from "~/constant/type";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="mb-8 flex flex-col gap-4">
      <div className="group relative flex aspect-[16/7] w-full max-w-7xl flex-col gap-4 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4"
          alt="Project 1"
          className="h-full w-full rounded-2xl object-cover"
        />
        <div className="absolute right-0 bottom-[-100%] flex h-1/2 w-full flex-col justify-center bg-black/80 p-6 transition-all duration-200 ease-in-out group-hover:bottom-0">
          <p className="text-white/70">{project.description}</p>
          <div className="mt-4">
            <h4 className="text-white/70">Technologies</h4>
            <p className="text-white/70">{project.technologies.join(", ")}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-light">{project.year}</h1>
        <Link href={`/projects/${project.title}`}>
          <h1 className="text-2xl font-light">{project.title}</h1>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
