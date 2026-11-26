
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jf-sushi.vercel.app"),

  title: {
    default: "JF Sushi | Asian Food & Sushi Supplier",
    template: "%s | JF Sushi",
  },

  description:
    "JF Sushi is an established Asian food supplier offering sushi, salmon nigiri, tuna nigiri, California rolls, poke bowls, and Asian-inspired food products for grocery retailers and wholesale partners.",

  applicationName: "JF Sushi",

  authors: [
    {
      name: "JF Sushi",
    },
  ],

  creator: "JF Sushi",
  publisher: "JF Sushi",

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "JF Sushi | Incredible Asian Food",
    description:
      "Discover JF Sushi, an Asian-inspired food supplier serving grocery retailers and wholesale business partners.",
    siteName: "JF Sushi",
    locale: "en_US",
    type: "website",

    images: [
      {
        url: "/images/nigiri-hero.png",
        alt: "JF Sushi salmon nigiri, tuna nigiri, and California rolls",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "JF Sushi | Incredible Asian Food",
    description:
      "Explore delicious sushi and Asian-inspired food products from JF Sushi.",
    images: ["/images/nigiri-hero.png"],
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
