import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
});
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata: Metadata = {
  title: "Khaan Burger × Poké — Eat me if you Khaan",
  description:
    "Site vitrine premium de Khaan Burger × Poké : burgers gourmands, pokés frais et expérience food immersive à Bordeaux.",
  metadataBase: new URL("https://khaan.example"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${inter.variable} ${cormorant.variable} ${oswald.variable}`}>
      <body>{children}</body>
    </html>
  );
}
