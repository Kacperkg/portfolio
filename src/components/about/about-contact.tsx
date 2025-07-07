"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";

export const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border-t border-white/10 py-24"
    >
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="col-span-1">
            <h2 className="text-secondary mb-3 text-lg tracking-widest uppercase">
              Contact
            </h2>
          </div>

          <div className="md:col-span-2">
            <h3 className="mb-8 text-2xl font-medium md:text-3xl">
              Let&apos;s connect.
            </h3>

            <div className="mb-12">
              <p className="text-secondary mb-6 text-lg">Drop me a line at:</p>
              <a
                href="mailto:gajdarski.kacper@gmail.com"
                className="hover:text-secondary text-xl transition-colors md:text-2xl"
              >
                gajdarski.kacper@gmail.com
              </a>
            </div>

            <div>
              <p className="text-secondary mb-6 text-lg">Find me on:</p>
              <div className="flex space-x-5">
                <a
                  href="https://www.linkedin.com/in/kacper-gajdarski-9b9b55233/"
                  target="_blank"
                  className="text-white/70 transition-colors hover:text-white"
                >
                  <Linkedin className="h-6 w-6" />
                </a>

                <a
                  href="https://github.com/kacperkg"
                  target="_blank"
                  className="text-white/70 transition-colors hover:text-white"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="mailto:gajdarski.kacper@gmail.com"
                  target="_blank"
                  className="text-white/70 transition-colors hover:text-white"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
