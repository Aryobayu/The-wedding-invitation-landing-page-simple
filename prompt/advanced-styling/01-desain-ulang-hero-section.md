# Styling Lanjutan: Desain Ulang Komponen Hero Section

## 🎯 Tujuan
Menciptakan tampilan pembuka (`Hero Section`) yang imersif, elegan, dan profesional, yang berfungsi sebagai gerbang utama undangan digital. Desain harus selaras dengan konsep visual "Modern, Minimalis, dan Elegan".

##  Kontext (Konteks)
- **Komponen Utama:** `components/hero-section.tsx`
- **File Styling Tambahan:** `app/globals.css`
- **Aset Visual Utama:**
  - Foto Latar: `public/Mempelai-wanita-&-pria/foto-pengantin-2.jpeg`
  - Ornamen: `public/ornaments/Ornamenst dominan white/arrangement-line-art-white-gold-01.png`

## Implementasi Desain (Langkah-langkah)

Proses ini mencakup beberapa lapisan implementasi untuk mencapai hasil akhir yang maksimal.

### 1. Latar Belakang & Overlay
- **Latar Belakang:** Menggunakan foto mempelai sebagai gambar latar `full-screen` yang memenuhi seluruh area pandang.
- **Overlay Gradien:** Menerapkan lapisan gradien gelap (`bg-gradient-to-t from-black/80 via-black/50 to-black/20`) di atas gambar. Tujuannya adalah untuk meningkatkan keterbacaan teks (yang berwarna putih) dan menciptakan nuansa sinematik.

### 2. Ornamen Dekoratif
- Menempatkan ornamen *line-art* emas-putih di sudut kiri atas dan kanan bawah (dengan rotasi 180 derajat) untuk membingkai konten secara simetris dan elegan tanpa memenuhi layar.
- Opasitas ornamen sedikit diturunkan (`opacity-80`) agar menyatu lebih baik dengan latar.

### 3. Tipografi & Teks
- Semua teks menggunakan warna kontras tinggi (`text-white` atau `text-neutral-200`).
- Judul utama (nama mempelai) menggunakan `font-serif` dan efek `drop-shadow-lg` untuk membuatnya menonjol sebagai fokus utama.
- Tampilan nama tamu dibuat lebih bersih dan terintegrasi tanpa kotak latar.

### 4. Tombol Interaktif
- Tombol "Buka Undangan" didesain ulang menjadi gaya "ghost button" (latar transparan dengan `border` putih) yang memberikan kesan modern dan berkelas.
- Efek `:hover` diatur untuk mengubah latar menjadi putih dan teks menjadi hitam, memberikan feedback yang jelas.

### 5. Komposisi Responsif (Penyesuaian Akhir)
- Untuk kontrol komposisi yang presisi, `style` inline pada komponen diganti dengan kelas CSS kustom (`.hero-background`) di `app/globals.css`.
- Kelas ini menggunakan `@media` query untuk menerapkan `background-size` dan `background-position` yang berbeda pada tampilan mobile dan desktop, memastikan kedua mempelai selalu terbingkai dengan baik.

#### Kode CSS di `globals.css`:
```css
@layer utilities {
  .hero-background {
    background-image: url('/Mempelai-wanita-&-pria/foto-pengantin-2.jpeg');
    background-size: 180%;
    background-position: 40% 85%; /* Disesuaikan untuk mobile (geser kiri) */
    transition: background-size 0.4s ease-in-out, background-position 0.4s ease-in-out;
  }

  @media (min-width: 768px) {
    .hero-background {
      background-size: 112%;
      background-position: 40% 75%; /* Disesuaikan untuk desktop (geser kiri) */
    }
  }
}
```

## ✅ Kriteria Keberhasilan
- Tampilan `HeroSection` terlihat profesional, imersif, dan selaras dengan foto utama.
- Teks mudah dibaca di semua ukuran layar.
- Ornamen berfungsi sebagai bingkai yang mempercantik, bukan mengganggu.
- Komposisi gambar latar optimal baik di desktop maupun mobile.
