import { site } from "@/content/site";

export default function SiteFooter() {
  return (
    <footer className="mx-auto max-w-3xl px-6 pb-16 pt-8">
      <p className="border-t border-line pt-8 text-xs text-ink-faint">
        &copy; {new Date().getFullYear()} {site.name}.
      </p>
    </footer>
  );
}
