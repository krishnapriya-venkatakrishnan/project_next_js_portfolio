import { site } from "@/content/site";

export default function ThesisDiagram() {
  return (
    <figure className="mx-auto my-16 w-full max-w-[720px]">
      {/* eslint-disable-next-line @next/next/no-img-element -- static SVG diagram, scales via its own viewBox */}
      <img
        src={site.work.diagram.src}
        alt={site.work.diagram.alt}
        width={960}
        height={300}
        loading="lazy"
        decoding="async"
        className="h-auto w-full"
      />
    </figure>
  );
}
