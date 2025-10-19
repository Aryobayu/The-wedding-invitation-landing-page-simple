"use client";

import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

export function ClosingSection() {
  return (
    <section className="relative h-screen max-h-[900px] w-full bg-navy-900 text-center text-cream-100">
      {/* Background Image Container */}
      <div className="absolute inset-0 closing-background opacity-66" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/20 via-navy-900/80 to-navy-900" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-start h-full w-full p-8 pt-24 md:pt-32">
        <AnimateOnScroll className="w-full max-w-3xl mx-auto">
          <div className="flex flex-col items-center space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-serif text-gold-300">
                Terima Kasih
              </h2>
              <p className="text-xl md:text-2xl font-serif text-cream-100">
                Kami yang Berbahagia,
              </p>
              <h3 className="text-5xl md:text-7xl font-serif text-gold-300 font-bold pt-4">
                Faril & Santi
              </h3>
            </div>

            <div className="w-48 h-px mx-auto bg-gold-300/50" />

            <div className="text-cream-100/90 text-base md:text-lg space-y-4">
              <div>
                <p className="font-semibold">Kel. Besar Bapak Alm. Satrio</p>
                <p className="font-semibold">& Ibu Rohmatun</p>
              </div>
              <p className="font-serif text-2xl text-gold-300">&</p>
              <div>
                <p className="font-semibold">Kel. Besar Bapak Ahmad Syuhada'</p>
                <p className="font-semibold">& Ibu Nur Hidayah</p>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
