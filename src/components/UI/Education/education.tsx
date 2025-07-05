"use client";
import { FriendlyStrangerFont } from "@/fonts/FriendlyStranger";
import EducationCard from "./educationCard";
import { Reveal } from "@/components/Reveal";

const education = [
  {
    name: "Dr.M.G.R.Educational and Research Institute",
    imgurl: "/assets/logo_college.png",
    passoutyear: "2025",
    duration: "2021 - 2025",
  },

  {
    name: "M.L.M.Mamallan.matric.hr.sec.school",
    imgurl: "/assets/school-image.png",
    board: "State Board HSE +2",
    passoutyear: "2021",
    duration: "2020 - 2021",
  },

  {
    name: "M.L.M.Mamallan.matric.hr.sec.school",
    imgurl: "/assets/school-image.png",
    board: "State Board (SSLC)",
    passoutyear: "2019",
    duration: "2018 - 2019",
  },
];

export default function Education() {
  return (
    <article
      className="scroll-m-60 mobile:min-h-[50vh] lmobile:min-h-[50vh] tablet:min-h-[40vh] desktop:min-h-[60vh] pt-15 mx-auto flex flex-col gap-10 desktop:w-[75%] desktop:mx-auto"
      id="education"
    >
      <div className="flex flex-row-reverse gap-5 desktop:gap-10 items-center">
        <h3>
          <div className="position:relative;width:fit-content;overflow:hidden">
            <div className="opacity: 1; transform: none;">
              <Reveal>
                <span
                  className={`${FriendlyStrangerFont.className} text-red-600 mobile:text-4xl desktop:text-[4.25rem]`}
                >
                  Education
                </span>
              </Reveal>
            </div>
            <div className="position: absolute; inset: 4px 0px 4px 100%; background: var(--brand); z-index: 20;"></div>
          </div>
        </h3>
        <div className="w-full bg-black dark:bg-white h-px"></div>
      </div>
      <section>
        <div className="grid grid-cols-1 gap-4">
          {education.map((edu, index) => (
            <EducationCard
              key={index}
              name={edu.name}
              imgurl={edu.imgurl}
              board={edu.board}
              duration={edu.duration}
              passoutyear={edu.passoutyear}
            />
          ))}
        </div>
      </section>
    </article>
  );
}
