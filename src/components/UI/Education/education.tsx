import { FriendlyStrangerFont } from "@/fonts/FriendlyStranger";
import EducationCard from "./educationCard";

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
