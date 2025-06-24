import { FriendlyStrangerFont } from "@/fonts/FriendlyStranger";

export default function Skills() {
  return (
    <article
      className="h-screen pt-20 flex flex-col gap-10 w-[65%] mx-auto"
      id="contact"
    >
      <div className="flex flex-row-reverse gap-10 items-center">
        <h3>
          <div className="position:relative;width:fit-content;overflow:hidden">
            <div className="opacity: 1; transform: none;">
              <span
                className={`${FriendlyStrangerFont.className} text-red-600 text-8xl`}
              >
                Skills
              </span>
            </div>
            <div className="position: absolute; inset: 4px 0px 4px 100%; background: var(--brand); z-index: 20;"></div>
          </div>
        </h3>
        <div className="w-full bg-white h-px"></div>
      </div>
      <section>
        <p>Your Skills goes here. Will be updated and finished soon!</p>
      </section>
    </article>
  );
}
