import { BentoGridThirdDemo } from "@/components/About";
import Contact from "@/components/Contact";
import { ContactForm } from "@/components/ContactForm";
import { Experience, TimelineDemo } from "@/components/Experience";
import Footer from "@/components/Footer";
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
      <Footer />
    </main>
  );
}
