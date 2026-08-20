import About from "@/components/sections/About/About";
import Contact from "@/components/sections/contact";
import Education from "@/components/sections/Education/education";
// import Experience from "@/components/UI/experience";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/sections/Projects/projects";
import Skills from "@/components/sections/skills/skills";
import { FriendlyStrangerFont } from "@/fonts/FriendlyStranger";
import OActivities from "@/components/otherActivities/OActivities";

// show status
const ShowStatus: boolean = true;

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
        <OActivities />
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
