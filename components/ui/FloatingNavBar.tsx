"use client";
import { useToast } from "@/hooks/useToast";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./Tooltip";


export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { toast } = useToast();
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.001) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });
  const downloadResume = () => {
    toast({
      title: "Downloaded!",
      description: "Resume downloaded",
    });
  }
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit  fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(165, 81, 102, 1),0px_0px_0px_1px_rgba(165, 81, 102, 1)] z-[5000] py-2 px-8 items-center justify-between space-x-8 gap-8",
          
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => 
        (<div key={idx} className="block mx-auto">
          {navItem.name === "resume" ? (
            <a
              key={`link=${idx}`}
              href={navItem.link}
              download
              className="relative dark:text-white flex items-center text-black dark:hover:text-neutral-300 hover:text-neutral-500 text-sm uppercase"
              onClick={downloadResume}
            >
              <span className="text-sm uppercase max-lg:hidden">{navItem.name}</span>
              
              <span className="text-sm lg:hidden">
                <Tooltip>
                  <TooltipTrigger>{navItem.icon}</TooltipTrigger>
                  <TooltipContent>
                    <p>Download resume</p>
                  </TooltipContent>
                </Tooltip>
              </span>
            </a>
          ) : (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            download={navItem.name === "resume"}
            className={cn(
              "relative dark:text-white items-center flex space-x-2 text-black dark:hover:text-neutral-300 hover:text-neutral-500"
            )}
          >
            <span className="text-sm uppercase max-lg:hidden">{navItem.name}</span>
            <span className="text-sm lg:hidden">
              <Tooltip>
                <TooltipTrigger>{navItem.icon}</TooltipTrigger>
                <TooltipContent>
                  <p className="text-[0.75rem] uppercase">{navItem.name}</p>
                </TooltipContent>
              </Tooltip>
            </span>
          </Link>
          )}
        </div>)
        )}
        {/* <div className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white rounded-full">
          <ToggleButton />
        </div> */}
        <span className="absolute inset-x-0 w-1.5/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-[rgba(165,81,102,1)] to-transparent h-px" />
      </motion.div>
      
    </AnimatePresence>
  );
};
