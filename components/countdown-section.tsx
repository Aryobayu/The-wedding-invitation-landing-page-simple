'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll';

const CountdownUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center justify-center bg-cream-100/50 border border-stone-200 rounded-xl p-4 md:p-6 w-24 h-24 md:w-32 md:h-32 shadow-lg backdrop-blur-sm">
    <span className="font-serif text-4xl md:text-6xl font-bold text-primary tracking-tighter">
      {value.toString().padStart(2, '0')}
    </span>
    <span className="font-sans text-xs md:text-sm text-muted-foreground uppercase tracking-widest mt-1">
      {label}
    </span>
  </div>
);

export function CountdownSection() {
  const [isClient, setIsClient] = useState(false);

  const calculateTimeLeft = () => {
    const eventDate = new Date('2025-10-27T16:30:00').getTime();
    const now = new Date().getTime();
    const difference = eventDate - now;

    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    setIsClient(true);

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-20 px-4 bg-dusty-blue-100 overflow-hidden">
       {/* Ornaments */}
      <div className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 opacity-30">
        <Image 
          src="/ornaments/Ornamenst dominan gold/arrangement-line-art-gold-corner.png"
          alt="Ornamen Sudut Kiri Atas"
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-30 transform rotate-180">
        <Image 
          src="/ornaments/Ornamenst dominan gold/arrangement-line-art-gold-corner.png"
          alt="Ornamen Sudut Kanan Bawah"
          fill
          className="object-contain"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <AnimateOnScroll>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-10">
            Menuju Hari Bahagia
          </h2>
        </AnimateOnScroll>
        <AnimateOnScroll delay={0.2} className="flex items-center justify-center gap-3 md:gap-6">
          {isClient ? (
            <>
              <CountdownUnit value={timeLeft.days} label="Hari" />
              <CountdownUnit value={timeLeft.hours} label="Jam" />
              <CountdownUnit value={timeLeft.minutes} label="Menit" />
              <CountdownUnit value={timeLeft.seconds} label="Detik" />
            </>
          ) : (
            // Skeleton/Placeholder view before client-side rendering
            <>
              <CountdownUnit value={0} label="Hari" />
              <CountdownUnit value={0} label="Jam" />
              <CountdownUnit value={0} label="Menit" />
              <CountdownUnit value={0} label="Detik" />
            </>
          )}
        </AnimateOnScroll>
      </div>
    </section>
  );
}
