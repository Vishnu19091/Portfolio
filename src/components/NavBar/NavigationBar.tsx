"use client";

import * as React from "react";
import Link from "next/link";
import Tooltip from "./tooltip";
import { icons, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";

export default function NavBar() {
  const { setTheme } = useTheme();

  return (
    <div className="w-full">
      <div className="mobile:w-[80%] tablet:w-fit desktop:w-fit bottom-6 block fixed left-[50%] -translate-x-[50%] bg-black/30 dark:bg-white/10 rounded-2xl px-6 py-1 backdrop-blur-xl mx-auto">
        <ul className="flex flex-row gap-4 items-center justify-center">
          {/* HOME */}
          <li className="hover:scale-110 transition-all duration-300">
            <Link href={"#home"}>
              <Tooltip message="Home">
                <img src="/assets/home.svg" alt="Home" className="w-5 h-5" />
              </Tooltip>
            </Link>
          </li>

          {/* ABOUT */}
          <li className="hover:scale-110 transition-all duration-300">
            <Link href={"#about"}>
              <Tooltip message="About">
                <img src="/assets/about.svg" alt="About" className="h-6 w-6" />
              </Tooltip>
            </Link>
          </li>

          {/* SKILLS */}
          <li className="hover:scale-110 transition-all duration-300">
            <Link href={"#skills"}>
              <Tooltip message="Skills">
                <img
                  className="h-7 w-7"
                  src="/assets/skills.svg"
                  alt="Skills"
                />
              </Tooltip>
            </Link>
          </li>

          {/* PROJECTS */}
          <li className="hover:scale-110 transition-all duration-300">
            <Link href={"#projects"}>
              <Tooltip message="Projects">
                <img
                  className="h-6 w-6"
                  src="/assets/projects.svg"
                  alt="Projects"
                />
              </Tooltip>
            </Link>
          </li>

          {/* EDUCATION */}
          <li className="hover:scale-110 transition-all duration-300">
            <Link href={"#education"}>
              <Tooltip message="Education">
                <img
                  className="h-[1.8rem] w-[1.8rem]"
                  src="/assets/education.svg"
                  alt="Education"
                />
              </Tooltip>
            </Link>
          </li>

          {/* EXPERIENCE */}
          <li className="hover:scale-110 transition-all duration-300">
            <Link href={"#experience"}>
              <Tooltip message="Experience">
                <img
                  className="h-6 w-6"
                  src="/assets/experience.svg"
                  alt="Experience"
                />
              </Tooltip>
            </Link>
          </li>

          {/* CONTACT */}
          <li className="hover:scale-110 transition-all duration-300">
            <Link href={"#contact"}>
              <Tooltip message="Contact">
                <img
                  className="h-6 w-6"
                  src="/assets/contact.svg"
                  alt="Contact"
                />
              </Tooltip>
            </Link>
          </li>

          <li>
            <Tooltip message="Change Theme">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Sun className="h-5 w-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                    <Moon className="absolute h-5 w-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>
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
