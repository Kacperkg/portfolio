import Footer from "~/components/footer";
import Nav from "~/components/nav";
import ProjectCard from "~/components/project-card";
import projects from "~/constant/projects";

export default function ProjectsPage() {
  return (
    <>
      <main className="min-h-screen bg-black text-white">
        <Nav />
        <div className="m-auto mt-8 flex max-w-7xl flex-col">
          <div className="container flex max-w-7xl flex-col items-center justify-center gap-12 px-4 py-16">
            <h1 className="w-full text-4xl font-light tracking-tight text-white sm:text-[3rem] lg:text-[5rem]">
              Selected
              <br />
              Projects
            </h1>
            <div className="flex w-full flex-col gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
