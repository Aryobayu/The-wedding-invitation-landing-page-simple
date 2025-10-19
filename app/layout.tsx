"use client";

import type React from "react";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css"; // Memastikan impor ini merujuk ke app/globals.css

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { AudioProvider, useAudio } from "@/context/audio-context";
import { MusicPlayer } from "@/components/music-player";
import { ScrollToTopButton } from "@/components/scroll-to-top-button";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const DynamicHeroSection = dynamic(
  () => import("@/components/hero-section").then((mod) => mod.HeroSection),
  { ssr: false }
);

function AppContent({ children }: { children: React.ReactNode }) {
  const [isOverlayOpen, setIsOverlayOpen] = useState(true);
  const { setIsPlaying } = useAudio();

  const handleOpenInvitation = () => {
    setIsOverlayOpen(false);
  };

  useEffect(() => {
    // Enable :active states on mobile devices
    document.body.addEventListener('touchstart', () => {}, { passive: true });
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (isOverlayOpen) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
    } else {
      html.style.overflow = "auto";
      body.style.overflow = "auto";
      setIsPlaying(true);
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 10);
    }

    return () => {
      html.style.overflow = "auto";
      body.style.overflow = "auto";
    };
  }, [isOverlayOpen, setIsPlaying]);

  return (
    <>
      {isOverlayOpen && (
        <DynamicHeroSection onOpenInvitation={handleOpenInvitation} />
      )}
      <main
        className={`transition-opacity duration-1000 ${
          isOverlayOpen ? "opacity-0" : "opacity-100"
        }`}
      >
        {children}
      </main>
      <MusicPlayer />
      <ScrollToTopButton />
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body>
        <AudioProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <AppContent>{children}</AppContent>
            <Toaster richColors duration={3000} />
          </ThemeProvider>
        </AudioProvider>
      </body>
    </html>
  );
}
