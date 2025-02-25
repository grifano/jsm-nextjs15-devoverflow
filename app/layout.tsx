import type { Metadata } from "next";
import {
  Inter,
  Space_Grotesk,
} from "next/font/google";
import React from "react";

import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/navigation/navbar";

const interSans = Inter({
  variable: "--font-Inter-sans",
  subsets: ["latin"],
});
const spaceGroteskLogo = Space_Grotesk({
  variable: "--font-logo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev Overflow",
  description:
    "A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.",
  icons: {
    icon: "/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${interSans.className} ${spaceGroteskLogo.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
