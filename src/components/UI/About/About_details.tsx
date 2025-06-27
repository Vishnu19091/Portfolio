import { JSX } from "react";
import "./about.css";
import Tooltip from "@/components/NavBar/tooltip";

const about_details: JSX.Element = (
  <div className="flex flex-col gap-8">
    <div className="flex flex-row-reverse justify-between gap-4">
      <Tooltip message="Vishnu VT">
        <img
          src="/assets/my-profile-image.jpg"
          className="mobile:w-17 mobile:h-17 desktop:w-30 desktop:h-30 object-cover object-[25%_35%] border border-black dark:border-white rounded-[999rem]"
        />
      </Tooltip>
      <p className="w-[80%] h-fit self-center">
        Hello there I am Vishnu from{" "}
        <span id="highlight">Kanchipuram (INDIA)</span>. I completed my{" "}
        <span id="highlight">B. Tech CSE</span>, and I am passionate about
        building software and websites, and learning more about AI.
      </p>
    </div>

    <p>
      My strengths include being highly collaborative and drawing energy from
      team environments, which helps me stay motivated, disciplined, and
      focused, making to think innovative and give useful solutions.
    </p>

    <p>
      I am also passionate about continuous learning and adapting to new
      technologies, as I have a strong ability to manage tasks effectively and
      complete work before deadlines.
    </p>

    <p>
      I build fast, scalable, and user-friendlyweb applications using modern
      technologies and also learn & experiment stuff about AI.
    </p>

    <p>
      My <span id="highlight">short-term goal</span> is to become a{" "}
      <span id="highlight">Full Stack Developer with AI</span> and{" "}
      <span id="highlight">long-term goal</span> is to be a{" "}
      <span id="highlight">AI Engineer</span>.
    </p>

    <p>
      I always <span id="highlight">learn Linux 🐧 & Networking</span> and
      experiment random stuff about these.
    </p>
  </div>
);

export default function About_Info() {
  return (
    <section className="mobile:text-md desktop:text-xl">
      {about_details}
    </section>
  );
}
