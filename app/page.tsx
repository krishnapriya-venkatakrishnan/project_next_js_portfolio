import Hero from "@/components/site/Hero";
import Work from "@/components/site/Work";
import MoreWork from "@/components/site/MoreWork";
import About from "@/components/site/About";
import SiteFooter from "@/components/site/SiteFooter";

export default function Page() {
  return (
    <>
      <main id="main">
        <Hero />
        <Work />
        <MoreWork />
        <About />
      </main>
      <SiteFooter />
    </>
  );
}
