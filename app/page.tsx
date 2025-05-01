import { BentoGridThirdDemo } from "@/components/About";
import { ContactForm } from "@/components/ContactForm";
import { Experience } from "@/components/Experience";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import { AppleCardsCarouselDemo } from "@/components/Projects";

export default function Home() {
  return (
    <main className="dark:bg-black">
      <Navbar />
      <Intro />
      <AppleCardsCarouselDemo />
      <BentoGridThirdDemo />
      <Experience />
      <ContactForm />      
    </main>
  );
}
