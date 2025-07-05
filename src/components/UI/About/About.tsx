"use client";
import { FriendlyStrangerFont } from "@/fonts/FriendlyStranger";
import About_Info from "./About_details";
import { Reveal } from "@/components/Reveal";

export default function About() {
  return (
    <article
      className="mobile:min-h-[50vh] lmobile:min-h-[50vh] tablet:min-h-[40vh] desktop:min-h-[60vh] pt-15 mx-auto flex flex-col gap-10 desktop:w-[75%] desktop:mx-auto"
      id="about"
    >
      <div className="flex flex-row gap-5 desktop:gap-10 items-center">
        <h3>
          <div className="relative w-[100%] overflow-hidden">
            <div className="opacity: 1; transform: none;">
              {/* HEADING */}
              <Reveal>
                <span
                  className={`${FriendlyStrangerFont.className} text-red-600 mobile:text-4xl desktop:text-[4.5rem]`}
                >
                  About Me
                </span>
              </Reveal>
            </div>
            <div className="position: absolute; inset: 4px 0px 4px 100%; background: var(--brand); z-index: 20;"></div>
          </div>
        </h3>
        <div className="mobile:w-[63%] lmobile:w-[80%] tablet:w-[87%] desktop:w-[70%] ldesktop:w-[75.5%] laptop:w-[78.5%] bg-black dark:bg-white h-px"></div>
      </div>

      <About_Info />
    </article>
  );
}
