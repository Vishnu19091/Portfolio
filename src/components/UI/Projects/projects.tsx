"use client";
import { FriendlyStrangerFont } from "@/fonts/FriendlyStranger";
import ProjectCard from "./ProjectCard";
import { Reveal } from "@/components/Reveal";

const projects = [
  {
    images: [
      "/assets/projects/phishing_detection_1.png",
      "/assets/projects/phishing_detection_2.png",
      "/assets/projects/phishing_detection_3.png",
    ],
    title: "Phishing Detection",
    duration: "Nov 2024 - March 2025",
    description: `This is a browser extension-based project which detects phishing websites
    in real-time and alerts the user. integrates machine learning models to effectively
    identify and prevent phishing attacks, spam, and defaced websites. The system is
    designed to analyze key URL features such as: URL length Domain and subdomain structure
    Numeric and special characters HTTPS presence`,
    website: "https://anti-phish.netlify.app/docs",
    repo: "https://github.com/Vishnu19091/Phishing_Detection_using_ML/",
  },

  {
    images: [
      "/assets/projects/portfolio_1.png",
      "/assets/projects/portfolio_2.png",
      "/assets/projects/portfolio_3.png",
    ],
    title: "My Portfolio",
    duration: "June 2025",
    description: "My Portfolio was built using NextJs, TypeScript, React.",
    website: "#",
    repo: "https://github.com/Vishnu19091/Portfolio",
  },
];

export default function Projects() {
  return (
    <article
      className="mobile:min-h-[50vh] lmobile:min-h-[50vh] tablet:min-h-[40vh] desktop:min-h-[60vh] pt-15 mx-auto flex flex-col gap-10 desktop:w-[75%] desktop:mx-auto"
      id="projects"
    >
      <div className="flex flex-row gap-5 desktop:gap-10 items-center">
        <h3>
          <div className="position:relative;width:fit-content;overflow:hidden">
            <div className="opacity: 1; transform: none;">
              <Reveal>
                <span
                  className={`${FriendlyStrangerFont.className} text-red-600 mobile:text-4xl desktop:text-[4.25rem]`}
                >
                  Projects
                </span>
              </Reveal>
            </div>
            <div className="position: absolute; inset: 4px 0px 4px 100%; background: var(--brand); z-index: 20;"></div>
          </div>
        </h3>
        <div className="w-full bg-black dark:bg-white h-px"></div>
      </div>
      <section>
        <div className="mobile:w-full mobile:mx-auto desktop:w-[80%] mx-auto grid mobile:grid-cols-1 desktop:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              images={project.images}
              title={project.title}
              duration={project.duration}
              description={project.description}
              website={project.website}
              repo={project.repo}
            />
          ))}
        </div>
      </section>
    </article>
  );
}
