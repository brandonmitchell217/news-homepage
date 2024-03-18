import React from "react";
import { Inter } from "next/font/google";
import "../styles/main.css";
import Nav from "../components/ui/Nav";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "W. - Tech News",
  description: "Landing page for a tech news site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} scroll-smooth`}>
      <body className="bg-offWhite">
        <Nav />
        {children}
      </body>
    </html>
  );
}
