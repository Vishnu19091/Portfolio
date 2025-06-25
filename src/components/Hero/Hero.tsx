"use client";

import { FriendlyStrangerFont } from "@/fonts/FriendlyStranger";

import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col w-full mx-auto min-h-screen text-center items-center justify-center"
    >
      <h1
        className={`${FriendlyStrangerFont.className} mobile:text-5xl desktop:text-8xl font-bold mb-4`}
      >
        Hi, I'm <span className="text-red-600">Vishnu VT</span>
      </h1>

      <h2
        className={`${FriendlyStrangerFont.className} text-2xl desktop:text-5xl font-medium text-gray-600 dark:text-gray-300 mb-6`}
      >
        I am a&nbsp;
        <span className="text-red-600">
          <Typewriter
            words={[
              "Full Stack Developer",
              "Next.js Expert",
              "Linu Enthusiast 🐧",
              "Backend Engineer",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={70}
            delaySpeed={1500}
          />
        </span>
      </h2>

      <p className="text-md desktop:text-lg max-w-xl text-black/70 dark:text-gray-300">
        I build fast, scalable, and user-friendly web applications using modern
        technologies and also learn & experiment stuff about AI.
      </p>
    </section>
  );
}
