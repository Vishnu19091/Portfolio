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
        <span id="highlight">Kanchipuram, INDIA</span>. I recently completed my{" "}
        <span id="highlight">B. Tech CSE</span>, and I am passionate about
        building Software and Web Technologies, and learning more about AI.
      </p>
    </div>

    <p>
      I enjoy continuous learning and adapting to new technologies. And I
      <span id="highlight">
        love building fast, scalable, and user-friendlyweb applications
      </span>{" "}
      using modern technologies and also learn & experiment stuff about AI.
    </p>

    <p>
      I am always exploring <span id="highlight">Linux 🐧 & Networking</span>{" "}
      and experiment random stuff about these.
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
