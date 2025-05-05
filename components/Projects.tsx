"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/AppleCardsCarousel";
import Image from "next/image";
import { SiClerk, SiCss3, SiFirebase, SiJavascript, SiMongodb, SiNextdotjs, SiOpenai, SiReact, SiReactrouter, SiShadcnui, SiTailwindcss, SiTypescript, SiZod } from "react-icons/si";
import GsapLogo from "./GsapLogo";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div id="projects" className="w-full lg:h-[100dvh] pb-20">
      <h2 className="max-lg:mt-10 lg:my-10 h-[10dvh] font-bold tracking-[0.125rem] text-center text-[1.75rem] lg:text-[3rem] 2xl:text-[4rem]">my projects.</h2>
      <Carousel items={cards} />
    </div>
  );
}

const DevOverflowContent = () => (
  <section>
    <div>
      <div className=" rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={devFlowScreenshots}
          direction="left"
          speed="slow"
        />
      </div>
    </div>
    <div className="mt-4 max-lg:text-[0.9rem]">
      <p className="max-lg:text-[0.9rem]">
        Dev Overflow is a full-stack Q&A web application inspired by Stack Overflow, built with scalable architecture and a strong focus on user experience. The layout features a persistent top navigation bar with global search and a responsive three-column container: a left sidebar for navigation, a central area for dynamic content, and a right sidebar highlighting top questions and popular tags. Users can securely sign in using email/password or social accounts, navigate through dynamic routes with URL state management, and explore questions via filters, pagination, and local search. They can also submit questions and answers, enhanced by OpenAI-generated suggestions, and engage through upvotes and downvotes. The backend, powered by MongoDB, handles users, accounts, questions, answers, tags, votes, and interactions, with server actions and API routes managing data operations. Additional highlights include user profiles with reputation scores and badges, a Find Jobs page integrated with the Arbetsförmedlingen API, community and collection views, and full theme support (light, dark, and system modes).
      </p>
      <div className="mt-4">
        <p className="mt-2 font-medium">Technologies</p>
        <ul className="flex flex-col gap-2 p-2 dark:bg-neutral-900">
        <li className="flex items-center gap-2"><SiNextdotjs className="text-[#000] dark:text-[#fff] lg:text-2xl" />Next.js</li>
        <li className="flex items-center gap-2"><Image src="/assets/next-auth.png" alt="next-auth" height={25} width={25} className="rounded-full max-lg:h-[20px] max-lg:w-[20px]" />NextAuth</li>
        <li className="flex items-center gap-2"><SiReact className="text-[#61DAFB] lg:text-2xl" />React</li>
        <li className="flex items-center gap-2"><SiTypescript className="text-[#3178C6] lg:text-2xl" />TypeScript</li>
        <li className="flex items-center gap-2"><SiMongodb className="text-green-400 lg:text-2xl" />Mongodb</li>
        <li className="flex items-center gap-2"><SiTailwindcss className="text-[#06B6D4] lg:text-2xl" />TailwindCSS</li>
        <li className="flex items-center gap-2"><SiShadcnui className="text-[#000] dark:text-[#fff] lg:text-xl" />Shadcn</li>
        <li className="flex items-center gap-2"><SiZod className="text-[#06B6D4] lg:text-2xl" />Zod</li>
        <li className="flex items-center gap-2"><SiOpenai className="lg:text-2xl"/>OpenAI</li>
        </ul>
      </div>
    </div>
  </section>
);

const devFlowScreenshots = [
  {
    image: "/assets/devflow/signIn.png"
  },
  {
    image: "/assets/devflow/home.png"
  },
  {
    image: "/assets/devflow/profile.png"
  },
  {
    image: "/assets/devflow/collections.png"
  },
  {
    image: "/assets/devflow/community.png"
  },
  {
    image: "/assets/devflow/jobs.png"
  },
  {
    image: "/assets/devflow/questionDetail.png"
  },
  {
    image: "/assets/devflow/answer.png"
  },
  {
    image: "/assets/devflow/askQuestion.png"
  },
  {
    image: "/assets/devflow/tags.png"
  },
];

