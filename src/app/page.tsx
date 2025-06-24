import About from "@/components/UI/About";
import Contact from "@/components/UI/contact";
import Education from "@/components/UI/education";
import Experience from "@/components/UI/experience";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/UI/projects";
import Skills from "@/components/UI/skills";
import { FriendlyStrangerFont } from "@/fonts/FriendlyStranger";

// show server status
const ShowStatus: boolean = false;

export default function Home() {
  if (ShowStatus) {
    return (
      <div>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Contact />
      </div>
    );
  }
  return (
    <h1
      className={`${FriendlyStrangerFont.className} text-red-600 pt-20 text-center my-90 text-6xl`}
    >
      Project is under development.
    </h1>
  );
}
