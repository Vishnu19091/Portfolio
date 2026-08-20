"use client";
import { useState, useEffect, JSX } from "react";
import Resume from "./Resume";
import SocialsButton from "./SocialButtons";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  const isMobile: boolean = width <= 360;

  const bar: JSX.Element = (
    <div className="w-full bg-black dark:bg-white h-[1.5px]" />
  );

  const onButtonClick = () => {
    const url = "/";
    const link = document.createElement("a");
    link.href = url;
    link.target = "_self";
    link.click();
  };

  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 flex flex-row gap-4 mobile:w-full mobile:rounded-0 desktop:w-[80%] justify-between backdrop-blur-2xl items-center p-2 desktop:rounded-2xl">
      <SocialsButton />
      {!isMobile && bar}
      {pathname === "/" && <Resume />}
      {pathname === "/3D" && (
        <button
          className="text-red-600 border border-red-600 px-5 py-2 rounded-2xl hover:bg-red-600 hover:text-white hover:font-extrabold cursor-pointer transition-all duration-300 ease-in-out"
          onClick={onButtonClick}
        >
          Go to Home
        </button>
      )}
    </div>
  );
}
