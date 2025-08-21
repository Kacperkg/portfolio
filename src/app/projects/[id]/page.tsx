import Link from "next/link";
import BackButton from "~/components/back-button";
import { projectsData } from "~/constant/data/projects";
import Image from "next/image";
import { Card } from "~/components/ui/card";

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
            fill
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
        <div className="mx-auto flex max-w-4xl flex-col gap-8">
          {/* Purpose */}
          <section className="flex flex-col gap-4">
            <h2 className="font-display text-3xl font-semibold text-white">
              About This Project
            </h2>
            {project.purpose && (
              <Card className="bg-gradient-secondary border-border/50 p-8">
                <h3 className="mb-4 text-xl font-semibold text-white">
                  Purpose & Vision
                </h3>
                <p className="mt-2 text-white/70">{project.purpose.desc}</p>
              </Card>
            )}

            {/* Learning Goals */}

            {project.learningGoal && (
              <Card className="bg-gradient-secondary border-border/50 p-8">
                <h3 className="mb-4 text-xl font-semibold text-white">
                  Learning Goals
                </h3>
                <p className="mt-2 text-white/70">
                  {project.learningGoal.desc}
                </p>
              </Card>
            )}
          </section>

          {/* Tech Stack */}
          <section className="mt-8 space-y-8">
            <h2 className="font-display text-3xl font-semibold text-white">
              Technology Stack
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              {project.techStack?.map((tech, index) => (
                <Card
                  key={index}
                  className="bg-gradient-secondary border-border/50 group p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-slate-200 p-3 text-slate-800">
                      <tech.icon />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-white">{tech.title}</h3>
                      <p className="text-sm leading-relaxed text-white/80">
                        {tech.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Technical Description */}
          {project.technicalDesc && (
            <section className="space-y-6 pt-4">
              <h2 className="font-display text-3xl font-semibold text-white">
                Technical Decisions
              </h2>
              <Card className="bg-gradient-secondary border-border/50 p-8">
                <h3 className="text-xl font-semibold text-white">
                  {project.technicalDesc.backEndArch.title}
                </h3>
                <p className="mt-2 text-white/70">
                  {project.technicalDesc.backEndArch.desc}
                </p>
              </Card>
              <Card className="bg-gradient-secondary border-border/50 p-8">
                <h3 className="text-xl font-semibold text-white">
                  {project.technicalDesc.devPhys.title}
                </h3>
                <p className="mt-2 text-white/70">
                  {project.technicalDesc.devPhys.desc}
                </p>
              </Card>
            </section>
          )}

          {/* Action Buttons */}
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
        </div>
      </div>
    </div>
  );
}
