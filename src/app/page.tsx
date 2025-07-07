"use client";

import Link from "next/link";
import { MapPin as FeatherIcon } from "react-feather";
import Footer from "~/components/footer";
import Nav from "~/components/nav";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <Nav />
      <div className="flex min-h-screen flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <motion.h1
            className="text-center text-7xl font-light tracking-tight text-white sm:text-[7rem] lg:text-[10rem]"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            KACPER <br /> GAJDARSKI
          </motion.h1>
          <motion.div
            className="flex flex-col items-center gap-2 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-white/50 md:text-2xl">
              Frontend Developer.
            </p>
            <p className="text-xl text-white/50 md:text-2xl">
              Computing Science Graduate @{" "}
              <Link
                target="_blank"
                href="https://www.hw.ac.uk/"
                className="relative after:absolute after:right-0 after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:origin-right after:bg-gray-400 after:transition-[width] after:duration-300 after:ease-in-out hover:after:w-full"
              >
                Heriot-Watt University
              </Link>
            </p>
            <p className="flex items-center gap-2 text-xl text-white/50 md:text-2xl">
              <FeatherIcon
                name="map-pin"
                className="hidden text-[#DC143C] sm:inline-block"
              />
              Based in Edinburgh, Scotland. UK.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col gap-4 text-center md:flex-row"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link
              href="/projects"
              className="rounded-md bg-white px-6 py-4 text-xl text-[#171717] transition-all duration-100 hover:scale-105 md:px-4 md:py-2 md:text-2xl"
            >
              Projects
            </Link>
            <a
              href={"/cv.pdf"}
              download
              className="cursor-pointer rounded-md bg-white px-6 py-4 text-xl text-[#171717] transition-all duration-100 hover:scale-105 md:px-4 md:py-2 md:text-2xl"
            >
              CV
            </a>
            <Link
              href="/about"
              className="rounded-md bg-white px-6 py-4 text-xl text-[#171717] transition-all duration-100 hover:scale-105 md:px-4 md:py-2 md:text-2xl"
            >
              About
            </Link>
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
