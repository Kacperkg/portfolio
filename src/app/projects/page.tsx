import Footer from "~/components/footer";
import Nav from "~/components/nav";
import ProjectGrid from "~/components/project-grid";
import { projectsData } from "~/constant/projects";
import EmptySpace from "~/components/empty-space";

export default function ProjectsPage() {
  return (
    <>
      <main className="min-h-screen bg-black text-white">
        <Nav />
        <div className="m-auto mt-8 flex max-w-7xl flex-col">
          <div className="container flex max-w-7xl flex-col items-center justify-center gap-12 px-4 py-16">
            <h1 className="w-full text-3xl font-light tracking-tight text-white sm:text-[3rem] lg:text-[3rem]">
              My Projects
            </h1>
            <ProjectGrid />
            <EmptySpace projectCount={projectsData.length} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
