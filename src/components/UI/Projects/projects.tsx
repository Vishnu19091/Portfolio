"use client";
import { FriendlyStrangerFont } from "@/fonts/FriendlyStranger";
import ProjectCard from "./ProjectCard";
import { Reveal } from "@/components/Reveal";

const projects = [
  {
    images: [
      "/assets/projects/Task-management/authpage.png",
      "/assets/projects/Task-management/emptypage.png",
      "/assets/projects/Task-management/all.png",
      "/assets/projects/Task-management/inprog.png",
      "/assets/projects/Task-management/done.png",
    ],
    title: "Task Management using Nest.js & Next.js",
    duration: "August 2025",
    description:
      "Task management app where authenticated users can create and manage their tasks.",
    website: "https://task-management-nest-js.vercel.app",
    repo: "https://github.com/Vishnu19091/Task-Management-NestJS",
  },
  {
    images: [
      "/assets/projects/portfolio/portfolio_1.png",
      "/assets/projects/portfolio/portfolio_2.png",
      "/assets/projects/portfolio/portfolio_3.png",
    ],
    title: "My Portfolio",
    duration: "June 2025",
    description: "My Portfolio built using NextJs, TypeScript, React.",
    website: "#",
    repo: "https://github.com/Vishnu19091/Portfolio",
  },
  {
    images: [
      "/assets/projects/Extension/Blocked_Domain_Page.png",
      "/assets/projects/Extension/Network_Logger.png",
      "/assets/projects/Extension/Pop-up-window.png",
      "/assets/projects/Extension/Blocked-site.png",
    ],
    title: "Phishing Detection Extension",
    duration: "April 2025 - Present",
    description: `This is a browser extension-based project which detects phishing websites
    in real-time and alerts the user, uses rule-based approach to effectively identify and
    prevent phishing attacks, spam, and defaced websites. Users can also block and manage custom domains`,
    website: "https://addons.mozilla.org/addon/anti-phishing-extension/",
    repo: "https://github.com/Vishnu19091/Phishing_Detection_Extension/",
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
