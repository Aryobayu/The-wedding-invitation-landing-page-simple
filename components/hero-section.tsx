'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

interface HeroSectionProps {
  onOpenInvitation: () => void;
}

export function HeroSection({ onOpenInvitation }: HeroSectionProps) {
  const searchParams = useSearchParams();
  const [guestName, setGuestName] = useState('Tamu Undangan');
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const to = searchParams.get('to');
    if (to) {
      setGuestName(to.replace(/_/g, ' '));
    }
  }, [searchParams]);

  const handleButtonClick = () => {
    // Don't set overflow to auto here, let the layout handle it
    setIsExiting(true);
    setTimeout(onOpenInvitation, 1000);
  };

  useEffect(() => {
    // The parent layout component now controls the body overflow.
    // This effect is intentionally left empty to avoid side effects.
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center text-white transition-all duration-1000 hero-background ${
        isExiting ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
      }`}
    >
      {/* Decorative Ornaments */}
      <Image
        src="/ornaments/Ornamenst dominan white/arrangement-line-art-white-gold-01.png"
        alt="Ornamen Kiri Atas"
        width={300}
        height={300}
        className="absolute top-0 left-0 w-48 md:w-64 opacity-80 animate-fade-in-down"
      />
      <Image
        src="/ornaments/Ornamenst dominan white/arrangement-line-art-white-gold-01.png"
        alt="Ornamen Kanan Bawah"
        width={300}
        height={300}
        className="absolute bottom-0 right-0 w-48 md:w-64 opacity-80 transform rotate-180 animate-fade-in-up"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center space-y-8 max-w-2xl animate-fade-in-down">
        <div className="space-y-4">
          <p className="font-sans text-lg md:text-xl text-neutral-200 tracking-wider">
            The Wedding of
          </p>
          <h1 className="font-serif text-6xl md:text-8xl text-white font-medium tracking-tight drop-shadow-lg">
            Faril & Santi
          </h1>
          <p className="font-sans text-xl md:text-2xl text-neutral-100 mt-2">
            Senin, 27 Oktober 2025
          </p>
        </div>

        <div className="text-center animate-fade-in-up animation-delay-300">
          <p className="font-sans text-sm text-neutral-300 mb-2">Kepada Yth:</p>
          <p className="font-sans text-lg font-semibold text-white tracking-wide">
            {guestName}
          </p>
        </div>

        <Button
          size="lg"
          className="bg-transparent border-2 border-white text-white rounded-full font-sans px-8 py-6 text-base font-medium shadow-lg hover:bg-white hover:text-black transition-all duration-300 animate-fade-in-up animation-delay-500"
          onClick={handleButtonClick}
        >
          <Heart className="w-5 h-5 mr-3" />
          Buka Undangan
        </Button>
      </div>
    </div>
  );
}