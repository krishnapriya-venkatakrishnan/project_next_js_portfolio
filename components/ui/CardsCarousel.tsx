"use client";
import React, {
  useEffect,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { HighlightButton } from "./MovingGrid";
import { Compare } from "./Compare";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

type Card = {
  src: string;
  description: string;
  title: string;
  deployedLink: string;
  technologies?: React.ReactNode;
  secondImage?: string;
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
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
      <div className="relative w-full h-full flex flex-col flex-1">
        <h2 className="relative h-[10dvh] font-bold tracking-[0.125rem] text-center text-[1.75rem] lg:text-[3rem] 2xl:text-[4rem] mb-2">
          my projects.
        </h2>
        <div className="h-[90dvh]">
          <div
            className="w-full overflow-x-scroll overscroll-x-auto overflow-y-scroll scroll-smooth [scrollbar-width:none] h-[80dvh]"
            ref={carouselRef}
            onScroll={checkScrollability}
          >
            {/* <div
              className={cn(
                "absolute right-0  z-[1000] h-full  w-[5%]  bg-gradient-to-l"
              )}
            ></div> */}

            <div
              className={cn(
                "flex flex-row justify-start gap-4 pl-4",
                "max-w-7xl mx-auto h-full" // remove max-w-4xl if you want the carousel to span the full width of its container
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
                  className="last:pr-[5%] md:last:pr-[33%]  rounded-3xl"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
          <div className="h-[10dvh] flex justify-end items-center gap-2 mb-4 pt-2">
            <button
              className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50 cursor-pointer"
              onClick={scrollLeft}
              disabled={!canScrollLeft}
            >
              <IconArrowNarrowLeft className="h-6 w-6  text-gray-500" />
            </button>
            <button
              className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50 cursor-pointer"
              onClick={scrollRight}
              disabled={!canScrollRight}
            >
              <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
            </button>
          </div>
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

  return (
    
      <motion.div
        layoutId={layout ? `card-${card.description}` : undefined}
        className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-full w-70 md:w-96 lg:w-130 xl:w-140 flex flex-col items-start justify-start relative z-10 pb-2"
      >
          <div className="h-[40%] w-full relative">
            { index === 0 ?
              <div className="w-full h-full flex items-center justify-center [transform-style:preserve-3d]">
                <div
                  className="dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800 h-full w-full rounded-t-3xl"
                >
                  <Compare
                    firstImage={card.src}
                    secondImage={card.secondImage}
                    firstImageClassName="object-cover object-left-top w-full rounded-b-none rounded-t-3xl"
                    secondImageClassname="object-cover object-left-top w-full rounded-b-none rounded-t-3xl"
                    className="w-full h-full"
                    slideMode="hover"
                    autoplay={true}
                  />
                </div>
              </div>
            :
              <Image
              src={card.src}
              alt={card.description}
              fill
              className="rounded-t-3xl"
              />
            }
          </div>
          <div className="h-[60%] w-full">
            <div className="h-full w-full flex flex-col items-start justify-between">
              <div className="min-h-[80%] flex flex-col items-start w-full px-1">
                <p className="text-[1.125rem] lg:text-[1.25rem] font-medium 2xl:text-[1.5rem]">{card.title}</p>
                <p className="w-full h-[85%] overflow-y-scroll [scrollbar-width:none] max-lg:text-[0.9rem]">
                  {card.description}
                </p>
                
              </div>
              <div className="rounded-b-3xl w-full flex-1 flex items-center justify-between gap-1 md:gap-4 pr-1 py-0 xl:py-4 z-20  bg-gray-100 dark:bg-neutral-900">
                <div className="flex">{card.technologies}</div>
                <Link
                href={card.deployedLink}
                className="cursor-pointer lg:self-center"
                target="_blank"
                rel="noopener noreferrer"
                >
                  <HighlightButton
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 cursor-pointer text-[0.75rem] lg:text-[1rem] 2xl:text-[1.25rem]"
                  >
                    View site
                  </HighlightButton>
                </Link>
            </div>
            </div>
          
          </div>
      </motion.div>
  );
};

