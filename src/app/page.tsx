import About from "@/components/UI/About/About";
import Contact from "@/components/UI/contact";
import Education from "@/components/UI/Education/education";
// import Experience from "@/components/UI/experience";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/UI/Projects/projects";
import Skills from "@/components/UI/skills/skills";
import { FriendlyStrangerFont } from "@/fonts/FriendlyStranger";

// show status
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
        {/* <Experience /> */}
        <Contact />
      </div>
    );
  }
  return (
    <h1
      className={`${FriendlyStrangerFont.className} text-red-600 pt-20 text-center my-90 text-6xl`}
    >
      The portfolio is under development. By then you can explore some of my
      profiles.
    </h1>
  );
}
