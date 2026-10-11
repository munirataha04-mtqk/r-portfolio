import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const serif = Newsreader({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "Raj Garcia | Photographer",
  description:
    "Raj Garcia is a photographer based in Karachi, capturing people, places and stories through natural light.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}