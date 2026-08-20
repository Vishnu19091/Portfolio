import { Reveal } from "@/components/Reveal";
import { JSX } from "react";

interface Prop {
  icon: JSX.Element;
  name?: string;
  level?: number;
}

export default function SkillCard({ icon, name, level }: Prop) {
  return (
    <div className="mobile:w-[50%] lmobile:w-[40%] tablet:w-[30%] desktop:w-[20%] flex flex-col items-center justify-center gap-4 border border-red-600 p-4 rounded-xl hover:text-red-600 shadow hover:scale-105 transition-all duration-300 ease-in-out">
      <Reveal>
        <div>{icon}</div>
      </Reveal>

      <Reveal>
        <div className="mb-4 w-fit">
          <div className="flex justify-between mb-1">
            <span className="font-medium">{name}</span>
            {level && <span>{level}%</span>}
          </div>
          {name && level && (
            <div className="w-50 bg-[#e5e7eb3c] rounded-full h-2">
              <div
                className="bg-red-600 h-2 rounded-full transition-all duration-1000"
                style={{ width: `${level}%` }}
              />
            </div>
          )}
        </div>
      </Reveal>
    </div>
  );
}
