import Link from "next/link";
import BackButton from "~/components/back-button";
import { projectsData } from "~/constant/data/projects";
import Image from "next/image";

interface Props {
  params: Promise<{ id: string }>;
}

// Made the component async
export default async function ProjectDetail({ params }: Props) {
  // Await the params
  const { id } = await params;
  const projectId = Number(id);
  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="mb-4 text-2xl">Project not found</h1>
        <Link href="#">Return to Projects</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={project.imageUrl}
            alt={project.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/90"></div>
        </div>

        {/* Construction Banner */}
        {project.construction && (
          <div className="absolute top-0 left-0 z-20 w-full border-b-4 border-black bg-gradient-to-r from-yellow-400 to-yellow-600 py-3">
            <div className="container mx-auto flex items-center justify-center space-x-3 px-4">
              <span className="text-sm font-bold tracking-wider text-black uppercase">
                Under Construction - Learn More Later
              </span>
            </div>
            <div className="bg-repeating-stripes absolute bottom-0 left-0 h-2 w-full"></div>
          </div>
        )}

        {/* Navigation */}
        <div
          className={`absolute top-0 left-0 z-10 w-full p-6 ${
            project.construction ? "mt-16" : ""
          }`}
        >
          <BackButton>Back to projects</BackButton>
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 w-full p-8">
          <div className="container mx-auto">
            <div className="max-w-4xl">
              <h1 className="animate-fade-in mb-4 text-5xl font-bold text-white md:text-7xl">
                {project.title}
              </h1>
              <div className="mb-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border-2 border-white px-2.5 py-0.5 text-xs font-semibold text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-8 py-16">
        <div className="mx-auto max-w-4xl">
          {/* Description */}
          <div className="mb-8 rounded-lg border-2 border-white bg-black">
            <div className="p-8">
              <h2 className="mb-4 text-2xl font-bold text-white">
                About This Project
              </h2>
              <p className="text-lg leading-relaxed text-white">
                {project.description}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          {!project.construction && (
            <div className="flex flex-wrap justify-center gap-4">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md border-2 border-white bg-white px-8 py-3 text-lg text-black transition-colors hover:bg-gray-200"
                >
                  View Live Demo
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-md border-2 border-white px-8 py-3 text-lg text-white transition-colors hover:bg-white hover:text-black"
                >
                  View Code
                </a>
              )}
            </div>
          )}

          {/* Construction Message */}
          {project.construction && (
            <div className="rounded-lg border-2 border-black bg-yellow-400">
              <div className="p-8 text-center">
                <h3 className="mb-4 text-2xl font-bold text-black">
                  Coming Soon
                </h3>
                <p className="text-lg text-black">
                  This project is currently under active development. Check back
                  later for live demos and source code access!
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
