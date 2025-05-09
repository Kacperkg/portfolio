import React from "react";
import Link from "next/link";
import { Github, Mail, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-auto border-t border-white/10 bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-6 md:mb-0">
            <p className="text-sm text-white/70">
              © 2025 Kacper Gajdarski. All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 transition-colors hover:text-white"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:gajdarski.kacper@gmail.com"
              className="text-white/70 transition-colors hover:text-white"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 transition-colors hover:text-white"
            >
              <Linkedin size={20} />
            </a>
          </div>

          <div className="mt-6 md:mt-0">
            <ul className="flex items-center space-x-6">
              <li>
                <Link
                  href="/"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
