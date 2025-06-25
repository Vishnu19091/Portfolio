import { FriendlyStrangerFont } from "@/fonts/FriendlyStranger";

export default function Education() {
  return (
    <article
      className="min-h-screen pt-15 mx-auto flex flex-col gap-10 desktop:w-[65%] desktop:mx-auto"
      id="education"
    >
      <div className="flex flex-row-reverse gap-5 desktop:gap-10 items-center">
        <h3>
          <div className="position:relative;width:fit-content;overflow:hidden">
            <div className="opacity: 1; transform: none;">
              <span
                className={`${FriendlyStrangerFont.className} text-red-600 text-5xl desktop:text-8xl`}
              >
                Education
              </span>
            </div>
            <div className="position: absolute; inset: 4px 0px 4px 100%; background: var(--brand); z-index: 20;"></div>
          </div>
        </h3>
        <div className="w-full bg-black dark:bg-white h-px"></div>
      </div>
      <section>
        <p>Education goes here. Will be updated and finished soon!</p>
      </section>
    </article>
  );
}
