"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { SiClerk, SiCss3, SiFirebase, SiGit, SiJavascript, SiMongodb, SiNextdotjs, SiOpenai, SiReact, SiReactrouter, SiShadcnui, SiTailwindcss, SiTypescript, SiZod } from "react-icons/si";
import GsapLogo from "./GsapLogo";

export function BentoGridThirdDemo() {
  return (
    <section id="about" className="h-[100dvh] w-full flex flex-col max-w-7xl mx-auto">
      <h1 className="text-[3rem] font-bold tracking-[0.125rem] lowercase text-center 2xl:text-[4rem]">about me.</h1>
      <div className="flex-1 py-8 flex max-md:flex-col items-center justify-center tracking-wide gap-2">
        <div className="flex-1 self-start px-4 text-[1rem] 2xl:text-[1.5rem]">
          <ProfilePicture />
          I&apos;m a passionate self-taught front-end developer with a background in banking software (T24). After nearly six years in the fintech industry, I transitioned into web development to bring ideas to life visually and interactively.<br /><br />

          I specialize in building clean, responsive UIs using React, Next.js, and modern front-end tools. I&apos;m particularly excited about exploring animation libraries like GSAP to create engaging and dynamic user experiences.<br /><br />

          To fuel my transition into web development, I completed a Front-End Development course through Scrimba, where I gained proficiency in React, JavaScript, HTML, and CSS. Additionally, I deepened my expertise with JS Mastery, focusing on Next.js and MongoDB to build scalable, high-performance web applications.<br /><br />

          In December 2022, I relocated to Stockholm, Sweden, after a career shift. I also had the opportunity to travel and explore diverse cultures, which helped me shape a global perspective on design and technology.<br /><br />

          My long-term goal is to expand my skill set further and grow into a full-stack developer, with a focus on building end-to-end applications.<br /><br />

          For more details on my background, education, and work experience, feel free to download my <a href="/Krishnapriya_Venkatakrishnan_Resume.pdf" download className="underline">resume</a>.
        </div>
        <div className="w-[40%] self-start flex flex-col gap-4">
          <div>
            <p className="font-bold pb-1 border-b-1 max-w-[450px] 2xl:text-[1.5rem] 2xl:max-w-[550px]">Technologies</p>
            <table className="flex">
              <thead></thead>
              <tbody>
                <tr className="border-b-1 2xl:text-[1.5rem]">
                  <td className="py-2">Frontend</td>
                  <td className="px-2">
                    <div className="flex items-center gap-4">
                      <SiReact className="text-[#61DAFB] text-2xl" />
                      <SiNextdotjs className="text-[#000] dark:text-[#fff] text-2xl" />
                      <SiTypescript className="text-[#3178C6] text-2xl" />
                      <SiJavascript className="text-[#F7DF1E] text-2xl" />
                      <SiTailwindcss className="text-[#06B6D4] text-2xl" />
                      <SiCss3 className="text-[#264DE4] text-2xl" />
                    </div>
                  </td>
                </tr>
                <tr className="border-b-1 2xl:text-[1.5rem]">
                  <td className="py-2">Backend & Databases</td>
                  <td className="px-2">
                    <div className="flex items-center gap-4">
                      <SiMongodb className="text-green-400 text-2xl" />
                      <SiFirebase className="text-[#FFCA28] text-2xl"/>
                      <Image src="/assets/next-auth.png" alt="next-auth" height={25} width={25} className="rounded-full max-sm:h-[20px] max-sm:w-[20px]" />
                      <Image src="/assets/logo-live-docs.png" alt="liveblocks" height={25} width={25} className="rounded-full max-sm:h-[20px] max-sm:w-[20px]" />
                    </div>
                  </td>
                </tr>
                <tr className="border-b-1 2xl:text-[1.5rem]">
                  <td className="py-2">UI & Design Systems</td>
                  <td className="px-2">
                    <div className="flex items-center gap-4">
                      <SiShadcnui className="text-[#000] dark:text-[#fff] text-xl" />
                      <span className="font-sans font-black  dark:text-white">Aceternity UI</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b-1 2xl:text-[1.5rem]">
                  <td className="py-2">Authentication</td>
                  <td className="px-2">
                    <div className="flex items-center gap-4">
                      <SiClerk className="text-[#000] dark:text-[#fff] text-2xl" />
                      <Image src="/assets/next-auth.png" alt="next-auth" height={25} width={25} className="rounded-full max-sm:h-[20px] max-sm:w-[20px]" />
                    </div>
                  </td>
                </tr>
                <tr className="border-b-1 2xl:text-[1.5rem]">
                  <td className="py-2">Validation</td>
                  <td className="px-2">
                    <div className="flex items-center gap-4">
                      <SiZod className="text-[#06B6D4] text-2xl" />
                    </div>
                  </td>
                </tr>
                <tr className="border-b-1 2xl:text-[1.5rem]">
                  <td className="py-2">Routing</td>
                  <td className="px-2">
                    <div className="flex items-center gap-4">
                      <SiReactrouter className="text-[#CA4245] text-2xl" />
                      <SiNextdotjs className="text-[#000] dark:text-[#fff] text-2xl" />
                    </div>
                  </td>
                </tr>
                <tr className="border-b-1 2xl:text-[1.5rem]">
                  <td className="py-2">Animations</td>
                  <td className="px-2">
                    <div className="flex items-center gap-4">
                      <GsapLogo />
                    </div>
                  </td>
                </tr>
                <tr className="border-b-1 2xl:text-[1.5rem]">
                  <td className="py-2">APIs & Tools</td>
                  <td className="px-2">
                    <div className="flex items-center gap-4">
                      <SiOpenai className="text-2xl"/>
                      <SiGit className="text-[#F05032] text-2xl" />
                      <Image src="/assets/vs-code-logo.svg" alt="vs-code" height={25} width={25} className="rounded-full max-sm:h-[20px] max-sm:w-[20px]" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-col gap-4 justify-start">
            <p className="max-w-[450px] font-bold py-1 border-b-1 2xl:text-[1.5rem] 2xl:max-w-[550px]">Certificates</p>
            <Certificates />
          </div>
        </div>
      </div>
    </section>
  );
}

