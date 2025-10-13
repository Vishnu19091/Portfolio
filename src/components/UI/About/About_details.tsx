"use client";
import { JSX } from "react";
import "./about.css";
import Tooltip from "@/components/NavBar/tooltip";
import { Reveal } from "@/components/Reveal";

const about_details: JSX.Element = (
  <div className="flex flex-col gap-8">
    <Reveal>
      <p className="w-[80%] h-fit self-center">
        Hello, I am Vishnu from <span id="highlight">Kanchipuram, INDIA</span>.
        I recently completed my <span id="highlight">B. Tech CSE</span>, and I
        am passionate about building applications.
      </p>
    </Reveal>

    <Reveal>
      <p>
        I always explore <span id="highlight">Computer Networks</span>.
      </p>
    </Reveal>
  </div>
);

export default function About_Info() {
  return (
    <section className="mobile:text-md desktop:text-xl">
      {about_details}
    </section>
  );
}
