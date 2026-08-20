"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-react";
import Image from "next/image";

type ThreeDWork = {
  title: string;
  date: string;
  description: string;
  images: string[];
  tags?: string[];
  link?: { label: string; href: string };
};

// Replace with your real 3D projects. Put images in /public/assets/3d/<project>/
const works: ThreeDWork[] = [
  {
    title: "BedRoom Model",
    date: "July 2026",
    description:
      "Conceptual BedRoom model - built in Blender and textured in Substance Painter. This project was an exploration of realistic interior design, focusing on lighting, materials, and composition.",
    images: [
      "/assets/3d/BedRoom_Model/Samp1.png",
      "/assets/3d/BedRoom_Model/Samp2.png",
      "/assets/3d/BedRoom_Model/Samp3.png",
      "/assets/3d/BedRoom_Model/Samp4.png",
      "/assets/3d/BedRoom_Model/Samp5.png",
      "/assets/3d/BedRoom_Model/Samp6.png",
      "/assets/3d/BedRoom_Model/Samp7.png",
    ],
    tags: ["Blender", "Modeling", "Substance Painter", "Interior Design"],
  },
  {
    title: "Chair Model",
    date: "August 2026",
    description:
      "A 3D model of a chair - built in Blender and textured in Substance Painter.",
    images: ["/assets/3d/Chair.png"],
    tags: ["Blender", "Modeling", "Substance Painter"],
  },
  {
    title: "PC Desktop Model",
    date: "August 2026",
    description:
      "A 3D model of a PC desktop - built in Blender and textured in Substance Painter.",
    images: [
      "/assets/3d/PC_Setup_Initial.png",
      "/assets/3d/Keyboard.png",
      "/assets/3d/PC_Setup.png",
    ],
    tags: ["Blender", "Modeling", "Substance Painter"],
  },
];

type LightboxImage = { src: string; alt: string };

function WorkCarousel({
  images,
  title,
  onImageClick,
}: {
  images: string[];
  title: string;
  onImageClick: (image: LightboxImage) => void;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: images.length > 1 });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-t-xl" ref={emblaRef}>
        <div className="flex">
          {images.map((src, i) => (
            <div
              key={src}
              className="relative min-w-0 flex-[0_0_100%] aspect-[4/3] bg-muted"
            >
              <button
                type="button"
                onClick={() =>
                  onImageClick({ src, alt: `${title} - view ${i + 1}` })
                }
                aria-label={`Open ${title} image ${i + 1} full size`}
                className="absolute inset-0 h-full w-full cursor-grab"
              >
                <Image
                  src={src}
                  alt={`${title} - view ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Previous slide"
            className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur transition hover:bg-background"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Next slide"
            className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur transition hover:bg-background"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-1.5 rounded-full transition ${
                  i === selectedIndex ? "bg-primary" : "bg-background/60"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function Lightbox({
  image,
  onClose,
}: {
  image: LightboxImage | null;
  onClose: () => void;
}) {
  // Close on Escape, and lock page scroll while open
  useEffect(() => {
    if (!image) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [image, onClose]);

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-md"
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close image"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur transition hover:bg-background"
          >
            <X className="h-5 w-5" />
          </button>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="relative h-[80vh] w-full max-w-4xl"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function ThreeDWorks() {
  const [lightboxImage, setLightboxImage] = useState<LightboxImage | null>(
    null,
  );

  return (
    <div className="min-h-screen px-4 py-16 md:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            3D Works
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground">
            A collection of 3D renders, models, and experiments — built while
            exploring form, lighting, and materials outside of code.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2">
          {works.map((work, i) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-sm transition-shadow hover:shadow-md"
            >
              <WorkCarousel
                images={work.images}
                title={work.title}
                onImageClick={setLightboxImage}
              />

              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-xl font-semibold">{work.title}</h2>
                  <span className="mt-1 shrink-0 text-xs text-muted-foreground">
                    {work.date}
                  </span>
                </div>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {work.description}
                </p>

                {work.tags && work.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {work.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-muted px-2.5 py-0.5 text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {work.link && (
                  <a
                    href={work.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    {work.link.label}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
    </div>
  );
}
