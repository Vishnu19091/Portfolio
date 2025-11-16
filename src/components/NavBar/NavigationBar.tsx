"use client";

import * as React from "react";
import { Link as ScrollLink } from "react-scroll";
import Tooltip from "./tooltip";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="w-full">
      <div className="mobile:w-[80%] lmobile:w-[56%] tablet:w-fit desktop:w-fit bottom-6 block fixed left-[50%] -translate-x-[50%] bg-black/30 dark:bg-white/10 rounded-2xl px-6 py-1 backdrop-blur-xl z-30 mx-auto">
        <ul className="flex flex-row gap-4 items-center justify-center">
          {/* HOME */}
          <li className="hover:scale-110 transition-all duration-300 cursor-pointer ease-in-out">
            <ScrollLink
              activeClass="active"
              smooth
              spy
              to="home"
              duration={300}
            >
              <Tooltip message="Home">
                <img
                  src="/assets/navbar/home.svg"
                  alt="Home"
                  className="w-5 h-5"
                />
              </Tooltip>
            </ScrollLink>
          </li>

          {/* ABOUT */}
          <li className="hover:scale-110 transition-all duration-300 cursor-pointer ease-in-out">
            <ScrollLink
              activeClass="active"
              smooth
              spy
              to="about"
              duration={300}
            >
              <Tooltip message="About">
                <img
                  src="/assets/navbar/about.svg"
                  alt="About"
                  className="h-6 w-6"
                />
              </Tooltip>
            </ScrollLink>
          </li>

          {/* SKILLS */}
          <li className="hover:scale-110 transition-all duration-300 cursor-pointer ease-in-out">
            <ScrollLink
              activeClass="active"
              smooth
              spy
              to="skills"
              duration={300}
            >
              <Tooltip message="Skills">
                <img
                  src="/assets/navbar/skills.svg"
                  alt="Skills"
                  className="h-7 w-7"
                />
              </Tooltip>
            </ScrollLink>
          </li>

          {/* PROJECTS */}
          <li className="hover:scale-110 transition-all duration-300 cursor-pointer ease-in-out">
            <ScrollLink
              activeClass="active"
              smooth
              spy
              to="projects"
              duration={300}
            >
              <Tooltip message="Projects">
                <img
                  src="/assets/navbar/projects.svg"
                  alt="Projects"
                  className="h-6 w-6"
                />
              </Tooltip>
            </ScrollLink>
          </li>

          {/* EDUCATION */}
          <li className="hover:scale-110 transition-all duration-300 cursor-pointer ease-in-out">
            <ScrollLink
              activeClass="active"
              smooth
              spy
              duration={300}
              offset={-300}
              to="education"
            >
              <Tooltip message="Education">
                <img
                  src="/assets/navbar/education.svg"
                  alt="Education"
                  className="h-[1.8rem] w-[1.8rem]"
                />
              </Tooltip>
            </ScrollLink>
          </li>

          {/* EXPERIENCE */}
          <li className="hover:scale-110 transition-all duration-300 cursor-pointer ease-in-out">
            <ScrollLink
              activeClass="active"
              smooth
              spy
              to="experience"
              duration={300}
            >
              <Tooltip message="Experience">
                <img
                  src="/assets/navbar/experience.svg"
                  alt="Experience"
                  className="h-6 w-6"
                />
              </Tooltip>
            </ScrollLink>
          </li>

          {/* CONTACT */}
          <li className="hover:scale-110 transition-all duration-300 cursor-pointer ease-in-out">
            <ScrollLink
              activeClass="active"
              smooth
              spy
              to="contact"
              duration={300}
              offset={-550}
            >
              <Tooltip message="Contact">
                <img
                  src="/assets/navbar/contact.svg"
                  alt="Contact"
                  className="h-6 w-6"
                />
              </Tooltip>
            </ScrollLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
