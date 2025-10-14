'use client';

import { useState, useEffect } from 'react';

const CountdownUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center justify-center bg-black/10 border border-primary/20 rounded-lg p-4 md:p-6 w-20 h-20 md:w-28 md:h-28 shadow-lg backdrop-blur-sm">
    <span className="font-serif text-3xl md:text-5xl font-bold text-primary tracking-tighter">
      {value.toString().padStart(2, '0')}
    </span>
    <span className="font-sans text-xs md:text-sm text-foreground/80 uppercase tracking-widest">
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
    // Initialize timeLeft on the client to avoid hydration mismatch
    setTimeLeft(calculateTimeLeft());
    setIsClient(true);

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 px-4 bg-foreground/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-primary mb-8">
          Menuju Hari Bahagia
        </h2>
        <div className="flex items-center justify-center gap-3 md:gap-6">
          {isClient ? (
            <>
              <CountdownUnit value={timeLeft.days} label="Hari" />
              <CountdownUnit value={timeLeft.hours} label="Jam" />
              <CountdownUnit value={timeLeft.minutes} label="Menit" />
              <CountdownUnit value={timeLeft.seconds} label="Detik" />
            </>
          ) : (
            <>
              <CountdownUnit value={0} label="Hari" />
              <CountdownUnit value={0} label="Jam" />
              <CountdownUnit value={0} label="Menit" />
              <CountdownUnit value={0} label="Detik" />
            </>
          )}
        </div>
      </div>
    </section>
  );
}
