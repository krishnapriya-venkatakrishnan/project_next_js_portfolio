import type { Metadata, Viewport } from "next";
import { Figtree } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.krishnapriya.dev"),
  title:
    "Krishnapriya Venkatakrishnan · AI & voice systems, built for reliability",
  description:
    "Full-stack engineer building AI and voice systems on a fintech-grade reliability background. Deterministic code, not the model, makes the decisions that matter.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Krishnapriya Venkatakrishnan",
    description:
      "Full-stack engineer building AI and voice systems with fintech-grade reliability.",
    url: "https://www.krishnapriya.dev/",
    siteName: "Krishnapriya Venkatakrishnan",
    // [FILL IN: regenerate the OG image for the new site; current file is from the old design.]
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Krishnapriya Venkatakrishnan",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const gaId = process.env.GOOGLE_MEASUREMENT_ID;

  return (
    <html lang="en" className={figtree.variable}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
      </body>
    </html>
  );
}
