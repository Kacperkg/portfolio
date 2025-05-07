import Link from "next/link";

export default function Nav() {
  return (
    <nav className="mx-auto flex max-w-7xl flex-row items-center justify-between bg-transparent pt-8">
      <Link href="/" className="text-2xl font-light">
        @KacperGajdarski
      </Link>
      <div className="flex flex-row gap-6">
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
      </div>
    </nav>
  );
}
