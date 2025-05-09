import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 flex h-16 items-center justify-between border-b border-white/10 bg-black/90 px-6 backdrop-blur-sm">
      <div className="flex items-center">
        <Link href="/" className="text-2xl font-light">
          @KacperGajdarski
        </Link>
      </div>
      <div className="flex items-center space-x-6">
        <Link
          href="/projects"
          className="relative text-xl font-light after:absolute after:right-0 after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:origin-right after:bg-white after:transition-[width] after:duration-300 after:ease-in-out hover:after:w-full"
        >
          Projects
        </Link>
        <Link
          href="/about"
          className="relative text-xl font-light after:absolute after:right-0 after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:origin-right after:bg-white after:transition-[width] after:duration-300 after:ease-in-out hover:after:w-full"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="relative text-xl font-light after:absolute after:right-0 after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:origin-right after:bg-white after:transition-[width] after:duration-300 after:ease-in-out hover:after:w-full"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