const LiveDocsContent = () => (
  <section>
    <div>
      <div className=" rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={liveDocsScreenshots}
          direction="left"
          speed="slow"
        />
      </div>
    </div>
    <div className="mt-4 max-lg:text-[0.9rem]">
      <p className="max-lg:text-[0.9rem]">
        The Collaborative Document Editor is a modern, real-time editing platform built using Next.js App Router, Clerk for authentication, and Liveblocks for real-time collaboration. It&apos;s designed to deliver a seamless and interactive document editing experience - whether you&apos;re working solo or collaborating with a team. Key Features include- Create & Manage Documents: start new documents, update existing ones, or delete with ease from a unified dashboard; Real-Time Collaboration-  multiple users can edit the same document simultaneously with presence indicators and cursor tracking; Access control- share documents as view-only or grant editing access using a simple sharing modal; Commenting System- add contextual comments to specific text blocks or reply to feedback in real-time; In-App Notifications- stay updated when someone shares a document with you or invites you to collaborate; Persistence with Liveblocks Storage- all changes are synced and persisted using Liveblocks&apos; storage APIs - even comments are synced across sessions.
      </p>
      <div className="mt-4">
        <p className="mt-2 font-medium">Technologies</p>
        <ul className="flex flex-col gap-2 p-2 dark:bg-neutral-900">
        <li className="flex items-center gap-2"><SiNextdotjs className="text-[#000] dark:text-[#fff] lg:text-2xl" />Next.js</li>
        <li className="flex items-center gap-2"><SiClerk className="text-[#000] dark:text-[#fff] lg:text-2xl" />Clerk</li>
        <li className="flex items-center gap-2"><SiReact className="text-[#61DAFB] lg:text-2xl" />React</li>
        <li className="flex items-center gap-2"><SiJavascript className="text-[#F7DF1E] lg:text-2xl" />JavaScript</li>
        <li className="flex items-center gap-2"><Image src="/assets/logo-live-docs.png" alt="liveblocks" height={25} width={25} className="rounded-full max-lg:h-[20px] max-lg:w-[20px]" />Liveblocks</li>
        <li className="flex items-center gap-2"><SiTailwindcss className="text-[#06B6D4] lg:text-2xl" />TailwindCSS</li>
        <li className="flex items-center gap-2"><SiShadcnui className="text-[#000] dark:text-[#fff] lg:text-xl" />Shadcn</li>
        </ul>
      </div>
    </div>
  </section>
);

const liveDocsScreenshots = [
  {
    image: "/assets/livedocs/home.png"
  },
  {
    image: "/assets/livedocs/collaborative.png"
  },
  {
    image: "/assets/livedocs/shareModal.png"
  },
  {
    image: "/assets/livedocs/notification.png"
  },
  {
    image: "/assets/livedocs/deleteModal.png"
  },
  
];

const LandingPage = () => (
  <section>
    <div>
      <div className=" rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={landingPageScreenshots}
          direction="left"
          speed="slow"
        />
      </div>
    </div>
    <div className="mt-4 max-lg:text-[0.9rem]">
      <p className="max-lg:text-[0.9rem]">
        This scroll-based website opens with a fixed navigation bar that adapts as the user scrolls, offering smooth transitions and active link highlights tied to scroll position. The mobile view features a toggleable menu with background imagery and icon animations for an engaging touch. Throughout the site, content is dynamically pulled from a centralized configuration file, making the layout modular and easy to maintain. Interactive buttons with glowing gradient effects enhance the UI, while animated pricing transitions are powered by &apos;react-countup&apos;, allowing seamless toggling between monthly and yearly plans. Elements across the site respond with smooth hover and scroll-based transitions using Tailwind utilities and &apos;react-scroll&apos;. Collapsible components like FAQs use controlled states and animated reveals using &apos;react-slidedown&apos;. Built with React, TailwindCSS, and lightweight animation libraries, this website delivers a sleek, interactive journey optimized for both desktop and mobile users.
      </p>
      <div className="mt-4">
        <p className="mt-2 font-medium">Technologies</p>
        <ul className="flex flex-col gap-2 p-2 dark:bg-neutral-900">
        <li className="flex items-center gap-2"><SiReact className="text-[#61DAFB] lg:text-2xl" />React</li>
        <li className="flex items-center gap-2"><SiJavascript className="text-[#F7DF1E] lg:text-2xl" />JavaScript</li>
        <li className="flex items-center gap-2"><SiTailwindcss className="text-[#06B6D4] lg:text-2xl" />TailwindCSS</li>
        </ul>
      </div>
    </div>
  </section>
);

