
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jf-sushi.vercel.app"),

  title: {
    default: "JF Sushi | Incredible Asian Food",
    template: "%s | JF Sushi",
  },

  description:
    "Discover JF Sushi, offering delicious sushi, poke bowls, and Asian-inspired food. Explore our products and food services for retail and wholesale partners.",

  keywords: [
    "JF Sushi",
    "JF Sushi official website",
    "JF Sushi products",
    "JF Sushi wholesale",
    "Asian food",
    "sushi",
    "poke bowls",
    "California rolls",
    "salmon nigiri",
    "tuna nigiri",
  ],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "JF Sushi | Incredible Asian Food",
    description:
      "Discover delicious sushi, poke bowls, and Asian-inspired food from JF Sushi.",
    url: "https://jf-sushi.vercel.app",
    siteName: "JF Sushi",
    type: "website",
    images: [
      {
        url: "/images/nigiri-hero.png",
        width: 1200,
        height: 630,
        alt: "JF Sushi food selection",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
