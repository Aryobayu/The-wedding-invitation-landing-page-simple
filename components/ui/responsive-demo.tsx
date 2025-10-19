import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarIcon, MapPinIcon, ClockIcon, HeartIcon } from '@/components/ui/elegant-icons';
import { AccessibilityGuide } from '@/components/ui/accessibility-guide';

export function ResponsiveDemoSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-navy/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-navy font-bold mb-4">
            Demonstrasi Responsivitas & Aksesibilitas
          </h2>
          <p className="font-sans text-xl text-navy/80 max-w-3xl mx-auto">
            Desain elegan yang dapat diakses oleh semua tamu undangan, di berbagai perangkat
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <HeartIcon />
                <span>Desain Responsif</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-navy/80 mb-4">
                Tampilan elegan yang menyesuaikan diri dengan berbagai ukuran layar - dari mobile hingga desktop.
              </p>
              <ul className="space-y-2 text-navy/80">
                <li className="flex items-start gap-2">
                  <CheckIcon className="text-gold mt-1" />
                  <span>Layout fleksibel menggunakan Tailwind CSS</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="text-gold mt-1" />
                  <span>Ukuran sentuhan yang memadai di perangkat mobile</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="text-gold mt-1" />
                  <span>Tipografi yang dapat dibaca di semua ukuran layar</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <HeartIcon />
                <span>Aksesibilitas Terjamin</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-navy/80 mb-4">
                Setiap elemen dirancang untuk dapat diakses oleh semua tamu, termasuk yang menggunakan alat bantu.
              </p>
              <ul className="space-y-2 text-navy/80">
                <li className="flex items-start gap-2">
                  <CheckIcon className="text-gold mt-1" />
                  <span>Rasio kontras warna sesuai standar WCAG</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="text-gold mt-1" />
                  <span>Navigasi keyboard yang fungsional</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="text-gold mt-1" />
                  <span>ARIA labels untuk elemen interaktif</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <AccessibilityGuide />
        </div>

        <div className="mt-12 text-center">
          <Button variant="elegant" size="lg" className="px-8 py-6 text-lg">
            Konfirmasi Kehadiran
          </Button>
        </div>
      </div>
    </section>
  );
}