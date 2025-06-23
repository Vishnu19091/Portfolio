import Link from "next/link";

export default function NavBar() {
  return (
    <div className="w-fit top-6 block fixed left-[50%] -translate-x-[50%] bg-black/10 rounded-2xl px-8 py-2 backdrop-blur-xl mx-auto">
      <ul className="flex flex-row gap-4">
        {/* HOME */}
        <li className="hover:scale-105 transition-all duration-300">
          <Link href={"#home"} className="hover:bg-white/40 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25"
              height="25"
              stroke="#ffffff"
              fill="#000000"
              viewBox="0 0 24 24"
            >
              <path d="M 12 2 A 1 1 0 0 0 11.289062 2.296875 L 1.203125 11.097656 A 0.5 0.5 0 0 0 1 11.5 A 0.5 0.5 0 0 0 1.5 12 L 4 12 L 4 20 C 4 20.552 4.448 21 5 21 L 9 21 C 9.552 21 10 20.552 10 20 L 10 14 L 14 14 L 14 20 C 14 20.552 14.448 21 15 21 L 19 21 C 19.552 21 20 20.552 20 20 L 20 12 L 22.5 12 A 0.5 0.5 0 0 0 23 11.5 A 0.5 0.5 0 0 0 22.796875 11.097656 L 12.716797 2.3027344 A 1 1 0 0 0 12.710938 2.296875 A 1 1 0 0 0 12 2 z"></path>
            </svg>
          </Link>
        </li>

        {/* ABOUT */}
        <li>
          <Link
            href={"#about"}
            className="relative text-md transition-all duration after:bg-white after:absolute after:h-[0.01em] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
          >
            About
          </Link>
        </li>

        {/* SKILLS */}
        <li>
          <Link
            href={"#skills"}
            className="relative text-md transition-all duration after:bg-white after:absolute after:h-[0.01em] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
          >
            Skills
          </Link>
        </li>

        {/* PROJECTS */}
        <li>
          <Link
            href={"#projects"}
            className="relative text-md transition-all duration after:bg-white after:absolute after:h-[0.01em] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
          >
            Projects
          </Link>
        </li>

        {/* EXPERIENCE */}
        <li>
          <Link
            href={"#experience"}
            className="relative text-md transition-all duration after:bg-white after:absolute after:h-[0.01em] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
          >
            Experience
          </Link>
        </li>

        {/* CONTACT */}
        <li>
          <Link
            href={"#contact"}
            className="relative text-md transition-all duration after:bg-white after:absolute after:h-[0.01em] after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
