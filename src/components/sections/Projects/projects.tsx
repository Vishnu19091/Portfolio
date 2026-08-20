"use client";
import { FriendlyStrangerFont } from "@/fonts/FriendlyStranger";
import ProjectCard from "./ProjectCard";
import { Reveal } from "@/components/Reveal";
import { projectsData } from "./projectData";

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
          {projectsData?.map((project) => (
            <ProjectCard
              key={project.repo}
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
