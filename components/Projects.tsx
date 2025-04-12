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
    title: "AI SAAS landing page",
    description: "Launching the new Apple Vision Pro.",
    src: "/assets/SampleProject.png",
    deployedLink: "",
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
