"use client";
import React from "react";
import { Carousel, Card } from "./ui/CardsCarousel";

import { SiReact, SiTailwindcss } from "react-icons/si";
import GsapLogo from "./GsapLogo";



export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <section className="dark:bg-black">
      <div className="w-full h-full">
        <Carousel items={cards} />
      </div>
    </section>
  );
}

const data = [
  {
    title: "Devflow",
    description: "You can do more with AI.",
    src: "/assets/SampleProject.png",
    deployedLink: "",
  },
  {
    title: "LexiEditor",
    description: "Enhance your productivity.",
    src: "/assets/SampleProject.png",
    deployedLink: "",
  },
  {
    title: "Landing page",
    description: "This scroll-based website opens with a fixed navigation bar that adapts as the user scrolls, offering smooth transitions and active link highlights tied to scroll position. The mobile view features a toggleable menu with background imagery and icon animations for an engaging touch. Throughout the site, content is dynamically pulled from a centralized configuration file, making the layout modular and easy to maintain. Interactive buttons with glowing gradient effects enhance the UI, while animated pricing transitions are powered by 'react-countup', allowing seamless toggling between monthly and yearly plans. Elements across the site respond with smooth hover and scroll-based transitions using Tailwind utilities and 'react-scroll'. Collapsible components like FAQs use controlled states and animated reveals using 'react-slidedown'. Built with React, TailwindCSS, and lightweight animation libraries, this website delivers a sleek, interactive journey optimized for both desktop and mobile users.",
    src: "/assets/landing-page.png",
    deployedLink: "https://project-landing-page-one.vercel.app/",
    technologies: (
      <div className="flex items-center justify-center gap-4">
        <SiReact className="text-[#61DAFB] text-2xl" />
        <SiTailwindcss className="text-[#06B6D4] text-2xl" />
      </div>
    )
  },

  {
    title: "3D Animated Website",
    description: "This 3D animated website starts with a loading page that appears while the elements are being loaded. Once the content is ready, the homepage displays a background video, which plays the next video when hovered over at the center. Below the video, an animated image section creates the illusion of entering a new world. The site also features a section with bento card-styled features, incorporating tilt effects, followed by a story section with another animated image. A floating navigation bar with an audio feature appears when scrolling up, enhancing the interactive experience. Finally, the contact section and footer complete the layout. Built with React.js, GSAP (with ScrollTrigger for scroll-triggered animations), and TailwindCSS, this website combines interactivity, immersive design, and dynamic user engagement.",
    src: "/assets/3d-animated-website.png",
    deployedLink: "https://project-3d-animated-website.vercel.app/",
    technologies: (
      <div className="flex items-center justify-center gap-4">
        <SiReact className="text-[#61DAFB] text-2xl" />
        <GsapLogo />
        <SiTailwindcss className="text-[#06B6D4] text-2xl" />
      </div>
    )
  },
  {
    title: "Tenzies",
    description: "Maps for your iPhone 15 Pro Max.",
    src: "/assets/SampleProject.png",
    deployedLink: "",
  },
  {
    title: "Quizzical",
    description: "Maps for your iPhone 15 Pro Max.",
    src: "/assets/SampleProject.png",
    deployedLink: "",
  },
];
