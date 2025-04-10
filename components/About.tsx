"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { motion } from "motion/react";
import Image from "next/image";

export function BentoGridThirdDemo() {
  return (
    <section className="md:flex md:flex-col md:items-center md:justify-center">
      <h1 className="text-[2.5rem] font-bold uppercase text-center">Hi again</h1>
    <BentoGrid className="max-sm:max-w-[350px] max-w-7xl px-1 mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
        />
      ))}
    </BentoGrid>
    </section>
  );
}

const SkeletonOne = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="relative h-full w-full rounded-lg">
        {/* <Image
        src="/assets/Profile.png"
        alt="Profile"
        fill
        className="object-contain"
        /> */}
      </motion.div>
    </motion.div>
  );
};

const SkeletonTwo = () => {
  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
    >
      I was born and raised in India, where I completed my Bachelor&apos;s in Computer Science and Engineering at Thiagarajar College of Engineering (2013-2017). After graduation, I joined Temenos India Private Limited in Chennai, where I gained nearly 6 years of professional experience, including an internship (December 2016 - December 2022). I got married in December 2022 and relocated to Stockholm, Sweden, in 2023. During this time, I had the opportunity to travel to places like Bali, Iceland, Switzerland, Bangkok, Paris, and Milan, gaining diverse cultural insights. Taking a sabbatical allowed me to reflect on my career goals, which led me to focus on front-end development. During this period, I engaged in extensive self-study and completed a course in Front-End Development, with an emphasis on React, JavaScript, HTML, and CSS, through online platforms and Scrimba, from which I also received a certificate. My long-term goal is to continue expanding my skills and eventually grow into a full-stack developer.
    </motion.div>
  );
};

const SkeletonThree = () => {
  const first = {
    initial: {
      x: 20,
      rotate: 0,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 0,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="h-full w-1/2 rounded-2xl bg-white dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-between"
      >
        <Image
          src="/assets/SampleProject.png"
          alt="avatar"
          height={100}
          width={400}
          
          className="object-contain rounded-tl-2xl rounded-tr-2xl"
        />
        <p className="flex-1 flex justify-center items-center">From Scrimba</p>
      </motion.div>
      
      <motion.div
        variants={second}
        className="h-full w-1/2 rounded-2xl bg-white dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-between"
      >
        <Image
          src="/assets/SampleProject.png"
          alt="avatar"
          height={100}
          width={400}
          
          className="object-contain rounded-tl-2xl rounded-tr-2xl"
        />
        <p className="flex-1 flex justify-center items-center">From JavaScript Mastery</p>
      </motion.div>
    </motion.div>
  );
};

const SkeletonFour = () => {
  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex items-center justify-center flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col "
    >
      <p>Next.js</p>
      <p>React js</p>
      <p>TypeScript</p>
      <p>JavaScript</p>
      <p>MongoDB</p>
      <p>CSS</p>
      <p>TailwindCSS</p>
    </motion.div>
  );
};

const items = [
  {
    header: <SkeletonOne />,
    className: "md:col-span-1",
  },
  {
    header: <SkeletonTwo />,
    className: "md:col-span-2",
  },
  {
    header: <SkeletonThree />,
    className: "md:col-span-2",
  },

  {
    header: <SkeletonFour />,
    className: "md:col-span-1",
  },
];
