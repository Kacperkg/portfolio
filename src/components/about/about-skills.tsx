"use client";

import { motion } from "framer-motion";
import skillCategories from "~/constant/data/skills";

export const Skills = () => {
  return (
    <section className="border-t border-white/10 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-6"
            >
              <h3 className="mb-4 text-xl font-medium">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-secondary">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
