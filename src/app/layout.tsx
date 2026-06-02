import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bheemalingappa | Data Scientist & AI Developer",
  description:
    "Professional portfolio of Bheemalingappa, an experienced Data Scientist, Machine Learning Engineer, and AI Developer based in Bengaluru, India. Transforming raw data into intelligent products using advanced ML, NLP pipelines, and analytical engineering.",
  keywords: [
    "Data Scientist Portfolio",
    "Machine Learning Engineer Portfolio",
    "AI Developer Portfolio",
    "NLP Practitioner",
    "Analytics Engineer Portfolio",
    "Bheemalingappa Data Science",
    "Python ML Developer Bengaluru",
  ],
  authors: [{ name: "Bheemalingappa" }],
  creator: "Bheemalingappa",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/Bheemalingappa",
    title: "Bheemalingappa | Data Scientist & Machine Learning Engineer",
    description:
      "Transforming raw data into intelligent business products. Explore case studies, interactive model simulations, and NLP analysis tool dashboards.",
    siteName: "Bheemalingappa Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bheemalingappa | Data Scientist & AI Developer",
    description:
      "Transforming raw data into intelligent products using advanced ML, NLP, and Analytics.",
    creator: "@Bheemalingappa",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground transition-colors duration-500`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
