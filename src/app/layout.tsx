import type { Metadata } from "next";
import { Figtree, Playfair_Display, Bad_Script, Fjord_One } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
});


const badScript = Bad_Script({
  variable: "--font-bad-script",
  subsets: ["latin"],
  weight: ["400"],
});

const fjordOne = Fjord_One({
  variable: "--font-fjord-one",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Dionne Tweneboah - Portfolio",
  description: "Blending law, leadership, and mentorship to shape a just and purpose-driven world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${figtree.variable} ${playfairDisplay.variable} ${badScript.variable} ${fjordOne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
