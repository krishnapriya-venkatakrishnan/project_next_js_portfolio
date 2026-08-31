import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  /** aspect-ratio for the pending-state placeholder box only. */
  ratio?: string;
  /** responsive sizes hint for next/image. */
  sizes?: string;
  className?: string;
};

/**
 * Renders a product screenshot, or a clearly-marked placeholder box while the
 * image is still pending. Framed with a hairline only: no shadow, no mockup.
 */
export default function Screenshot({
  src,
  alt,
  width,
  height,
  ratio = "16 / 10",
  sizes = "(max-width: 768px) 100vw, 720px",
  className = "",
}: Props) {
  if (!src || !width || !height) {
    return (
      <div
        style={{ aspectRatio: ratio }}
        className={`flex w-full items-center justify-center rounded-md border border-dashed border-line px-6 text-center text-sm text-ink-faint ${className}`}
      >
        <span>
          <span className="font-medium">[FILL IN: light-mode screenshot]</span>{" "}
          {alt}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      className={`h-auto w-full rounded-md border border-line ${className}`}
    />
  );
}
