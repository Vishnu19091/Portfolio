import { FriendlyStrangerFont } from "@/fonts/FriendlyStranger";
import About_Info from "./About_details";

export default function About() {
  return (
    <article
      className="min-h-[80vh] pt-15 mx-auto flex flex-col gap-10 desktop:w-[65%] desktop:mx-auto"
      id="about"
    >
      <div className="flex flex-row gap-5 desktop:gap-10 items-center">
        <h3>
          <div className="relative w-[100%] overflow-hidden">
            <div className="opacity: 1; transform: none;">
              {/* HEADING */}
              <span
                className={`${FriendlyStrangerFont.className} text-red-600 text-5xl desktop:text-8xl`}
              >
                About Me
              </span>
            </div>
            <div className="position: absolute; inset: 4px 0px 4px 100%; background: var(--brand); z-index: 20;"></div>
          </div>
        </h3>
        <div className="w-[70%] bg-black dark:bg-white h-px"></div>
      </div>

      <About_Info />
    </article>
  );
}
