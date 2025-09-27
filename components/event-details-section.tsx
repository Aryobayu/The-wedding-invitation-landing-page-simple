import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Calendar } from "lucide-react";

export function EventDetailsSection() {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-primary font-bold mb-4">
            Save The Date
          </h2>
          <p className="text-muted-foreground text-lg">
            Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta'ala, kami
            mengundang Bapak/Ibu/Saudara/i, untuk berbagi kebahagiaan di hari
            istimewa kami
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Akad Nikah */}
          <Card className="bg-card border border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl md:text-3xl font-serif text-primary">
                Akad Nikah
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-3 text-card-foreground">
                <Calendar className="w-5 h-5 text-secondary" />
                <span className="font-medium">Senin, 27 Oktober 2025</span>
              </div>

              <div className="flex items-center gap-3 text-card-foreground">
                <Clock className="w-5 h-5 text-secondary" />
                <span className="font-medium">Pukul: 16.30 WIB</span>
              </div>

              <div className="flex items-start gap-3 text-card-foreground">
                <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Tempat:</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Kediaman ?<br />
                    Ds.Wedelan Rt 1 Rw 11
                    <br />
                    Kec. Bangsri Kab. Jepara
                  </p>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Lihat di Google Maps
              </Button>
            </CardContent>
          </Card>

          {/* Resepsi Nikah */}
          <Card className="bg-card border border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl md:text-3xl font-serif text-primary">
                Resepsi Nikah
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-3 text-card-foreground">
                <Calendar className="w-5 h-5 text-secondary" />
                <span className="font-medium">Senin, 27 Oktober 2025</span>
              </div>

              <div className="flex items-center gap-3 text-card-foreground">
                <Clock className="w-5 h-5 text-secondary" />
                <span className="font-medium">Pukul: Bebas</span>
              </div>

              <div className="flex items-start gap-3 text-card-foreground">
                <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Tempat:</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Kediaman Pria
                    <br />
                    Ds.Banjaragung RT 04 RW 05
                    <br />
                    Kec. Bangsri Kab. Jepara
                  </p>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Lihat di Google Maps
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
