'use client';

import Image from "next/image";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

export function OpeningVerseSection() {
  return (
    <section
      id="opening-verse"
      className="relative py-28 px-4 bg-cream-100 overflow-hidden"
    >
      {/* Background Image & Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/ornaments/Ornamenst dominan blue/arrangement-watercolor-blue-gold.png"
          alt="Ornamen Latar Belakang Bunga"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cream-100 via-cream-100/80 to-cream-100/20" />
      </div>

      {/* Content */}
      <AnimateOnScroll className="max-w-3xl mx-auto relative z-10">
        <div className="text-center space-y-6">
          <div className="font-serif text-3xl md:text-4xl text-primary tracking-wider drop-shadow-lg">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
          </div>
          <p className="font-sans text-lg text-foreground leading-relaxed">
            Assalamu'alaikum Warahmatullahi Wabarakatuh
          </p>
          <p className="font-sans text-foreground/80 mt-4 leading-relaxed max-w-2xl mx-auto">
            Maha Suci Allah yang telah menciptakan makhluk-Nya
            berpasang-pasangan. Ya Allah semoga ridho-Mu tercurah mengiringi
            pernikahan kami.
          </p>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
