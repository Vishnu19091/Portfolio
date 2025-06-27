import { FriendlyStrangerFont } from "@/fonts/FriendlyStranger";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CardProps {
  images?: string[];
  title: string;
  duration: string;
  description: string;
  website: string;
  repo: string;
}

export default function ProjectCard({
  images = [],
  title,
  duration,
  description,
  website,
  repo,
}: CardProps) {
  return (
    <div className="flex flex-col gap-2 p-2 mobile:w-full desktop:w-[90%] h-fit border hover:bg-red-100 dark:hover:bg-[#7241412b] border-red-950 hover:border-red-600 rounded-lg transition-all duration-300">
      {/* Image Carousel or Single Image */}
      {images.length > 1 ? (
        <Carousel className="relative w-full max-w-full">
          <CarouselContent>
            {images.map((img, index) => (
              <CarouselItem key={index}>
                <img
                  src={img}
                  alt={`${title} - ${index + 1}`}
                  className="w-full h-60 object-cover rounded-xl"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-2 bg-white/70 hover:bg-white text-black border-none rounded-full shadow-md" />
          <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-2 bg-white/70 hover:bg-white text-black border-none rounded-full shadow-md" />
        </Carousel>
      ) : (
        <img
          src={images[0]}
          alt={title}
          className="w-full h-60 object-cover rounded-xl"
        />
      )}

      {/* Title */}
      <h1 className="mobile:text-2xl desktop:text-3xl">{title}</h1>

      {/* Duration */}
      <p className="mobile:text-lg desktop:text-xl">{duration}</p>

      {/* Description */}
      <p className="mobile:text-md desktop:text-xl">{description}</p>

      {/* Buttons */}
      <div className="grid mobile:grid-cols-1 desktop:grid-cols-2 w-fit mx-auto gap-10 my-4">
        <a
          href={website}
          target="_self"
          className={`${FriendlyStrangerFont.className} mobile:text-lg desktop:text-2xl px-4 py-2 border border-gray-500 hover:border-red-600 hover:bg-red-600 rounded-xl transition-colors duration-300 ease-in-out`}
        >
          🌐 Website
        </a>
        <a
          href={repo}
          target="_self"
          className={`${FriendlyStrangerFont.className} mobile:text-lg desktop:text-2xl px-4 py-2 border border-gray-500 hover:border-red-600 hover:bg-red-600 rounded-xl transition-colors duration-300 ease-in-out flex flex-row-reverse items-center gap-3`}
        >
          Source
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            className="mobile:h-7 mobile:w-7 desktop:h-8 desktop:w-8"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
          </svg>
        </a>
      </div>
    </div>
  );
}
