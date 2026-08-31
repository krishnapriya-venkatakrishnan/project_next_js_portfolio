import { site } from "@/content/site";
import SectionKicker from "@/components/site/SectionKicker";

const isPlaceholder = (href: string) => href.trimStart().startsWith("[FILL IN");

export default function About() {
  return (
    <section
      id="about"
      className="reveal mx-auto max-w-3xl scroll-mt-16 px-6 py-24 sm:py-32"
    >
      <SectionKicker>About</SectionKicker>

      <div className="mt-8 flex max-w-prose flex-col gap-4 text-ink-muted">
        {site.about.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>

      <div id="contact" className="mt-14 scroll-mt-16 border-t border-line pt-10">
        <SectionKicker>Contact</SectionKicker>

        <p className="mt-6 text-sm text-ink-faint">{site.freelance}</p>

        <a
          href={`mailto:${site.contact.email}`}
          className="mt-4 inline-block break-all text-base font-light text-ink underline decoration-line underline-offset-8 transition-colors hover:decoration-accent sm:text-2xl md:text-3xl"
        >
          {site.contact.email}
        </a>

        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
          {site.contact.links.map((link) =>
            isPlaceholder(link.href) ? (
              <li key={link.label} className="text-sm text-ink-faint">
                {link.label}: {link.href}
              </li>
            ) : (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
                >
                  {link.label}&nbsp;&#8599;
                </a>
              </li>
            ),
          )}
        </ul>
      </div>
    </section>
  );
}
