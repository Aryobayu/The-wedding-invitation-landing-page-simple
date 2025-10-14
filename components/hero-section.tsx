'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
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
      setGuestName(to);
    }
  }, [searchParams]);

  const handleButtonClick = () => {
    setIsExiting(true);
    setTimeout(onOpenInvitation, 500);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-background px-4 text-center transition-opacity duration-500 ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="text-center space-y-8 max-w-2xl animate-fade-in-down">
        <div className="space-y-2">
          <p className="font-sans text-lg text-foreground/80 font-medium tracking-wide">
            The Wedding of
          </p>
          <h1 className="font-serif text-6xl md:text-8xl text-primary font-bold tracking-tight">
            Faril & Santi
          </h1>
          <p className="font-sans text-xl md:text-2xl text-foreground font-medium mt-4">
            Senin, 27 Oktober 2025
          </p>
        </div>

        <div className="bg-black/20 border border-primary/30 rounded-lg p-6 shadow-sm">
          <p className="font-sans text-sm text-foreground/80 mb-2">Kepada Yth:</p>
          <p className="font-sans text-lg font-medium text-foreground">
            {guestName}
          </p>
        </div>

        <Button
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 font-sans px-8 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          onClick={handleButtonClick}
        >
          <Heart className="w-5 h-5 mr-2" />
          Buka Undangan
        </Button>
      </div>
    </div>
  );
}
