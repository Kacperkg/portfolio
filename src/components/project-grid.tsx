"use client";

import React from "react";
import ProjectCard from "./project-card";
import { projectsData } from "~/constant/data/projects";
import { motion } from "framer-motion";

const ProjectGrid = () => {
  return (
    <div className="container mx-auto px-4">
      {projectsData.length === 0 ? (
        <div className="py-32 text-center">
          <h3 className="mb-4 text-2xl font-medium">No projects yet</h3>
          <p className="text-white/70">Check back soon for updates!</p>
        </div>
      ) : (
        <div className="grid min-h-[50vh] grid-cols-1 gap-8 md:grid-cols-2">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectGrid;
