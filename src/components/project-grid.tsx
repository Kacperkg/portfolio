import React from "react";
import ProjectCard from "./project-card";
import { projectsData } from "~/constant/data/projects";

const ProjectGrid = () => {
  return (
    <div className="container mx-auto px-4">
      {projectsData.length === 0 ? (
        <div className="py-32 text-center">
          <h3 className="mb-4 text-2xl font-medium">No projects yet</h3>
          <p className="text-white/70">Check back soon for updates!</p>
        </div>
      ) : projectsData.length <= 2 ? (
        <div className="grid min-h-[50vh] grid-cols-1 gap-8 md:grid-cols-2">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectGrid;
