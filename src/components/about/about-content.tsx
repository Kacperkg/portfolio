"use client";

import { motion } from "framer-motion";

const AboutContent = () => {
  return (
    <section className="border-t border-white/10 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="col-span-1">
            <h2 className="text-secondary mb-3 text-lg tracking-widest uppercase">
              About
            </h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <p className="mb-6 text-xl leading-relaxed">
              I graduated from Heriot-Watt University with a 2:1 in Computing
              Science (Software Engineering). I love building front-end
              interfaces because I get to see my changes in real time and
              directly improve the user&apos;s experience and journey.
            </p>
            <p className="text-secondary mb-6 text-xl leading-relaxed">
              I enjoy creating digital products that are not only visually
              appealing but also genuinely helpful to users. My focus is always
              on making things intuitive and enjoyable to use.
            </p>
            <p className="text-secondary text-xl leading-relaxed">
              For me, it&apos;s all about combining great design with smooth
              functionality, so every project I work on feels seamless and
              user-friendly from start to finish.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
