"use client";
import React, {
  useEffect,
  useRef,
  useState,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconCircleArrowUpRightFilled,
  IconX,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import Image, { ImageProps } from "next/image";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import Link from "next/link";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  content: React.ReactNode;
  deployedLink: string;
  technologies?: React.ReactNode;
};

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft } = carouselRef.current;
      
      setCanScrollLeft(scrollLeft > 0);
      
      if (window.innerWidth <= 640)
        setCanScrollRight(scrollLeft < 1780); // card width 356px
      else if (window.innerWidth <= 1024)
        setCanScrollRight(scrollLeft < 3080); // card width 616px
      else if (window.innerWidth <= 1536)
        setCanScrollRight(scrollLeft < 2464); // card width 616px
      else
        setCanScrollRight(scrollLeft < 4640); // card width 1160px
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      if (window.innerWidth <= 640)
        carouselRef.current.scrollBy({ left: -370, behavior: "smooth" }); // card width 356px
      else if (window.innerWidth <= 1024)
        carouselRef.current.scrollBy({ left: -630, behavior: "smooth" }); // card width 616px
      else if (window.innerWidth <= 1536)
        carouselRef.current.scrollBy({ left: -1260, behavior: "smooth" }); // card width 616px
      else
        carouselRef.current.scrollBy({ left: -2340, behavior: "smooth" }); // card width 1160px
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      if (window.innerWidth <= 640)
        carouselRef.current.scrollBy({ left: 370, behavior: "smooth" }); // card width 356px
      else if (window.innerWidth <= 1024)
        carouselRef.current.scrollBy({ left: 630, behavior: "smooth" }); // card width 616px
      else if (window.innerWidth <= 1536)
        carouselRef.current.scrollBy({ left: 1260, behavior: "smooth" }); // card width 616px
      else
        carouselRef.current.scrollBy({ left: 2340, behavior: "smooth" }); // card width 1160px
    }
  };

  return (
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none] md:py-20"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          <div
            className={cn(
              "absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l",
            )}
          ></div>

          <div
            className={cn(
              "flex flex-row justify-start gap-4 pl-4 lg:pl-10",
              "mx-auto ", // remove max-w-4xl if you want the carousel to span the full width of its container
            )}
          >
            {items.map((item, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                    once: true,
                  },
                }}
                key={"card" + index}
                className="rounded-3xl last:pr-[5%] md:last:pr-[33%]"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mr-10 flex justify-end gap-2">
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50 cursor-pointer"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className="h-6 w-6 text-gray-500" />
          </button>
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50 cursor-pointer"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
          </button>
        </div>
      </div>
  
  );
};

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 h-screen overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-lg"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              ref={containerRef}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="relative z-[60] mx-auto my-10 h-fit max-w-5xl rounded-3xl bg-white p-4 md:p-10 dark:bg-neutral-900"
            >
              <button
                className=" top-4 right-0 ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-neutral-700 dark:bg-white cursor-pointer"
                onClick={handleClose}
              >
                <IconX className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
              </button>
              <motion.div className="mt-4 flex items-center justify-between">
                <motion.p
                  layoutId={layout ? `title-${card.title}` : undefined}
                  className=" text-neutral-700 dark:text-white text-[1.125rem] lg:text-[1.25rem] font-bold 2xl:text-[1.5rem]"
                >
                  {card.title}
                </motion.p>
                <motion.div
                  initial="initial"
                  animate="animate"
                  variants={{
                    initial: {
                      backgroundPosition: "0 50%",
                    },
                    animate: {
                      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
                    },
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className=" w-full  text-black dark:text-white flex dark:bg-dot-white/[0.2] rounded-3xl bg-dot-black/[0.2] items-center justify-evenly py-2 max-w-[150px] lg:max-w-[200px] mb-8 mt-8"
                  style={{
                    background:
                      "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
                    backgroundSize: "400% 400%",
                  }}
                >
                  <Link
                  href={card.deployedLink}
                  className="cursor-pointer lg:text-[1.25rem] font-bold 2xl:text-[1.5rem]"
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                      Project Demo
                  </Link>
                </motion.div>
              </motion.div>
              <div className="py-10">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <motion.div
        layoutId={layout ? `card-${card.title}` : undefined}
        className="relative z-10 flex h-64 w-89 flex-col items-start justify-end pb-4 overflow-hidden rounded-3xl bg-gray-100 md:h-105 md:w-154 2xl:h-180 2xl:w-290 dark:bg-neutral-900 hover:brightness-90 cursor-pointer"
        onClick={handleOpen}
      >
        
        <BlurImage
          src={card.src}
          alt={card.title}
          fill
          className="absolute inset-0 z-10 object-cover"
        />
        <div className="w-full flex items-center justify-between px-4">
          <p className="max-lg:text-[0.9rem] font-medium">{card.title}</p>
          <IconCircleArrowUpRightFilled className="max-lg:scale-[0.9] text-neutral-900 dark:text-white" />
        </div>
        <div className="w-full flex items-center justify-between px-4 pt-2">
          {card.technologies}
        </div>
      </motion.div>
    </>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn(
        "!h-45 md:!h-80 2xl:!h-150 w-full transition duration-300 object-contain",
        isLoading ? "blur-sm" : "blur-0",
        className,
      )}
      onLoad={() => setLoading(false)}
      src={src as string}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};
