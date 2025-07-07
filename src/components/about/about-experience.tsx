"use client";

import { motion } from "framer-motion";
import experiences from "~/constant/data/experience";

export const Experience = () => {
  return (
    <section className="border-t border-white/10 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="col-span-1">
            <h2 className="text-secondary mb-3 text-lg tracking-widest uppercase">
              Experience
            </h2>
          </div>

          <div className="md:col-span-2">
            {experiences.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`py-6 ${index !== experiences.length - 1 ? "border-b border-white/10" : ""}`}
              >
                <div className="mb-1 flex flex-col md:flex-row md:justify-between">
                  <span className="text-secondary text-sm">{item.period}</span>
                  <h3 className="text-xl font-medium">{item.company}</h3>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between">
                  <span className="text-secondary text-sm">{item.role}</span>
                  <span className="text-secondary text-sm">
                    {item.location}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
