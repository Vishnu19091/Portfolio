import { Reveal } from "@/components/Reveal";
import React from "react";

interface Prop {
  title: string;
  children: React.ReactNode;
}

export default function SkillSec({ title, children }: Prop) {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <Reveal>
        <h1 className="text-red-600 mobile:text-2xl desktop:text-4xl">
          {title}
        </h1>
      </Reveal>
      {children}
    </div>
  );
}
