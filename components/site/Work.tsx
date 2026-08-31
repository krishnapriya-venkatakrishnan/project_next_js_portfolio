import { site } from "@/content/site";
import SectionKicker from "@/components/site/SectionKicker";
import ThesisDiagram from "@/components/site/ThesisDiagram";
import CaseStudy from "@/components/site/CaseStudy";

export default function Work() {
  return (
    <section
      id="work"
      className="reveal mx-auto max-w-3xl scroll-mt-16 px-6 py-24 sm:py-32"
    >
      <SectionKicker>Selected work</SectionKicker>
      <p className="mt-4 max-w-prose text-lg font-light text-ink-muted">
        {site.work.intro}
      </p>

      <ThesisDiagram />

      <div className="mt-16 flex flex-col gap-20">
        {site.caseStudies.map((study) => (
          <CaseStudy key={study.slug} study={study} />
        ))}
      </div>
    </section>
  );
}
