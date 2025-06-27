import { JSX } from "react";

interface Prop {
  icon: JSX.Element;
}

export default function SkillCard({ icon }: Prop) {
  return (
    <div className="mobile:w-[50%] desktop:w-[20%] flex flex-col items-center justify-center gap-2 border border-red-600 p-4 rounded-xl hover:text-red-600 shadow hover:scale-105 transition-all duration-300 ease-in-out">
      <div>{icon}</div>
    </div>
  );
}
