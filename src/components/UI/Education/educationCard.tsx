import Image from "next/image";

interface CardProp {
  name: string;
  imgurl: string;
  board?: string;
  passoutyear: string;
  duration?: string;
}

export default function EducationCard({
  name,
  imgurl,
  board,
  duration,
  passoutyear,
}: CardProp) {
  return (
    <div className="flex mobile:flex-col table:flex-row desktop:flex-row gap-4 items-center mobile:w-full tablet:w-[70%] desktop:w-[70%] mx-auto border  hover:bg-red-100 dark:hover:bg-[#7241412b] border-red-950 hover:border-red-600 rounded-lg transition-all duration-300 px-2 py-4">
      <div>
        <Image src={imgurl} alt={name} width={100} height={100}></Image>
      </div>
      <div className="flex flex-col gap-2 mobile:text-md desktop:text-xl">
        <p>Name: {name}</p>
        {board && <p>Board: {board}</p>}
        {duration && <p>Duration: {duration}</p>}
        <p>Pass out Year: {passoutyear}</p>
      </div>
    </div>
  );
}
