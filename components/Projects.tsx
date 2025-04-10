"use client";
import React from "react";
import { Carousel, Card } from "./ui/CardsCarousel";

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
    category: "Devflow",
    title: "You can do more with AI.",
    src: "/assets/SampleProject.png",
  },
  {
    category: "LexiEditor",
    title: "Enhance your productivity.",
    src: "/assets/SampleProject.png",
  },
  {
    category: "AI SAAS landing page",
    title: "Launching the new Apple Vision Pro.",
    src: "/assets/SampleProject.png",
  },

  {
    category: "Animated Website",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "/assets/SampleProject.png",
  },
  {
    category: "Tenzies",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "/assets/SampleProject.png",
  },
  {
    category: "Quizzical",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "/assets/SampleProject.png",
  },
];
