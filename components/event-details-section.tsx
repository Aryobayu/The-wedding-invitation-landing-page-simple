'use client';

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Calendar } from "lucide-react";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

export function EventDetailsSection() {
  return (
    <section className="py-20 px-4 bg-cream-100">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-foreground font-bold mb-4">
            Save The Date
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta'ala, kami
            mengundang Bapak/Ibu/Saudara/i, untuk berbagi kebahagiaan di hari
            istimewa kami.
          </p>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Akad Nikah */}
          <AnimateOnScroll direction="right">
            <Card className="relative bg-card border-stone-200 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden h-full">
              <Image 
                src="/ornaments/Ornamenst dominan blue/bouquet-watercolor-blue-detailed.png"
                alt="Ornamen Kartu"
                width={200}
                height={200}
                className="absolute -top-8 -right-12 opacity-20 dark:opacity-30"
              />
              <div className="relative z-10 flex flex-col flex-grow">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-3xl md:text-4xl font-serif text-primary">
                    Akad Nikah
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 text-foreground">
                    <Calendar className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="font-medium">Senin, 27 Oktober 2025</span>
                  </div>

                  <div className="flex items-center gap-3 text-foreground">
                    <Clock className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="font-medium">Pukul: 16.30 WIB</span>
                  </div>

                  <div className="flex items-start gap-3 text-foreground">
                    <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Kediaman Wanita:</p>
                      <p className="text-muted-foreground leading-relaxed">
                        Ds.Wedelan Rt 1 Rw 11
                        <br />
                        Kec. Bangsri Kab. Jepara
                      </p>
                    </div>
                  </div>

                  <div className="mt-auto pt-4">
                    <a
                      href="https://maps.app.goo.gl/4hqTRpw9iN6TbuWu5"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" className="w-full">
                        <MapPin className="w-4 h-4 mr-2" />
                        Lihat di Google Maps
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </div>
            </Card>
          </AnimateOnScroll>

          {/* Resepsi Nikah */}
          <AnimateOnScroll direction="left" delay={0.1}>
            <Card className="relative bg-card border-stone-200 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden h-full">
              <Image 
                src="/ornaments/Ornamenst dominan blue/bouquet-watercolor-blue-detailed.png"
                alt="Ornamen Kartu"
                width={200}
                height={200}
                className="absolute -bottom-10 -left-12 opacity-20 dark:opacity-30 transform scale-x-[-1]"
              />
              <div className="relative z-10 flex flex-col flex-grow">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-3xl md:text-4xl font-serif text-primary">
                    Resepsi Nikah
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 text-foreground">
                    <Calendar className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="font-medium">Senin, 27 Oktober 2025</span>
                  </div>

                  <div className="flex items-center gap-3 text-foreground">
                    <Clock className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="font-medium">Pukul: Bebas</span>
                  </div>

                  <div className="flex items-start gap-3 text-foreground">
                    <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Kediaman Pria:</p>
                      <p className="text-muted-foreground leading-relaxed">
                        Ds.Banjaragung RT 04 RW 05
                        <br />
                        Kec. Bangsri Kab. Jepara
                      </p>
                    </div>
                  </div>

                  <div className="mt-auto pt-4">
                    <a
                      href="https://maps.app.goo.gl/RTZRt3fgJPzMatYp9"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" className="w-full">
                        <MapPin className="w-4 h-4 mr-2" />
                        Lihat di Google Maps
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </div>
            </Card>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
