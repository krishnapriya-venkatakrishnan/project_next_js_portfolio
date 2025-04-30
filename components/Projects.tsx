"use client";
import React from "react";
import { Carousel, Card } from "./ui/CardsCarousel";

import { SiClerk, SiCss3, SiFirebase, SiMongodb, SiNextdotjs, SiOpenai, SiReact, SiReactrouter, SiShadcnui, SiTailwindcss, SiZod } from "react-icons/si";
import GsapLogo from "./GsapLogo";
import Image from "next/image";



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
    title: "DevOverflow",
    description: "Dev Overflow is a full-stack Q&A web application inspired by Stack Overflow, designed with a scalable architecture and a strong focus on user experience. The application features a consistent layout with a top navigation bar (including a global search bar), and a responsive container below that splits into a left sidebar for page navigation, a central section for dynamic page content, and a right sidebar displaying top questions and popular tags. Core features include secure authentication (email/password and social login), dynamic routing, and URL state management. Users can explore questions using filters, pagination, and local search, submit questions and answers (with OpenAI integration for AI-generated answers), and interact via upvotes/downvotes, which visually reflect user engagement. The backend is powered by MongoDB and manages users, accounts, questions, answers, tags, votes, collections, and interactions. Server actions handle logic for data operations, and API routes support user/account management. Additional highlights include profile pages with user stats, reputation and badge systems, a Find Jobs page (integrated with the Arbetsförmedlingen API), community and collection views, and full theme support (light, dark, system).",
    src: "/assets/devflow-light.png",
    secondImage: "/assets/devflow-dark.png",
    deployedLink: "https://nextjs-devflow-nu.vercel.app/",
    technologies: (
      <div className="flex items-center justify-center gap-4">
        <SiNextdotjs className="text-[#000] dark:text-[#fff] text-2xl" />
        <Image src="/assets/next-auth.png" alt="next-auth" height={25} width={25} className="rounded-full max-sm:h-[20px] max-sm:w-[20px]" />
        <SiReact className="text-[#61DAFB] text-2xl" />
        <SiMongodb className="text-green-400 text-2xl" />
        <SiTailwindcss className="text-[#06B6D4] text-2xl" />
        <SiShadcnui className="text-[#000] dark:text-[#fff] text-xl" />
        <SiZod className="text-[#06B6D4] text-2xl" />
        <SiOpenai className="text-2xl"/>
      </div>
    )
  },
  {
    title: "LiveDocs Editor",
    description: "The Collaborative Document Editor is a modern, real-time editing platform built using Next.js App Router, Clerk for authentication, and Liveblocks for real-time collaboration. It's designed to deliver a seamless and interactive document editing experience — whether you're working solo or collaborating with a team. Key Features include- Create & Manage Documents: start new documents, update existing ones, or delete with ease from a unified dashboard; Real-Time Collaboration-  multiple users can edit the same document simultaneously with presence indicators and cursor tracking; Access control- share documents as view-only or grant editing access using a simple sharing modal; Commenting System- add contextual comments to specific text blocks or reply to feedback in real-time; In-App Notifications- stay updated when someone shares a document with you or invites you to collaborate; Persistence with Liveblocks Storage- all changes are synced and persisted using Liveblocks' storage APIs — even comments are synced across sessions.",
    src: "/assets/live-docs.png",
    deployedLink: "https://project-live-docs.vercel.app/",
    technologies: (
      <div className="flex items-center justify-center gap-4">
        <SiNextdotjs className="text-[#000] dark:text-[#fff] text-2xl" />
        <SiClerk className="text-[#000] dark:text-[#fff] text-2xl" />
        <SiReact className="text-[#61DAFB] text-2xl" />
        <Image src="/assets/logo-live-docs.png" alt="liveblocks" height={25} width={25} className="rounded-full max-sm:h-[20px] max-sm:w-[20px]" />
        <SiShadcnui className="text-[#000] dark:text-[#fff] text-xl" />
        <SiTailwindcss className="text-[#06B6D4] text-2xl" />
      </div>
    )
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
    title: "Vanlife",
    description: "A full-stack van rental platform built with React.js, React Router, and Firebase. The application allows users to browse a catalog of vans, apply filters, and view detailed information about each van. Users can simulate the rental process, with transaction and income records updated accordingly (no actual payment processing is implemented). Hosts can access a secure dashboard to manage their van listings, including adding, editing, deleting vans, uploading images, and tracking rental activity. Firebase Firestore is used for structured data management, while Firebase Storage handles media uploads. The project demonstrates dynamic routing, protected layouts, conditional rendering, and responsive UI updates.",
    src: "/assets/vanlife.png",
    deployedLink: "https://66bc95639028ae7382537252--famous-fenglisu-54cca7.netlify.app/",
    technologies: (
      <div className="flex items-center justify-center gap-4">
        <SiReact className="text-[#61DAFB] text-2xl" />
        <SiReactrouter className="text-[#CA4245] text-2xl" />
        <SiFirebase className="text-[#FFCA28] text-2xl"/>
        <SiCss3 className="text-[#264DE4] text-2xl" />
      </div>
    )
  },
  {
    title: "Tenzies",
    description: "This is a React-based dice game where the player rolls until all dice show the same value. Players can click individual dice to 'hold' their values between rolls, introducing a strategic element to the game. Each die is dynamically generated with a random value, a hold state, and a unique ID using nanoid(). A timer tracks the duration of each game, and the app displays the number of rolls, the time taken, and the best completion time so far. Once the player wins, confetti is triggered as a celebratory animation. Dice are visually rendered with dots representing their values, and only non-held dice are re-rolled, creating an interactive and engaging user experience.",
    src: "/assets/tenzies.png",
    deployedLink: "https://scrimba-krishna-v-react-game-tenzies.netlify.app/",
    technologies: (
      <div className="flex items-center justify-center gap-4">
        <SiReact className="text-[#61DAFB] text-2xl" />
        <SiCss3 className="text-[#264DE4] text-2xl" />
      </div>
    )
  },
  
];
