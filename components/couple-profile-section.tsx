"use client";

import Image from "next/image";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

export function CoupleProfileSection() {
  return (
    <section className="py-20 px-4 bg-cream-100 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <AnimateOnScroll className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground font-bold">
            The Happy Couple
          </h2>
        </AnimateOnScroll>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Bride */}
          <AnimateOnScroll
            direction="right"
            className="flex flex-col items-center text-center space-y-4"
          >
            <div className="relative w-48 h-48 md:w-56 md:h-56">
              <Image
                src="/Mempelai-wanita-&-pria/foto-pengantin-1.jpeg"
                alt="Santi Rinawati"
                fill
                className="rounded-full object-cover border-4 border-stone-200 shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 opacity-80">
                <Image
                  src="/ornaments/Ornamenst dominan gold/flower-line-art-gold-lily-detail.png"
                  alt="Ornamen Bunga Emas"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div>
              <h3 className="font-serif text-3xl md:text-4xl text-foreground font-bold mt-4">
                Muhammad Faril
              </h3>
              <p className="font-sans text-muted-foreground mt-2 leading-relaxed">
                Putra dari
                <br />
                Bapak Ahmad Syuhada' & Ibu Nur Hidayah
              </p>
            </div>
          </AnimateOnScroll>

          {/* Ampersand */}
          <AnimateOnScroll
            delay={0.3}
            className="text-center font-serif text-6xl md:text-8xl text-primary font-bold my-4 md:my-0"
          >
            &
          </AnimateOnScroll>

          {/* Groom */}
          <AnimateOnScroll
            direction="left"
            className="flex flex-col items-center text-center space-y-4"
          >
            <div className="relative w-48 h-48 md:w-56 md:h-56">
              <Image
                src="/Mempelai-wanita-&-pria/foto-pengantin-2.jpeg"
                alt="Muhammad Faril"
                fill
                className="rounded-full object-cover border-4 border-stone-200 shadow-lg"
              />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 opacity-80 transform scale-x-[-1]">
                <Image
                  src="/ornaments/Ornamenst dominan gold/flower-line-art-gold-lily-detail.png"
                  alt="Ornamen Bunga Emas"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div>
              <h3 className="font-serif text-3xl md:text-4xl text-foreground font-bold mt-4">
                Santi Rinawati
              </h3>
              <p className="font-sans text-muted-foreground mt-2 leading-relaxed">
                Putri dari
                <br />
                Bapak Alm. Satrio & Ibu Rohmatun
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