const landingPageScreenshots = [
  {
    image: "/assets/landing-page/home.png"
  },
  {
    image: "/assets/landing-page/features.png"
  },
  {
    image: "/assets/landing-page/monthly.png"
  },
  {
    image: "/assets/landing-page/annual.png"
  },
  {
    image: "/assets/landing-page/pricing.png"
  },
  {
    image: "/assets/landing-page/faq.png"
  },
  {
    image: "/assets/landing-page/testimonials.png"
  },
  {
    image: "/assets/landing-page/downloads.png"
  },
];

const AnimatedWebsite = () => (
  <section>
    <div>
      <div className=" rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={AnimatedWebsiteScreenshots}
          direction="left"
          speed="slow"
        />
      </div>
    </div>
    <div className="mt-4 max-lg:text-[0.9rem]">
      <p className="max-lg:text-[0.9rem]">
        This 3D animated website starts with a loading page that appears while the elements are being loaded. Once the content is ready, the homepage displays a background video, which plays the next video when hovered over at the center. Below the video, an animated image section creates the illusion of entering a new world. The site also features a section with bento card-styled features, incorporating tilt effects, followed by a story section with another animated image. A floating navigation bar with an audio feature appears when scrolling up, enhancing the interactive experience. Finally, the contact section and footer complete the layout. Built with React.js, GSAP (with ScrollTrigger for scroll-triggered animations), and TailwindCSS, this website combines interactivity, immersive design, and dynamic user engagement.
      </p>
      <div className="mt-4">
        <p className="mt-2 font-medium">Technologies</p>
        <ul className="flex flex-col gap-2 p-2 dark:bg-neutral-900">
        <li className="flex items-center gap-2"><SiReact className="text-[#61DAFB] lg:text-2xl" />React</li>
        <li className="flex items-center gap-2"><GsapLogo />GSAP</li>
        <li className="flex items-center gap-2"><SiJavascript className="text-[#F7DF1E] lg:text-2xl" />JavaScript</li>
        <li className="flex items-center gap-2"><SiTailwindcss className="text-[#06B6D4] lg:text-2xl" />TailwindCSS</li>
        </ul>
      </div>
    </div>
  </section>
);

const AnimatedWebsiteScreenshots = [
  {
    image: "/assets/animated-website/home-1.png"
  },
  {
    image: "/assets/animated-website/home-2.png"
  },
  {
    image: "/assets/animated-website/home-3.png"
  },
  {
    image: "/assets/animated-website/home-4.png"
  },
  {
    image: "/assets/animated-website/about-1.png"
  },
  {
    image: "/assets/animated-website/about-2.png"
  },
  {
    image: "/assets/animated-website/features-1.png"
  },
  {
    image: "/assets/animated-website/features-2.png"
  },
  {
    image: "/assets/animated-website/story.png"
  },
  {
    image: "/assets/animated-website/contact.png"
  },
];