const ProfilePicture = () => {
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
      className="flex flex-1 w-[255px] h-[255px] min-h-[6rem] dark:bg-dot-white/[0.2] rounded-full bg-dot-black/[0.2] flex-col float-left mr-4"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="relative h-full w-full rounded-full flex items-center justify-center">
        <Image
        src="/assets/profile.jpg"
        alt="Profile"
        width={250}
        height={250}
        className="rounded-full border-2"
        />
      </motion.div>
    </motion.div>
  );
};

const Certificates = () => {
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

  const largeFirst = {
    initial: {
      y: 20,
      rotate: 0,
    },
    hover: {
      y: 0,
      rotate: 0,
    },
  };
  const largeSecond = {
    initial: {
      y: -20,
      rotate: 0,
    },
    hover: {
      y: 0,
      rotate: 0,
    },
  };
  return (
    <>
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2 2xl:hidden"
    >
      <motion.div
        variants={first}
        className="h-full w-1/2 rounded-2xl bg-white dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-between"
      >
        <Image
          src="/assets/scrimba-certificate.png"
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
          src="/assets/scrimba-certificate.png"
          alt="avatar"
          height={100}
          width={400}
          
          className="object-contain rounded-tl-2xl rounded-tr-2xl"
        />
        <p className="flex-1 flex justify-center items-center">From JavaScript Mastery</p>
      </motion.div>
    </motion.div>

    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-col flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] space-x-2 max-2xl:hidden"
    >
      <motion.div
        variants={largeFirst}
        className="h-1/2 w-full rounded-2xl bg-white dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-between"
      >
        <Image
          src="/assets/scrimba-certificate.png"
          alt="avatar"
          height={100}
          width={400}
          
          className="object-contain rounded-tl-2xl rounded-tr-2xl"
        />
        <p className="flex-1 flex justify-center items-center 2xl:text-[1.5rem]">From Scrimba</p>
      </motion.div>
      
      <motion.div
        variants={largeSecond}
        className="h-1/2 w-full rounded-2xl bg-white dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-between"
      >
        <Image
          src="/assets/scrimba-certificate.png"
          alt="avatar"
          height={100}
          width={400}
          
          className="object-contain rounded-tl-2xl rounded-tr-2xl"
        />
        <p className="flex-1 flex justify-center items-center 2xl:text-[1.5rem]">From JavaScript Mastery</p>
      </motion.div>
    </motion.div>
    </>
  );
};
