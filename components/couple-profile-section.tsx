import { Card, CardContent } from "@/components/ui/card";

export function CoupleProfileSection() {
  return (
    <section className="pt-4 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Card> {/* Card will now use the new theme automatically */}
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Bride */}
              <div className="text-center space-y-4">
                <div className="w-32 h-32 mx-auto bg-navy/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-16 h-16 text-navy/40"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl text-navy font-bold">
                    Santi Rinawati
                  </h3>
                  <p className="font-sans text-navy/70 mt-2 leading-relaxed">
                    Putri dari
                    <br />
                    Bapak Alm. Satrio &<br />
                    Ibu Rohmatun
                  </p>
                </div>
              </div>

              {/* Ampersand */}
              <div className="text-center">
                <div className="font-serif text-6xl md:text-8xl text-gold font-bold">
                  &
                </div>
              </div>

              {/* Groom */}
              <div className="text-center space-y-4">
                <div className="w-32 h-32 mx-auto bg-navy/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-16 h-16 text-navy/40"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl text-navy font-bold">
                    Muhammad Faril
                  </h3>
                  <p className="font-sans text-navy/70 mt-2 leading-relaxed">
                    Putra dari
                    <br />
                    Bapak Ahmad Syuhada' &<br />
                    Ibu Nur Hidayah
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}