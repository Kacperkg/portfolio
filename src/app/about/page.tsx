import { Mail } from "lucide-react";
import { Github } from "lucide-react";
import { Linkedin } from "lucide-react";
import Footer from "~/components/footer";
import Nav from "~/components/nav";
import experiences from "~/constant/data/experience";
import skillCategories from "~/constant/data/skills";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Nav />

      <AboutLanding />
      <AboutContent />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}

const AboutLanding = () => {
  return (
    <section className="flex min-h-screen flex-col justify-center pt-24 pb-16">
      <div className="animate-fade-in mx-auto max-w-4xl">
        <div className="mb-8">
          <h2 className="text-secondary mb-3 text-lg tracking-widest uppercase">
            About Me
          </h2>
          <h1 className="text-6xl font-medium tracking-tighter sm:text-7xl md:text-8xl">
            Kacper Gajdarski.
          </h1>
        </div>

        <p className="text-secondary mb-8 max-w-3xl text-xl leading-relaxed md:text-2xl">
          Frontend and mobile developer based in Edinburgh, focusing on creating
          responsive web applications and mobile experiences. Recently graduated
          and eager to apply my skills in real-world projects.
        </p>

        <button className="rounded-sm border border-white/20 px-6 py-2 text-sm transition-all hover:bg-white/5">
          Contact.
        </button>
      </div>
    </section>
  );
};

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
          <div className="md:col-span-2">
            <p className="mb-6 text-xl leading-relaxed">
              I graduated from Heriot-Watt University with a 2:1 in Computing
              Science (Software Engineering). I love building front-end
              interfaces and mobile apps because I get to see my changes in real
              time and directly improve the user&apos;s experience and journey.
            </p>
            <p className="text-secondary mb-6 text-lg leading-relaxed">
              I enjoy creating digital products that are not only visually
              appealing but also genuinely helpful to users. My focus is always
              on making things intuitive and enjoyable to use.
            </p>
            <p className="text-secondary text-lg leading-relaxed">
              For me, it&apos;s all about combining great design with smooth
              functionality, so every project I work on feels seamless and
              user-friendly from start to finish.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
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
              <div
                key={index}
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section className="border-t border-white/10 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="col-span-1">
            <h2 className="text-secondary mb-3 text-lg tracking-widest uppercase">
              Skills
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:col-span-2 lg:grid-cols-3">
            {skillCategories.map((category, index) => (
              <div key={index} className="mb-6">
                <h3 className="mb-4 text-xl font-medium">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-secondary">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="border-t border-white/10 py-24">
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
                  href="#"
                  className="text-white/70 transition-colors hover:text-white"
                >
                  <Linkedin className="h-6 w-6" />
                </a>

                <a
                  href="#"
                  className="text-white/70 transition-colors hover:text-white"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-white/70 transition-colors hover:text-white"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
