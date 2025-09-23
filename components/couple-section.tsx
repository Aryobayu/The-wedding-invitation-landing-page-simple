import { Card, CardContent } from '@/components/ui/card'

export function CoupleSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Bismillah and greeting */}
        <div className="text-center mb-12">
          <div className="text-3xl md:text-4xl font-serif text-primary mb-4" style={{ fontFamily: 'serif' }}>
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
          </div>
          <p className="text-lg text-foreground leading-relaxed">
            Assalamu'alaikum Warahmatullahi Wabarakatuh
          </p>
          <p className="text-muted-foreground mt-4 leading-relaxed max-w-2xl mx-auto">
            Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud mengundang 
            Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami.
          </p>
        </div>

        {/* Couple profiles */}
        <Card className="bg-card border border-border shadow-lg">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Bride */}
              <div className="text-center space-y-4">
                <div className="w-32 h-32 mx-auto bg-muted rounded-full flex items-center justify-center mb-4">
                  <svg className="w-16 h-16 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-serif text-primary font-bold">
                    Santi Rinawati
                  </h3>
                  <p className="text-muted-foreground mt-2 leading-relaxed">
                    Putri dari<br />
                    Bapak Alm. Satrio &<br />
                    Ibu Rohmatun
                  </p>
                </div>
              </div>

              {/* Ampersand */}
              <div className="text-center">
                <div className="text-6xl md:text-8xl font-serif text-secondary font-bold">
                  &
                </div>
              </div>

              {/* Groom */}
              <div className="text-center space-y-4">
                <div className="w-32 h-32 mx-auto bg-muted rounded-full flex items-center justify-center mb-4">
                  <svg className="w-16 h-16 text-muted-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-serif text-primary font-bold">
                    Muhammad Faril
                  </h3>
                  <p className="text-muted-foreground mt-2 leading-relaxed">
                    Putra dari<br />
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
  )
}
