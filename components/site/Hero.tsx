import { site } from "@/content/site";

export default function Hero() {
  return (
    <section className="reveal mx-auto flex min-h-[100svh] max-w-3xl flex-col justify-center px-6 py-24">
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-ink-muted">
        {site.name}
      </p>

      <h1 className="mt-6 text-pretty text-[1.9rem] font-light leading-[1.22] tracking-tight sm:text-4xl sm:leading-[1.18] md:text-[2.75rem]">
        {site.positioning}
      </h1>

      <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
        <a
          href={site.hero.primaryCta.href}
          className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-on-ink transition-opacity hover:opacity-90"
        >
          {site.hero.primaryCta.label}
        </a>
        <a
          href={site.hero.secondaryCta.href}
          className="text-sm font-medium text-ink-muted underline decoration-line underline-offset-4 transition-colors hover:text-ink"
        >
          {site.hero.secondaryCta.label}
        </a>
      </div>

      <p className="mt-14 border-t border-line pt-6 text-sm text-ink-faint">
        {site.credibility}
      </p>
    </section>
  );
}