const Vanlife = () => (
  <section>
    <div>
      <div className=" rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={VanlifeScreenshots}
          direction="left"
          speed="slow"
        />
      </div>
    </div>
    <div className="mt-4 max-lg:text-[0.9rem]">
      <p className="max-lg:text-[0.9rem]">
        A full-stack van rental platform built with React.js, React Router, and Firebase. The application allows users to browse a catalog of vans, apply filters, and view detailed information about each van. Users can simulate the rental process, with transaction and income records updated accordingly (no actual payment processing is implemented). Hosts can access a secure dashboard to manage their van listings, including adding, editing, deleting vans, uploading images, and tracking rental activity. Firebase Firestore is used for structured data management, while Firebase Storage handles media uploads. The project demonstrates dynamic routing, protected layouts, conditional rendering, and responsive UI updates.
      </p>
      <div className="mt-4">
        <p className="mt-2 font-medium">Technologies</p>
        <ul className="flex flex-col gap-2 p-2 dark:bg-neutral-900">
        <li className="flex items-center gap-2"><SiReact className="text-[#61DAFB] lg:text-2xl" />React</li>
        <li className="flex items-center gap-2"><SiJavascript className="text-[#F7DF1E] lg:text-2xl" />JavaScript</li>
        <li className="flex items-center gap-2"><SiReactrouter className="text-[#CA4245] lg:text-2xl" />React Router</li>
        <li className="flex items-center gap-2"><SiFirebase className="text-[#FFCA28] lg:text-2xl"/>Firebase</li>
        <li className="flex items-center gap-2"><SiCss3 className="text-[#264DE4] lg:text-2xl" />CSS</li>
        </ul>
      </div>
    </div>
  </section>
);

const VanlifeScreenshots = [
  {
    image: "/assets/vanlife/sign-in.png"
  },
  {
    image: "/assets/vanlife/home.png"
  },
  {
    image: "/assets/vanlife/vans-1.png"
  },
  {
    image: "/assets/vanlife/vans-2.png"
  },
  {
    image: "/assets/vanlife/rent-van.png"
  },
  {
    image: "/assets/vanlife/van-review.png"
  },
  {
    image: "/assets/vanlife/host-dashboard.png"
  },
  {
    image: "/assets/vanlife/host-income-1.png"
  },
  {
    image: "/assets/vanlife/host-income-2.png"
  },
  {
    image: "/assets/vanlife/host-vans-1.png"
  },
  {
    image: "/assets/vanlife/host-vans-2.png"
  },
  {
    image: "/assets/vanlife/host-vans-3.png"
  },
  {
    image: "/assets/vanlife/host-vans-4.png"
  },
  {
    image: "/assets/vanlife/host-vans-edit.png"
  },
  {
    image: "/assets/vanlife/cart.png"
  },
];

const Tenzies = () => (
  <section>
    <div>
      <div className=" rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={TenziesScreenshots}
          direction="left"
          speed="slow"
        />
      </div>
    </div>
    <div className="mt-4 max-lg:text-[0.9rem]">
      <p className="max-lg:text-[0.9rem]">
        This is a React-based dice game where the player rolls until all dice show the same value. Players can click individual dice to &apos;hold&apos; their values between rolls, introducing a strategic element to the game. Each die is dynamically generated with a random value, a hold state, and a unique ID using nanoid(). A timer tracks the duration of each game, and the app displays the number of rolls, the time taken, and the best completion time so far. Once the player wins, confetti is triggered as a celebratory animation. Dice are visually rendered with dots representing their values, and only non-held dice are re-rolled, creating an interactive and engaging user experience.
      </p>
      <div className="mt-4">
        <p className="mt-2 font-medium">Technologies</p>
        <ul className="flex flex-col gap-2 p-2 dark:bg-neutral-900">
        <li className="flex items-center gap-2"><SiReact className="text-[#61DAFB] lg:text-2xl" />React</li>
        <li className="flex items-center gap-2"><SiJavascript className="text-[#F7DF1E] lg:text-2xl" />JavaScript</li>
        <li className="flex items-center gap-2"><SiCss3 className="text-[#264DE4] lg:text-2xl" />CSS</li>
        </ul>
      </div>
    </div>
  </section>
);

const TenziesScreenshots = [
  {
    image: "/assets/tenzies/start-game.png"
  },
  {
    image: "/assets/tenzies/game.png"
  },
  {
    image: "/assets/tenzies/end-game.png"
  },
];

