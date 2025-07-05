"use client";

import * as React from "react";
import { Link as ScrollLink } from "react-scroll";
import Tooltip from "./tooltip";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import "./NavBar.css";

export default function NavBar() {
  const { setTheme } = useTheme();

  return (
    <div className="w-full">
      <div className="mobile:w-[80%] lmobile:w-[56%] tablet:w-fit desktop:w-fit bottom-6 block fixed left-[50%] -translate-x-[50%] bg-black/30 dark:bg-white/10 rounded-2xl px-6 py-1 backdrop-blur-xl z-30 mx-auto">
        <ul className="flex flex-row gap-4 items-center justify-center">
          {/* HOME */}
          <li className="hover:scale-110 transition-all duration-300 cursor-pointer ease-in-out">
            <ScrollLink
              activeClass="active"
              smooth={true}
              spy={true}
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
              smooth={true}
              spy={true}
              duration={300}
              to="about"
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
              smooth={true}
              spy={true}
              duration={300}
              to="skills"
            >
              <Tooltip message="Skills">
                <img
                  className="h-7 w-7"
                  src="/assets/navbar/skills.svg"
                  alt="Skills"
                />
              </Tooltip>
            </ScrollLink>
          </li>

          {/* PROJECTS */}
          <li className="hover:scale-110 transition-all duration-300 cursor-pointer ease-in-out">
            <ScrollLink
              activeClass="active"
              smooth={true}
              spy={true}
              duration={300}
              to="projects"
            >
              <Tooltip message="Projects">
                <img
                  className="h-6 w-6"
                  src="/assets/navbar/projects.svg"
                  alt="Projects"
                />
              </Tooltip>
            </ScrollLink>
          </li>

          {/* EDUCATION */}
          <li className="hover:scale-110 transition-all duration-300 cursor-pointer ease-in-out">
            <ScrollLink
              activeClass="active"
              smooth={true}
              spy={true}
              duration={300}
              offset={-300}
              to="education"
            >
              <Tooltip message="Education">
                <img
                  className="h-[1.8rem] w-[1.8rem]"
                  src="/assets/navbar/education.svg"
                  alt="Education"
                />
              </Tooltip>
            </ScrollLink>
          </li>

          {/* EXPERIENCE */}
          <li className="hover:scale-110 transition-all duration-300 cursor-pointer ease-in-out">
            <ScrollLink
              activeClass="active"
              smooth={true}
              spy={true}
              duration={300}
              to="experience"
            >
              <Tooltip message="Experience">
                <img
                  className="h-6 w-6"
                  src="/assets/navbar/experience.svg"
                  alt="Experience"
                />
              </Tooltip>
            </ScrollLink>
          </li>

          {/* CONTACT */}
          <li className="hover:scale-110 transition-all duration-300 cursor-pointer ease-in-out">
            <ScrollLink
              activeClass="active"
              smooth={true}
              spy={true}
              duration={300}
              offset={-550}
              to="contact"
            >
              <Tooltip message="Contact">
                <img
                  className="h-6 w-6"
                  src="/assets/navbar/contact.svg"
                  alt="Contact"
                />
              </Tooltip>
            </ScrollLink>
          </li>

          <li>
            <Tooltip message="Change Theme">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="cursor-pointer"
                  >
                    <Sun className="h-5 w-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                    <Moon className="absolute h-5 w-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem
                    className="cursor-pointer"
                    onClick={() => setTheme("light")}
                  >
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="cursor-pointer"
                    onClick={() => setTheme("dark")}
                  >
                    Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="cursor-pointer"
                    onClick={() => setTheme("system")}
                  >
                    System
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </Tooltip>
          </li>
        </ul>
      </div>
    </div>
  );
}
