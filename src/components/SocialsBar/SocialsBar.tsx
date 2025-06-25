"use client";
import { useState, useEffect, JSX } from "react";
import Resume from "./Resume";
import SocialsButton from "./SocialButtons";

interface WindowSize {
  width: number;
}

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState<WindowSize>({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth({ width: window.innerWidth });
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowWidth;
};

export default function SocialsBar() {
  const { width } = useWindowWidth();

  const isMobile: boolean = width <= 360;

  const bar: JSX.Element = (
    <div className="w-full bg-black dark:bg-white h-px" />
  );

  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 flex flex-row gap-4 mobile:w-full mobile:rounded-0 desktop:w-[80%] justify-between backdrop-blur-2xl items-center p-2 desktop:rounded-2xl">
      <SocialsButton />
      {!isMobile && bar}
      <Resume />
    </div>
  );
}
