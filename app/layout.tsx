import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/Toaster";
import { ProjectProvider } from "@/context/ProjectContext";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figTree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-figtree',
});

export const metadata: Metadata = {
  title: "Krishnapriya Venkatakrishnan | Full-stack Developer",
  description: "A developer resume site by Krishnapriya Venkatakrishnan, built with Next.js. Showcases responsive, interactive projects crafted with Next.js, React, MongoDB, and TailwindCSS.",
  openGraph: {
    title: "Krishnapriya Venkatakrishnan | Full-stack Developer",
    description: "A developer resume site by Krishnapriya Venkatakrishnan, built with Next.js. Showcases responsive, interactive projects crafted with Next.js, React, MongoDB, and TailwindCSS.",
    url: "https://www.krishnapriya.dev/",
    siteName: "Krishnapriya Venkatakrishnan's Portfolio",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Screenshot of Krishnapriya Venkatakrishnan's portfolio website",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${figTree.className} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <ProjectProvider>
              {children}
            </ProjectProvider>
          <Toaster />
        </ThemeProvider>
        <GoogleAnalytics gaId={process.env.GOOGLE_MEASUREMENT_ID!} />
      </body>
    </html>
  );
}
