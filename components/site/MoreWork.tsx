import { site, type MoreWorkItem } from "@/content/site";
import SectionKicker from "@/components/site/SectionKicker";
import Screenshot from "@/components/site/Screenshot";

const isPlaceholder = (href: string) => href.trimStart().startsWith("[FILL IN");

function Links({
  links,
}: {
  links: readonly { readonly label: string; readonly href: string }[];
}) {
  return (
    <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
      {links.map((link) =>
        isPlaceholder(link.href) ? (
          <li key={link.label} className="text-xs text-ink-faint">
            {link.label}: {link.href}
          </li>
        ) : (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-medium text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
            >
              {link.label}&nbsp;&#8599;
            </a>
          </li>
        ),
      )}
    </ul>
  );
}

export default function MoreWork() {
  return (
    <section
      id="more-work"
      className="reveal mx-auto max-w-3xl scroll-mt-16 px-6 py-16 sm:py-20"
    >
      <SectionKicker>More work</SectionKicker>
      <p className="mt-3 max-w-prose text-sm text-ink-faint">
        Earlier projects, in brief.
      </p>

      <ul className="mt-10 flex flex-col gap-5">
        {site.moreWork.map((project: MoreWorkItem) => (
          <li
            key={project.name}
            className="flex flex-col gap-5 rounded-lg border border-line bg-canvas p-5 sm:flex-row sm:gap-6 sm:p-6"
          >
            {project.thumb && (
              <div className="sm:w-56 sm:shrink-0">
                <Screenshot
                  src={project.thumb.src}
                  alt={project.thumb.alt}
                  width={project.thumb.width}
                  height={project.thumb.height}
                  sizes="(max-width: 640px) 100vw, 224px"
                />
              </div>
            )}

            <div className="min-w-0">
              <h3 className="text-base font-medium text-ink">{project.name}</h3>
              <p className="mt-2 max-w-prose text-sm text-ink-muted">
                {project.blurb}
              </p>

              <ul
                className="mt-3 flex flex-wrap gap-x-3 gap-y-1"
                aria-label="Tech stack"
              >
                {project.tags.map((tag) => (
                  <li key={tag} className="text-xs text-ink-faint">
                    {tag}
                  </li>
                ))}
              </ul>

              <Links links={project.links} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
