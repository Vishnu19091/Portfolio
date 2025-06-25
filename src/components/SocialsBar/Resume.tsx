"use client";
import { FriendlyStrangerFont } from "@/fonts/FriendlyStranger";

export default function Resume() {
  const onButtonClick = () => {
    const pdfUrl = "/assets/Vishnu_VT_Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Vishnu_VT_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <button
      className={` ${FriendlyStrangerFont.className} mobile:text-xl dekstop:text-3xl text-red-600 border border-red-600 px-5 py-2 rounded-2xl hover:bg-red-600 hover:text-white hover:font-extrabold transition-all duration-300 ease-in-out`}
      onClick={onButtonClick}
    >
      Resume
    </button>
  );
}
