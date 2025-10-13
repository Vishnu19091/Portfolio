"use client";

import { FriendlyStrangerFont } from "@/fonts/FriendlyStranger";
import dynamic from "next/dynamic";
import { Reveal } from "../Reveal";

// Lazy load the typewriter to reduce JS blocking render
const Typewriter = dynamic(
  () => import("react-simple-typewriter").then((mod) => mod.Typewriter),
  { ssr: false }
);

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col w-full mx-auto min-h-screen text-center items-center justify-center px-4"
    >
      <Reveal>
        <h1
          className={`${FriendlyStrangerFont.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl desktop:text-8xl font-bold mb-4 leading-tight`}
        >
          Hi, I'm <span className="text-red-600">Vishnu VT</span>
        </h1>
      </Reveal>

      <Reveal>
        <h2
          className={`${FriendlyStrangerFont.className} text-xl sm:text-2xl md:text-3xl lg:text-4xl desktop:text-5xl font-medium text-gray-600 dark:text-gray-300 mb-6`}
        >
          I am a&nbsp;
          <span className="text-red-600">
            <Typewriter
              words={[
                "Full Stack Developer",
                "Linux Enthusiast 🐧",
                "Computernik",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={60}
              delaySpeed={800}
            />
          </span>
        </h2>
      </Reveal>
    </section>
  );
}
