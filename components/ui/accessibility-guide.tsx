import { HeartIcon, CalendarIcon, MapPinIcon, ClockIcon, CheckIcon } from './elegant-icons';

/**
 * Komponen ini berfungsi sebagai panduan untuk memastikan aksesibilitas
 * dalam desain antarmuka undangan pernikahan elegan Anda.
 */
export function AccessibilityGuide() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-navy/20 shadow-lg">
      <h2 className="font-serif text-2xl text-navy font-bold mb-6 text-center">
        Panduan Aksesibilitas
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="font-serif text-xl text-navy font-semibold flex items-center gap-2">
            <HeartIcon size={20} />
            Kontras Warna
          </h3>
          <ul className="space-y-2 text-navy/80">
            <li className="flex items-start gap-2">
              <CheckIcon className="text-gold mt-1" />
              <span>Memastikan rasio kontras minimum 4.5:1 untuk teks normal</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckIcon className="text-gold mt-1" />
              <span>Palet warna Navy dan Emas memenuhi standar aksesibilitas</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckIcon className="text-gold mt-1" />
              <span>Mode gelap juga mempertahankan kontras yang cukup</span>
            </li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h3 className="font-serif text-xl text-navy font-semibold flex items-center gap-2">
            <CalendarIcon size={20} />
            Navigasi
          </h3>
          <ul className="space-y-2 text-navy/80">
            <li className="flex items-start gap-2">
              <CheckIcon className="text-gold mt-1" />
              <span>Dukungan keyboard untuk navigasi antar elemen</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckIcon className="text-gold mt-1" />
              <span>Focus states yang jelas dan terlihat</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckIcon className="text-gold mt-1" />
              <span>Struktur heading yang logis (H1, H2, H3)</span>
            </li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h3 className="font-serif text-xl text-navy font-semibold flex items-center gap-2">
            <MapPinIcon size={20} />
            Responsivitas
          </h3>
          <ul className="space-y-2 text-navy/80">
            <li className="flex items-start gap-2">
              <CheckIcon className="text-gold mt-1" />
              <span>Desain yang responsif di berbagai ukuran layar</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckIcon className="text-gold mt-1" />
              <span>Ukuran sentuhan yang memadai untuk elemen interaktif</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckIcon className="text-gold mt-1" />
              <span>Tampilan yang tetap elegan di semua perangkat</span>
            </li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <h3 className="font-serif text-xl text-navy font-semibold flex items-center gap-2">
            <ClockIcon size={20} />
            Kinerja
          </h3>
          <ul className="space-y-2 text-navy/80">
            <li className="flex items-start gap-2">
              <CheckIcon className="text-gold mt-1" />
              <span>Optimasi gambar dan aset untuk waktu muat cepat</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckIcon className="text-gold mt-1" />
              <span>Tipografi yang mudah dibaca di berbagai kondisi pencahayaan</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckIcon className="text-gold mt-1" />
              <span>Animasi halus yang tidak mengganggu pengguna</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-navy/5 rounded-lg border border-gold/30">
        <h4 className="font-serif text-lg text-navy font-semibold mb-2">Catatan Implementasi</h4>
        <p className="text-navy/80">
          Proyek ini telah dirancang dengan mempertimbangkan prinsip-prinsip desain inklusif.
          Warna, kontras, tipografi, dan struktur layout telah dioptimalkan untuk memberikan
          pengalaman pengguna yang elegan sekaligus dapat diakses oleh semua tamu undangan.
        </p>
      </div>
    </div>
  );
}

// Komponen pengingat untuk mengakses panduan aksesibilitas
export function AccessibilityReminder() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button 
        className="bg-gold text-white p-3 rounded-full shadow-lg hover:bg-gold/90 transition-colors"
        aria-label="Panduan aksesibilitas"
        title="Lihat panduan aksesibilitas"
      >
        <HeartIcon size={20} />
      </button>
    </div>
  );
}