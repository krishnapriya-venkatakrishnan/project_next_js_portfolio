import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/Toaster";
import { GoogleAnalytics } from "@next/third-parties/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: "Krishnapriya Venkatakrishnan | Front-End Web Developer",
  description: "Stockholm- based web developer building interactive and responsive websites using React, Next.js, and modern tools",
  openGraph: {
    title: "Krishnapriya Venkatakrishnan | Front-End Web Developer",
    description: "Interactive and responsive websites built with React, Next.js, and modern tools.",
    url: "https://www.krishnapriya.dev/", // domain name
    siteName: "Krishnapriya Venkatakrishnan's Portfolio",
    images: [
      {
        url: "/assets/og-image.png", //image
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
        className={`${spaceGrotesk.className} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          {children}
          <Toaster />
        </ThemeProvider>
        <GoogleAnalytics gaId={process.env.GOOGLE_MEASUREMENT_ID!} />
      </body>
    </html>
  );
}
