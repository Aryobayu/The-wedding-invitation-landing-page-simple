'''# Dokumentasi Proyek - Undangan Pernikahan Elegan

Dokumentasi ini menjelaskan struktur dan konteks proyek undangan pernikahan dengan tema elegan, palet warna Navy, Emas, dan Putih. Dokumentasi ini akan membantu AI lain untuk melanjutkan pengembangan proyek dengan konsisten dan efisien.

## 1. Struktur Folder dan Isi Proyek

```
wedding-invitation/
├── .next/                                  # Output build Next.js (dihasilkan otomatis)
├── app/                                    # Struktur halaman utama (Next.js 14+ App Router)
│   ├── api/                                # API routes
│   │   └── rsvp/
│   │       └── route.ts                    # Endpoint API untuk RSVP
│   ├── client-layout.tsx                   # Client side layout
│   ├── globals.css                         # Styling global
│   ├── layout.tsx                          # Root layout (theme provider, font, dll)
│   └── page.tsx                            # Homepage utama
├── components/                             # Komponen UI kustom dan reusable
│   ├── ui/                                 # Komponen UI reusable (card, button, dll)
│   │   ├── accordion.tsx
│   │   ├── alert-dialog.tsx
│   │   ├── alert.tsx
│   │   ├── aspect-ratio.tsx
│   │   ├── avatar.tsx
│   │   ├── badge.tsx
│   │   ├── breadcrumb.tsx
│   │   ├── button.tsx                      # Komponen tombol dengan varian elegan
│   │   ├── calendar.tsx
│   │   ├── card.tsx                        # Komponen kartu yang telah diadaptasi
│   │   ├── carousel.tsx
│   │   ├── chart.tsx
│   │   ├── checkbox.tsx
│   │   ├── collapsible.tsx
│   │   ├── command.tsx
│   │   ├── context-menu.tsx
│   │   ├── dialog.tsx
│   │   ├── drawer.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── elegant-footer.tsx              # Footer elegan
│   │   ├── elegant-grid.tsx                # Komponen grid untuk layout
│   │   ├── elegant-header.tsx              # Header elegan
│   │   ├── elegant-icons.tsx               # Ikon-ikon khusus tema pernikahan
│   │   ├── form.tsx
│   │   ├── hover-card.tsx
│   │   ├── input-otp.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── menubar.tsx
│   │   ├── navigation-menu.tsx
│   │   ├── pagination.tsx
│   │   ├── popover.tsx
│   │   ├── progress.tsx
│   │   ├── radio-group.tsx
│   │   ├── resizable.tsx
│   │   ├── scroll-area.tsx
│   │   ├── select.tsx
│   │   ├── separator.tsx
│   │   ├── sheet.tsx
│   │   ├── sidebar.tsx
│   │   ├── skeleton.tsx
│   │   ├── slider.tsx
│   │   ├── sonner.tsx
│   │   ├── switch.tsx
│   │   ├── table.tsx
│   │   ├── tabs.tsx
│   │   ├── textarea.tsx
│   │   ├── toast.tsx
│   │   ├── toaster.tsx
│   │   ├── toggle-group.tsx
│   │   ├── toggle.tsx
│   │   ├── tooltip.tsx
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── closing-section.tsx                 # Bagian penutup
│   ├── countdown-section.tsx               # Bagian hitung mundur acara
│   ├── couple-profile-section.tsx          # Bagian profil calon pengantin
│   ├── event-details-section.tsx           # Bagian detail acara
│   ├── gift-rsvp-section.tsx               # Bagian hadiah dan RSVP
│   ├── hero-section.tsx                    # Bagian pembuka dengan overlay
│   ├── music-player.tsx                    # Pemutar musik di undangan
│   ├── opening-verse-section.tsx           # Bagian pembukaan dengan ayat suci
│   ├── scroll-to-top-button.tsx            # Tombol scroll ke atas
│   └── theme-provider.tsx                  # Provider tema aplikasi
├── context/                                # Context React untuk state management
│   └── audio-context.tsx                   # Context untuk pengelolaan audio
├── hooks/                                  # React hooks kustom
│   ├── use-mobile.ts
│   └── use-toast.ts
├── lib/                                    # Utility functions dan library helpers
│   ├── prisma.ts                           # Konfigurasi Prisma
│   └── utils.ts                            # Utility functions umum
├── prisma/                                 # Konfigurasi dan schema database Prisma
│   ├── dev.db                              # Database lokal Prisma
│   ├── migrations/                         # Migrasi database
│   │   └── 20251013090332_init_rsvp_with_timestamp/
│   │       └── migration.sql               # Skrip migrasi awal
│   │   └── migration_lock.toml
│   └── schema.prisma                       # Schema database
├── public/                                 # File statis (gambar, font, dll)
│   ├── music/                              # File musik untuk undangan
│   │   └── lagu-pernikahan.mp3             # File musik utama
│   ├── ornaments/                          # Aset gambar ornamen (telah dirapikan)
│   │   ├── Ornamenst dominan blue/         # Ornamen dengan dominasi warna biru
│   │   │   ├── arrangement-watercolor-blue-gold.png
│   │   │   ├── bouquet-classic-rose-navy-white.png
│   │   │   ├── bouquet-digital-dahlia-blue-white-01.png
│   │   │   ├── bouquet-digital-dahlia-blue-white-02.png
│   │   │   ├── bouquet-digital-navy-white-01.png
│   │   │   ├── bouquet-watercolor-blue-detailed.png
│   │   │   ├── corner-digital-rose-blue-gold-left.png
│   │   │   ├── corner-digital-rose-blue-gold-right.png
│   │   │   ├── corner-watercolor-blue-01.png
│   │   │   ├── divider-watercolor-blue-gold.png
│   │   │   ├── frame-digital-rose-blue-gold-bottom.png
│   │   │   ├── frame-digital-rose-blue-gold-top.png
│   │   │   ├── frame-line-art-navy-white-gold.png
│   │   │   ├── leaf-line-art-navy-gold-01.png
│   │   │   └── leaf-line-art-navy-gold-02.png
│   │   ├── Ornamenst dominan gold/         # Ornamen dengan dominasi warna emas
│   │   │   ├── arrangement-line-art-gold-corner.png
│   │   │   ├── arrangement-line-art-gold-v-shape.png
│   │   │   ├── botanical-minimalist-brown-01.png
│   │   │   ├── botanical-minimalist-brown-02.png
│   │   │   ├── botanical-minimalist-brown-03.png
│   │   │   ├── botanical-minimalist-brown-04.png
│   │   │   ├── botanical-minimalist-brown-05.png
│   │   │   ├── botanical-minimalist-brown-06.png
│   │   │   ├── botanical-minimalist-brown-07.png
│   │   │   ├── botanical-minimalist-brown-08.png
│   │   │   ├── corner-line-art-gold-bottom-left.png
│   │   │   ├── corner-line-art-gold-top-right.png
│   │   │   ├── divider-abstract-gold-curve-01.png
│   │   │   ├── divider-abstract-gold-curve-02.png
│   │   │   ├── flower-line-art-gold-lily-detail.png
│   │   │   ├── flower-line-art-gold-lily-filled-02.png
│   │   │   ├── flower-line-art-gold-lily-filled.png
│   │   │   ├── flower-line-art-gold-lily-outline.png
│   │   │   ├── frame-line-art-gold-c-shape.png
│   │   │   ├── texture-gold-splatter-01.png
│   │   │   ├── texture-gold-splatter-02.png
│   │   │   └── texture-gold-splatter-03.png
│   │   └── Ornamenst dominan white/        # Ornamen dengan dominasi warna putih
│   │       ├── arrangement-line-art-white-gold-01.png
│   │       ├── flower-line-art-white-gold-lily-01.png
│   │       ├── flower-line-art-white-gold-lily-02.png
│   │       ├── flower-line-art-white-gold-lily-03.png
│   │       └── leaf-line-art-white-gold-branch.png
│   ├── placeholder-logo.png
│   ├── placeholder-logo.svg
│   ├── placeholder-user.jpg
│   ├── placeholder.jpg
│   └── placeholder.svg
├── styles/                                 # File CSS global atau styling khusus
├── .env                                    # File konfigurasi lingkungan
├── .gitignore                              # File yang diabaikan oleh Git
├── ACCESSIBILITY_GUIDELINES.md             # Panduan aksesibilitas yang telah diimplementasikan
├── components.json                         # Konfigurasi untuk tools komponen (jika menggunakan shadcn/ui)
├── GEMINI-FIX-ERROR.md                     # Panduan perbaikan error
├── GEMINI.md                               # File dokumentasi untuk asisten AI sebelumnya
├── globals.css                             # File styling global
├── next-env.d.ts                           # Definisi TypeScript untuk Next.js
├── next.config.mjs                         # Konfigurasi Next.js
├── package.json                            # Dependencies dan konfigurasi proyek
├── pnpm-lock.yaml                          # Versi dependency yang terkunci
├── postcss.config.mjs                      # Konfigurasi PostCSS
├── QWEN.md                                 # File dokumentasi untuk asisten AI saat ini
├── README.md                               # Panduan awal proyek
├── structure.json                          # Struktur halaman dan komponen
├── tailwind.config.ts                      # Konfigurasi Tailwind CSS
└── tsconfig.json                           # Konfigurasi TypeScript
```

## 2. Fungsi dan Peran Setiap File/Folder

### Folder Utama:
- **app/**: Berisi struktur halaman menggunakan App Router Next.js. Ini adalah lokasi utama untuk halaman-halaman seperti homepage (`page.tsx`), layout (`layout.tsx`), dan API routes (`api/`).
- **components/**: Berisi komponen UI reusable yang dibuat khusus untuk proyek ini, termasuk komponen dari library seperti shadcn/ui di `ui/`.
- **public/**: Tempat menyimpan file statis seperti gambar, ikon, font, dan file media lainnya yang dapat diakses secara publik.
- **prisma/**: Konfigurasi dan schema database untuk Prisma ORM, termasuk file database dan migrasi.

### File Konfigurasi:
- **globals.css**: File styling global yang berisi definisi warna, kelas utilitas, dan aturan CSS utama.
- **tailwind.config.ts**: Konfigurasi Tailwind CSS termasuk tema warna Navy, Emas, Putih yang telah diimplementasikan.
- **next.config.mjs**: Konfigurasi Next.js untuk build, optimasi, dan fungsi-fungsi khusus.
- **package.json**: Menjelaskan dependencies, scripts, dan metadata proyek.
- **tsconfig.json**: Konfigurasi TypeScript untuk pengembangan dan build.
- **.env**: File konfigurasi lingkungan untuk menyimpan variabel sensitif.

### File Data:
- **ACCESSIBILITY_GUIDELINES.md**: Dokumentasi tentang panduan aksesibilitas yang telah diimplementasikan sebelumnya.
- **structure.json**: Struktur halaman dan komponen dalam format JSON.

## 3. Urutan Prioritas File untuk Pemahaman Awal

1. **README.md** - Informasi awal dan tujuan proyek
2. **package.json** - Dependencies utama dan skrip yang digunakan
3. **app/page.tsx** - Struktur halaman utama dan komponen-komponen utama
4. **app/layout.tsx** - Layout global, font, dan theme provider
5. **tailwind.config.ts** - Palet warna dan konfigurasi styling utama
6. **globals.css** - Definisi warna dan aturan CSS global
7. **components/** - Komponen-komponen utama dan struktur UI
8. **prisma/schema.prisma** - Struktur database
9. **public/** - File media dan aset pendukung

## 4. Struktur Proyek Secara Terperinci

### A. Struktur Halaman (App Router)
```
app/
├── api/                                    # API routes
│   └── rsvp/
│       └── route.ts                        # Endpoint API untuk RSVP
├── client-layout.tsx                       # Client side layout
├── globals.css                             # Styling global
├── layout.tsx                              # Root layout (theme provider, font, dll)
└── page.tsx                                # Homepage utama
```

### B. Struktur Komponen
```
components/
├── ui/                                     # Komponen UI reusable (card, button, dll)
│   ├── accordion.tsx
│   ├── alert-dialog.tsx
│   ├── alert.tsx
│   ├── aspect-ratio.tsx
│   ├── avatar.tsx
│   ├── badge.tsx
│   ├── breadcrumb.tsx
│   ├── button.tsx                          # Komponen tombol dengan varian elegan
│   ├── calendar.tsx
│   ├── card.tsx                            # Komponen kartu yang telah diadaptasi
│   ├── carousel.tsx
│   ├── chart.tsx
│   ├── checkbox.tsx
│   ├── collapsible.tsx
│   ├── command.tsx
│   ├── context-menu.tsx
│   ├── dialog.tsx
│   ├── drawer.tsx
│   ├── dropdown-menu.tsx
│   ├── elegant-footer.tsx                  # Footer elegan
│   ├── elegant-grid.tsx                    # Komponen grid untuk layout
│   ├── elegant-header.tsx                  # Header elegan
│   ├── elegant-icons.tsx                   # Ikon-ikon khusus tema pernikahan
│   ├── form.tsx
│   ├── hover-card.tsx
│   ├── input-otp.tsx
│   ├── input.tsx
│   ├── label.tsx
│   ├── menubar.tsx
│   ├── navigation-menu.tsx
│   ├── pagination.tsx
│   ├── popover.tsx
│   ├── progress.tsx
│   ├── radio-group.tsx
│   ├── resizable.tsx
│   ├── scroll-area.tsx
│   ├── select.tsx
│   ├── separator.tsx
│   ├── sheet.tsx
│   ├── sidebar.tsx
│   ├── skeleton.tsx
│   ├── slider.tsx
│   ├── sonner.tsx
│   ├── switch.tsx
│   ├── table.tsx
│   ├── tabs.tsx
│   ├── textarea.tsx
│   ├── toast.tsx
│   ├── toaster.tsx
│   ├── toggle-group.tsx
│   ├── toggle.tsx
│   ├── tooltip.tsx
│   ├── use-mobile.tsx
│   └── use-toast.ts
├── closing-section.tsx                     # Bagian penutup
├── countdown-section.tsx                   # Bagian hitung mundur acara
├── couple-profile-section.tsx              # Bagian profil calon pengantin
├── event-details-section.tsx               # Bagian detail acara
├── gift-rsvp-section.tsx                   # Bagian hadiah dan RSVP
├── hero-section.tsx                        # Bagian pembuka dengan overlay
├── music-player.tsx                        # Pemutar musik di undangan
├── opening-verse-section.tsx               # Bagian pembukaan dengan ayat suci
├── scroll-to-top-button.tsx                # Tombol scroll ke atas
└── theme-provider.tsx                      # Provider tema aplikasi
```

### C. File Konfigurasi Penting
- **tailwind.config.ts**: 
  - Menyimpan palet warna Navy (`oklch(0.2 0.03 240)`), Emas (`oklch(0.77 0.09 70)`), dan Putih (`oklch(1 0 0)`)
  - Konfigurasi font: Inter (sans-serif), Playfair Display (serif)
  - Variasi warna untuk berbagai kebutuhan UI

- **globals.css**:
  - Definisi variabel CSS untuk tema warna
  - Aturan untuk kelas `.typography-elegant` untuk gaya serif yang anggun
  - Penyesuaian styling base untuk semua elemen

## 5. Interaksi Antar Bagian dalam Proyek

### A. Alur Rendering Halaman
1. `app/layout.tsx` menyediakan struktur dasar dengan theme provider, font loading, dan audio context
2. `app/page.tsx` merangkai semua komponen seksi menjadi satu halaman utama
3. Setiap seksi (seperti `couple-profile-section`, `countdown-section`) menggunakan komponen UI dasar dari `components/ui/`
4. Komponen UI menggunakan styling dari Tailwind berdasarkan konfigurasi di `tailwind.config.ts` dan `globals.css`
5. Context dari `context/audio-context.tsx` mengelola status pemutaran musik
6. API routes di `app/api/rsvp/route.ts` menangani penyimpanan data RSVP ke database Prisma

### B. Sistem Warna dan Styling
1. Warna didefinisikan di `:root` dalam `globals.css` menggunakan format OKLCH
2. Konfigurasi Tailwind mengonversi variabel CSS ini menjadi kelas-kelas Tailwind
3. Komponen-komponen menggunakan kelas-kelas ini untuk menerapkan tema Navy, Emas, Putih
4. Mode gelap juga disiapkan dengan palet warna yang harmonis

### C. Sistem Tipografi
1. Font Inter digunakan untuk teks tubuh dan elemen UI
2. Font Playfair Display digunakan untuk heading dan elemen elegan
3. Kelas `.typography-elegant` tersedia untuk teks serif yang anggun
4. Hierarki tipografi diatur untuk keterbacaan dan estetika

## 6. Fitur-Fitur Utama

### A. Fitur Interaktif
- **Pemutar Musik**: Diimplementasikan menggunakan `music-player.tsx` dan `audio-context.tsx` untuk mengelola playback musik di seluruh aplikasi
- **RSVP Form**: Form untuk tamu mengonfirmasi kehadiran mereka, dengan data disimpan ke database Prisma
- **Scroll to Top**: Tombol untuk kembali ke atas halaman
- **Tema Gelap/Cerah**: Dapat beralih antara tema terang dan gelap

### B. Fitur Tampilan
- **Countdown Timer**: Menampilkan hitung mundur menuju hari pernikahan
- **Detail Acara**: Menampilkan informasi lengkap tentang lokasi dan waktu acara
- **Profil Pasangan**: Menampilkan foto dan informasi pasangan
- **Bagian Hadiah**: Memberikan informasi tentang opsi hadiah bagi tamu

### C. Fitur Aksesibilitas
- Implementasi prinsip-prinsip aksesibilitas Web (WCAG)
- Penggunaan ARIA labels dan roles
- Navigasi keyboard yang baik
- Kontras warna yang cukup

## 7. Catatan Penting untuk Pengembangan Lanjutan

### A. Penambahan Background Foto
- Simpan foto di `public/` dalam folder seperti `public/images/`
- Gunakan Tailwind untuk mengatur tampilan background (misalnya `bg-cover`, `bg-center`)
- Pastikan kontras teks tetap baik terhadap background

### B. Penambahan Elemen Dekoratif
- Buat komponen-komponen dekoratif di `components/ui/`
- Gunakan ikon dari Lucide React atau gambar SVG khusus
- Terapkan warna Navy dan Emas untuk menjaga konsistensi tema

### C. Styling Tipografi Lanjutan
- Gunakan kelas-kelas Tailwind yang sudah dikonfigurasi
- Tambahkan variasi ukuran font sesuai kebutuhan hierarki
- Gunakan `.typography-elegant` untuk teks yang ingin terlihat lebih anggun

### D. Database dan API
- Skema database didefinisikan di `prisma/schema.prisma`
- Migration database otomatis ditangani oleh Prisma
- API routes di `app/api/` untuk menangani permintaan backend

## 8. Dependencies Utama
- Next.js 14 (App Router)
- React 18
- Tailwind CSS (dengan plugin tambahan)
- Prisma (ORM untuk database)
- SQLite (database lokal)
- Lucide React (ikon)
- TypeScript
- shadcn/ui (komponen UI)
'''