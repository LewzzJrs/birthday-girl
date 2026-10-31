import { Cormorant_Infant, Quicksand } from "next/font/google";
import { content } from "@/data/content";
import "./globals.css";

const cormorant = Cormorant_Infant({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-quicksand",
  display: "swap",
});

export const metadata = {
  title: `Untuk ${content.name} 🤍`,
  description: `Sebuah kado kecil untuk ${content.name}. Buka pelan-pelan ya.`,
  openGraph: {
    title: `Untuk ${content.name} 🤍`,
    description: `Sebuah kado kecil untuk ${content.name}. Buka pelan-pelan ya.`,
    type: "website",
    locale: "id_ID",
  },
  robots: { index: false, follow: false },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fff8f1",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${cormorant.variable} ${quicksand.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
