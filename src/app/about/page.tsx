import Footer from "~/components/footer";
import { AboutLanding } from "~/components/about/about-landing";
import AboutContent from "~/components/about/about-content";
import Experience from "~/components/about/about-experience";
import Nav from "~/components/nav";
import Contact from "~/components/about/about-contact";
import Skills from "~/components/about/about-skills";

export default function AboutPage() {
  return (
    <main className="min-h-screen px-4 lg:px-0">
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
