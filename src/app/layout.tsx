import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Inter } from "next/font/google";
import "./globals.css";
import * as React from "react";


const inter = Inter({ subsets: ["latin"] });
const title = "Sutan Tadese";
const description =
  "21 y.o. builder, AI researcher, and founder of Phases — a decentralized FemTech app. Passionate about machine learning, Web3, and tech for justice.";

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description: description,
  keywords: [
    "sutan",
    "sutan tadese",
    "phases",
    "decentralized ai",
    "ai researcher",
    "web3 developer",
    "femtech",
    "machine learning",
    "computer science",
    "equity tech",
    "stanford",
  ],
  authors: [{ name: "Sutan Tadese" }],
  creator: "Sutan Tadese",
  publisher: "Sutan Tadese",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: title,
    description: description,
    siteName: title,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Sutan Tadese",
        type: "image/png",
      },
    ],
    url: "https://sutanmuleta.github.io",
  },
  twitter: {
    title: title,
    description: description,
    images: [
      {
        url: "/twitter-image.png",
        width: 1200,
        height: 630,
        alt: "Sutan Tadese",
        type: "image/png",
      },
    ],
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
  metadataBase: new URL("https://sutanmuleta.github.io"),
  alternates: {
    canonical: "https://sutanmuleta.github.io",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
