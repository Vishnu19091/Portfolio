"use client";
import { FriendlyStrangerFont } from "@/fonts/FriendlyStranger";
import { Reveal } from "../Reveal";

export default function Contact() {
  return (
    <article
      className="mobile:min-h-[40vh] lmobile:min-h-[50vh] tablet:min-h-[40vh] desktop:min-h-[60vh] pt-15 mx-auto flex flex-col gap-10 desktop:w-[75%] desktop:mx-auto"
      id="contact"
    >
      <div className="flex flex-row gap-5 desktop:gap-10 items-center">
        <h3>
          <div className="position:relative;width:fit-content;overflow:hidden">
            <div className="opacity: 1; transform: none;">
              <Reveal>
                <span
                  className={`${FriendlyStrangerFont.className} text-red-600 mobile:text-4xl desktop:text-[4.25rem]`}
                >
                  Contact
                </span>
              </Reveal>
            </div>
            <div className="position: absolute; inset: 4px 0px 4px 100%; background: var(--brand); z-index: 20;"></div>
          </div>
        </h3>
        <div className="w-full bg-black dark:bg-white h-px"></div>
      </div>
      <section>
        <h1 className="text-center mobile:text-md desktop:text-xl flex flex-col gap-5">
          If want to contact email me or DM my social accounts.
          <span>
            <a
              className="border border-red-600 hover:bg-red-600 text-black dark:text-white px-4 py-2 rounded-xl w-fit transition-all duration-300 cursor-pointer"
              href="mailto:vishnu368@gmail.com"
            >
              📩 vishnu368@gmail.com
            </a>
          </span>
        </h1>
      </section>
    </article>
  );
}
