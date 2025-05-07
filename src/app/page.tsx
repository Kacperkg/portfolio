import Link from "next/link";
import { MapPin as FeatherIcon } from "react-feather";
import Footer from "~/components/footer";
import Nav from "~/components/nav";

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <Nav />
      <div className="flex min-h-[90vh] flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-center text-8xl font-light tracking-tight text-white sm:text-[7rem] lg:text-[10rem]">
            KACPER <br /> GAJDARSKI
          </h1>
          <div className="flex flex-col gap-2">
            <p className="text-left text-2xl text-white/50">
              Looking for opportunities as a Frontend or Mobile Developer.
            </p>
            <p className="text-left text-2xl text-white/50">
              Computing Science Graduate @{" "}
              <Link
                target="_blank"
                href="https://www.hw.ac.uk/"
                className="relative after:absolute after:right-0 after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:origin-right after:bg-gray-400 after:transition-[width] after:duration-300 after:ease-in-out hover:after:w-full"
              >
                Heriot-Watt University
              </Link>
            </p>
            <p className="flex items-center gap-2 text-left text-2xl text-white/50">
              Based in Edinburgh, Scotland. UK.
              <FeatherIcon
                name="map-pin"
                className="inline-block text-[#DC143C]"
              />
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <Link
              href="/projects"
              className="rounded-md bg-white px-4 py-2 text-2xl text-[#171717] transition-all duration-100 hover:scale-105"
            >
              Projects
            </Link>
            <a
              href="/cv.pdf"
              download="cv.pdf"
              className="cursor-pointer rounded-md bg-white px-4 py-2 text-2xl text-[#171717] transition-all duration-100 hover:scale-105"
            >
              CV
            </a>
            <Link
              href="/about"
              className="rounded-md bg-white px-4 py-2 text-2xl text-[#171717] transition-all duration-100 hover:scale-105"
            >
              About
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
