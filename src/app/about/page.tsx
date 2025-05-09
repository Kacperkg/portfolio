import Footer from "~/components/footer";
import Nav from "~/components/nav";

export default function AboutPage() {
  return (
    <main>
      <Nav />
      <div className="m-auto mt-24 flex min-h-screen max-w-7xl flex-col">
        <h1 className="w-full text-3xl font-light tracking-tight text-white sm:text-[3rem] lg:text-[3rem]">
          About
        </h1>

        <div className="mt-12 flex flex-col gap-8">
          <h2 className="text-3xl font-light tracking-tight text-white sm:text-[2rem] lg:text-[3rem]">
            Hi, I&apos;m Kacper!
          </h2>
          <div className="flex max-w-3xl flex-col gap-4">
            <p className="text-3xl text-white/70">
              I&apos;m passionate about building beautiful and functional
              digital experiences. My main focus is front-end development, and I
              especially enjoy working with TypeScript and React—both for web
              and React Native mobile apps.
            </p>
            <p className="text-3xl text-white/70">
              I love the creative side of development, especially seeing my work
              come to life in real time. There&apos;s something special about
              building things—whether it&apos;s with code, Lego, or anything
              hands-on. That&apos;s why I gravitate toward front-end and
              interactive projects (and, honestly, why I&apos;m not a huge fan
              of backend work! 😂).
            </p>
            <p className="text-3xl text-white/70">
              I&apos;m based in the UK and open to both remote roles and
              in-person opportunities in Edinburgh or nearby. I&apos;m always
              eager to learn from more experienced developers—there&apos;s no
              better way to grow than by working alongside talented people.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
