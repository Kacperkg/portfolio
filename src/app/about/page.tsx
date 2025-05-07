import Footer from "~/components/footer";
import Nav from "~/components/nav";

export default function AboutPage() {
  return (
    <main>
      <Nav />
      <div className="m-auto mt-8 flex max-w-7xl flex-col">
        <div className="container flex max-w-7xl flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="w-full text-4xl font-light tracking-tight text-white sm:text-[3rem] lg:text-[5rem]">
            About
          </h1>
          <div className="flex max-w-7xl flex-col gap-16 text-2xl font-light text-white/90">
            <div className="flex gap-8">
              <div className="basis-2/5 text-5xl font-semibold">01</div>
              <div className="flex basis-3/5 flex-col gap-4">
                <p>
                  Hi, I&apos;m <span className="font-semibold">Kacper</span>!
                  I&apos;m passionate about building beautiful and functional
                  digital experiences. My main focus is front-end development,
                  and I especially enjoy working with{" "}
                  <span className="font-semibold">TypeScript and React</span>
                  —both for web and React Native mobile apps.
                </p>
                <p>
                  I love the creative side of development, especially seeing my
                  work come to life in real time. There&apos;s something special
                  about building things—whether it&apos;s with code, Lego, or
                  anything hands-on. That&apos;s why I gravitate toward
                  front-end and interactive projects (and, honestly, why
                  I&apos;m not a huge fan of backend work!{" "}
                  <span role="img" aria-label="laughing">
                    😂
                  </span>
                  ).
                </p>
                <p>
                  I&apos;m based in the UK and open to both remote roles and
                  in-person opportunities in Edinburgh or nearby. I&apos;m
                  always eager to learn from more experienced
                  developers—there&apos;s no better way to grow than by working
                  alongside talented people.
                </p>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex basis-3/5 flex-col gap-4">
                <p>
                  Outside of tech, I&apos;m a petrolhead (especially for
                  Porsches), a fan of F1 and Formula Drift, and I love
                  traveling—road trips from the UK to Poland are already checked
                  off my list, but my dream is to drive across Japan and visit
                  Tokyo. And yes, one day I&apos;ll get that Porsche!
                </p>
                <p>
                  Right now, I&apos;m focused on deepening my skills in React
                  and TypeScript. In the next few years, I hope to keep
                  building, keep learning, and find a team that values growth,
                  creativity, and maybe even some fun animations. (If SwiftUI
                  takes over, maybe you&apos;ll find me at Apple working on
                  those sweet transitions!)
                </p>
              </div>
              <div className="flex basis-2/5 items-start justify-end text-5xl font-semibold">
                02
              </div>
            </div>
          </div>
        </div>
        {/* Interests */}
        <div className="mt-8 flex flex-wrap gap-4">
          <span className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-white">
            🏎️ Petrolhead
          </span>
          <span className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-white">
            🍜 Ramen & Sushi
          </span>
          <span className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-white">
            🏁 F1 & Formula Drift
          </span>
          <span className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-white">
            ✈️ Travelling
          </span>
        </div>
        {/* Experience */}
        <h2 className="mt-8 mb-2 text-2xl font-semibold text-white">
          Experience
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg bg-white/10 p-4 shadow">
            <h3 className="font-semibold text-white">
              Samsung Experience Store (PRS & Samsung)
            </h3>
            <p className="text-white/80">Sales & Product Advisor</p>
            <p className="text-sm text-white/60">2024 – Present, Edinburgh</p>
          </div>
          <div className="rounded-lg bg-white/10 p-4 shadow">
            <h3 className="font-semibold text-white">O2 UK</h3>
            <p className="text-white/80">Sales Advisor</p>
            <p className="text-sm text-white/60">2022 – 2024, Edinburgh</p>
          </div>
        </div>
        {/* Featured Project */}
        <div className="mt-8">
          <h2 className="mb-2 text-2xl font-semibold text-white">
            Featured Project
          </h2>
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <div>
              <h3 className="font-semibold text-white">
                Hive - Workout Planner App
              </h3>
              <p className="text-white/80">
                My favorite project so far, built as part of my dissertation. A
                modern, interactive workout planner for fitness enthusiasts.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
