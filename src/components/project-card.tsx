import Link from "next/link";
import type { ProjectCardProps } from "~/constant/interfaces";

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  technologies,
  demoUrl,
  githubUrl,
}) => {
  return (
    <div className="group rounded-sm bg-[#111111] transition-all duration-300 hover:scale-101">
      <div className="overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="project-image transition-all duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-2xl font-bold">{title}</h3>
        <p className="mb-4 text-white/70">{description}</p>
        <div className="mb-6 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-white/10 px-3 py-1 text-sm text-white/80"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          {demoUrl && (
            <Link
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm bg-white px-3 py-1 text-sm text-black transition-all duration-300 hover:scale-105"
            >
              {demoUrl ? "Live Demo" : "Learn More"}
            </Link>
          )}
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm bg-white/10 px-3 py-1 text-sm text-white/80 transition-all duration-300 hover:bg-white/20"
            >
              View Code
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
