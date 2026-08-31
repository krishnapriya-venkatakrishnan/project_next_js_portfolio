import type { CaseStudy as CaseStudyType } from "@/content/site";
import Screenshot from "@/components/site/Screenshot";

const isPlaceholder = (href: string) => href.trimStart().startsWith("[FILL IN");

function Block({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ink-faint">
        {label}
      </h4>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function PointList({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex max-w-prose list-disc flex-col gap-3 pl-5 text-ink-muted marker:text-ink-faint">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function CaseStudy({ study }: { study: CaseStudyType }) {
  const links = study.links.filter((l) => !isPlaceholder(l.href));
  const pendingLinks = study.links.filter((l) => isPlaceholder(l.href));

  return (
    <article className="border-t border-line pt-10">
      <h3 className="text-xl font-normal sm:text-2xl">{study.name}</h3>
      <p className="mt-3 max-w-prose font-light text-ink-muted">{study.tagline}</p>

      <div className="mt-8 flex flex-col gap-7">
        <Block label="Problem">
          <p className="max-w-prose text-ink-muted">{study.problem}</p>
        </Block>
        <Block label="What I did">
          <PointList items={study.contribution} />
        </Block>
        <Block label="Outcome">
          <PointList items={study.outcome} />
        </Block>
      </div>

      <Screenshot
        src={study.screenshot.src}
        alt={study.screenshot.alt}
        width={study.screenshot.width}
        height={study.screenshot.height}
        sizes="(max-width: 768px) 100vw, 672px"
        className="mt-8"
      />

      {links.length > 0 && (
        <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
          {links.map((link) => (
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
          ))}
        </ul>
      )}

      {pendingLinks.map((link) => (
        <p key={link.label} className="mt-3 text-sm text-ink-faint">
          {link.label}: {link.href}
        </p>
      ))}

      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tech stack">
        {study.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-line px-3 py-1 text-xs text-ink-faint"
          >
            {tech}
          </li>
        ))}
      </ul>
    </article>
  );
}
