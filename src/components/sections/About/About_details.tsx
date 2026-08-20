"use client";
import { JSX } from "react";
import "./about.css";
import { Reveal } from "@/components/Reveal";

const about_details: JSX.Element = (
  <div className="flex flex-col gap-8">
    <Reveal>
      <p>
        Hello, I am Vishnu from <span id="highlight">Kanchipuram, INDIA</span>.
        I completed my <span id="highlight">B. Tech CSE</span>(2025), and I am
        passionate about building and contributing to real-world applications.
      </p>
    </Reveal>

    <Reveal>
      <p>
        I always learn & explore stuff about{" "}
        <span id="highlight">Computer Networks, Linux, Java, and Nature</span>.
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
