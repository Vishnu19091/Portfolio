import { FriendlyStrangerFont } from "@/fonts/FriendlyStranger";

export default function Contact() {
  return (
    <article
      className="h-[50vh] pt-15 mx-auto flex flex-col gap-10 desktop:w-[65%] desktop:mx-auto"
      id="contact"
    >
      <div className="flex flex-row-reverse gap-5 desktop:gap-10 items-center">
        <h3>
          <div className="position:relative;width:fit-content;overflow:hidden">
            <div className="opacity: 1; transform: none;">
              <span
                className={`${FriendlyStrangerFont.className} text-red-600 text-5xl desktop:text-8xl`}
              >
                Contact
              </span>
            </div>
            <div className="position: absolute; inset: 4px 0px 4px 100%; background: var(--brand); z-index: 20;"></div>
          </div>
        </h3>
        <div className="w-full bg-black dark:bg-white h-px"></div>
      </div>
      <section>
        <h1 className="text-center mobile:text-md desktop:text-xl flex flex-col gap-5">
          If want to chat email me or DM my social accounts.
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
