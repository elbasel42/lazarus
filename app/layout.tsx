import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lazarus",
  description: "Build your future with Lazarus",
};

interface RootLayoutProps {
  children: Readonly<ReactNode>;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" className={htmlClassName}>
      <body className={bodyClassName}>{children}</body>
    </html>
  );
};

export default RootLayout;

// ! styles
const htmlClassName = "m-0 p-0";
const bodyClassName = `${geistSans.variable} ${geistMono.variable} antialiased p-4 m-0 bg-black text-white min-h-screen overflow-hidden`;
