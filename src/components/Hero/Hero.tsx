"use client";

import { FriendlyStrangerFont } from "@/fonts/FriendlyStranger";

import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section className="w-[80%] mx-auto min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1
        className={`${FriendlyStrangerFont.className} text-2xl md:text-6xl font-bold mb-4`}
      >
        Hi, I'm <span className="text-red-600">Vishnu VT</span>
      </h1>

      <h2
        className={`${FriendlyStrangerFont.className} text-xl md:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-6`}
      >
        I am a&nbsp;
        <span className="text-red-600 dark:text-blue-400">
          <Typewriter
            words={[
              "Full Stack Developer",
              "Next.js Expert",
              "Linu freak 🐧",
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

      <p className="text-md md:text-lg max-w-xl text-gray-500 dark:text-gray-400">
        I build fast, scalable, and user-friendly web applications using modern
        technologies and also learn & experiment stuff about AI.
      </p>
    </section>
  );
}