const data = [
  {
    title: "Dev Overflow",
    src: "/assets/devflow-dark.png",
    content: <DevOverflowContent />,
    deployedLink: "https://nextjs-devflow-nu.vercel.app/",
    technologies: (
      <div className="flex items-center gap-1 lg:gap-2">
        <SiNextdotjs className="text-[#000] dark:text-[#fff] lg:text-2xl" />
        <Image src="/assets/next-auth.png" alt="next-auth" height={25} width={25} className="rounded-full max-lg:h-[20px] max-lg:w-[20px]" />
        <SiReact className="text-[#61DAFB] lg:text-2xl" />
        <SiTypescript className="text-[#3178C6] lg:text-2xl" />
        <SiMongodb className="text-green-400 lg:text-2xl" />
        <SiTailwindcss className="text-[#06B6D4] lg:text-2xl" />
        <SiShadcnui className="text-[#000] dark:text-[#fff] lg:text-xl" />
        <SiZod className="text-[#06B6D4] lg:text-2xl" />
        <SiOpenai className="lg:text-2xl"/>
      </div>
    )
  },
  {
    title: "LiveDocs Editor",
    src: "/assets/live-docs.png",
    content: <LiveDocsContent />,
    deployedLink: "https://project-live-docs.vercel.app/",
    technologies: (
      <div className="flex items-center gap-1 lg:gap-2">
        <SiNextdotjs className="text-[#000] dark:text-[#fff] lg:text-2xl" />
        <SiClerk className="text-[#000] dark:text-[#fff] lg:text-2xl" />
        <SiReact className="text-[#61DAFB] lg:text-2xl" />
        <SiJavascript className="text-[#F7DF1E] lg:text-2xl" />
        <Image src="/assets/logo-live-docs.png" alt="liveblocks" height={25} width={25} className="rounded-full max-lg:h-[20px] max-lg:w-[20px]" />
        <SiShadcnui className="text-[#000] dark:text-[#fff] lg:text-xl" />
        <SiTailwindcss className="text-[#06B6D4] lg:text-2xl" />
      </div>
    )
  },
  {
    title: "Landing page",
    src: "/assets/landing-page.png",
    content: <LandingPage />,
    deployedLink: "https://project-landing-page-one.vercel.app/",
    technologies: (
      <div className="flex items-center gap-1 lg:gap-2">
        <SiReact className="text-[#61DAFB] lg:text-2xl" />
        <SiJavascript className="text-[#F7DF1E] lg:text-2xl" />
        <SiTailwindcss className="text-[#06B6D4] lg:text-2xl" />
      </div>
    )
  },

  {
    title: "3D Animated Website",
    src: "/assets/3d-animated-website.png",
    content: <AnimatedWebsite />,
    deployedLink: "https://project-3d-animated-website.vercel.app/",
    technologies: (
      <div className="flex items-center gap-1 lg:gap-2">
        <SiReact className="text-[#61DAFB] lg:text-2xl" />
        <SiJavascript className="text-[#F7DF1E] lg:text-2xl" />
        <GsapLogo />
        <SiTailwindcss className="text-[#06B6D4] lg:text-2xl" />
      </div>
    )
  },
  {
    title: "Vanlife",
    src: "/assets/vanlife.png",
    content: <Vanlife />,
    deployedLink: "https://66bc95639028ae7382537252--famous-fenglisu-54cca7.netlify.app/",
    technologies: (
      <div className="flex items-center gap-1 lg:gap-2">
        <SiReact className="text-[#61DAFB] lg:text-2xl" />
        <SiJavascript className="text-[#F7DF1E] lg:text-2xl" />
        <SiReactrouter className="text-[#CA4245] lg:text-2xl" />
        <SiFirebase className="text-[#FFCA28] lg:text-2xl"/>
        <SiCss3 className="text-[#264DE4] lg:text-2xl" />
      </div>
    )
  },
  {
    title: "Tenzies",
    src: "/assets/tenzies.png",
    content: <Tenzies />,
    deployedLink: "https://scrimba-krishna-v-react-game-tenzies.netlify.app/",
    technologies: (
      <div className="flex items-center gap-1 lg:gap-2">
        <SiReact className="text-[#61DAFB] lg:text-2xl" />
        <SiJavascript className="text-[#F7DF1E] lg:text-2xl" />
        <SiCss3 className="text-[#264DE4] lg:text-2xl" />
      </div>
    )
  },
];
