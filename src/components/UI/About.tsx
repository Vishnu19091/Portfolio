import { FriendlyStrangerFont } from "@/fonts/FriendlyStranger";

export default function About() {
  return (
    <article
      className="h-screen pt-20 flex flex-col gap-10 desktop:w-[65%] desktop:mx-auto"
      id="about"
    >
      <div className="flex flex-row gap-10 items-center">
        <h3>
          <div className="position:relative;width:fit-content;overflow:hidden">
            <div className="opacity: 1; transform: none;">
              <span
                className={`${FriendlyStrangerFont.className} text-red-600 text-5xl desktop:text-8xl`}
              >
                About
              </span>
            </div>
            <div className="position: absolute; inset: 4px 0px 4px 100%; background: var(--brand); z-index: 20;"></div>
          </div>
        </h3>
        <div className="w-full bg-white h-px"></div>
      </div>

      {/* ABOUT CONTENT */}
      <section className="text-2xl">
        <p>About goes here. Will be updated and finished soon!</p>
        <p>About goes here. Will be updated and finished soon!</p>
        <p>About goes here. Will be updated and finished soon!</p>
        <p>About goes here. Will be updated and finished soon!</p>
        <p>About goes here. Will be updated and finished soon!</p>
      </section>
    </article>
  );
}
