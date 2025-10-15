"use client";
import { JSX } from "react";
import "./about.css";
import { Reveal } from "@/components/Reveal";

const about_details: JSX.Element = (
  <div className="flex flex-col gap-8">
    <Reveal>
      <p>
        Hello, I am Vishnu from <span id="highlight">Kanchipuram, INDIA</span>.
        I recently completed my <span id="highlight">B. Tech CSE</span>, and I
        am passionate about building applications and contributing to
        open-source projects.
      </p>
    </Reveal>

    <Reveal>
      <p>
        I always learn & explore stuff about{" "}
        <span id="highlight">Computer Networks</span>.
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
