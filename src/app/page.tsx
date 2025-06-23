import About from "@/components/About";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import { FriendlyStrangerFont } from "@/fonts/FriendlyStranger";

// show server status
const ShowStatus: boolean = false;

export default function Home() {
  if (ShowStatus) {
    return (
      <div id="home">
        <Hero />
        <About />
        <Skills />
        <Projects />
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
