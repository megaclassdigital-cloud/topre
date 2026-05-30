import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Solusi Box Pendingin Topre untuk Distribusi Frozen & Chilled",
  description:
    "Konsultasikan kebutuhan refrigerated vehicle, box pendingin, dan solusi distribusi produk frozen maupun chilled bersama sales Topre.",
  metadataBase: new URL("https://topre-refrigerated-vehicle.vercel.app"),
  openGraph: {
    title: "Solusi Box Pendingin Topre untuk Distribusi Frozen & Chilled",
    description:
      "Konsultasikan kebutuhan refrigerated vehicle, box pendingin, dan solusi distribusi produk frozen maupun chilled bersama sales Topre.",
    type: "website",
    locale: "id_ID",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
