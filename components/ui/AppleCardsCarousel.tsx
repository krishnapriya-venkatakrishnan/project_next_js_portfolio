"use client";
import { cn } from "@/lib/utils";
import {
  IconCircleArrowUpRightFilled,
  IconX
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import Image, { ImageProps } from "next/image";
import Link from "next/link";
import React, {
  useEffect,
  useRef,
  useState,
} from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";

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
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
    }
  }, [initialScroll]);


  return (
      <div className="relative w-full">
        <div
          className="mt-10 flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth  [scrollbar-width:none] mx-auto"
          ref={carouselRef}
        >
          <div
            className={cn(
              "absolute right-0 z-[1000] h-auto w-[5%] overflow-hidden bg-gradient-to-l",
            )}
          ></div>

          <div
            className={cn(
              "grid grid-cols-1 md:grid-cols-2 gap-4 ",
              "mx-auto ", // remove max-w-4xl if you want the carousel to span the full width of its container
              "w-full"
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
                className="rounded-3xl "
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
  
  );
};

export const Card = ({
  card,
  layout = false,
}: {
  card: Card;
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
        className="relative z-10 flex h-[310px] w-[300px] md:h-[450px] md:w-[440px] flex-col items-start justify-end pb-4 overflow-hidden rounded-3xl bg-gray-100 dark:bg-neutral-900 hover:brightness-90 cursor-pointer"
        onClick={handleOpen}
      >
        <div className="relative -top-1 md:-top-5 h-[230px] w-[300px] md:h-[370px] md:w-[440px]">
        <BlurImage
          src={card.src}
          alt={card.title}
          fill
          className="absolute inset-0 h-[230px] w-[300px] md:h-[370px] md:w-[440px] object-contain"
        />
        </div>
        <div className="w-full h-[40px] flex items-center justify-between px-4">
          <p className="max-lg:text-[0.9rem] font-medium">{card.title}</p>
          <IconCircleArrowUpRightFilled className="max-lg:scale-[0.9] text-neutral-900 dark:text-white" />
        </div>
        <div className="w-full h-[20px] flex items-center justify-between px-4 pt-0 md:pt-2">
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
        "transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className,
      )}
      onLoad={() => setLoading(false)}
      src={src as string}
      width={width}
      height={height}
      fill
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};
