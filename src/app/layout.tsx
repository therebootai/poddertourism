import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Poddar Tourism",
  description: "Design & Developed by Reboot AI pvt. ltd.",
  openGraph: {
    title: "Poddar Tourism",
    description: "Design & Developed by Reboot AI pvt. ltd.",
    images: [
      {
        url: "https://poddartourism.com/favicon.ico",
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
    <html lang="en" className="scroll-smooth">
      <body className={`${josefinSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
