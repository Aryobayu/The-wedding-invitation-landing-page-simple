# Panduan Desain dan Aksesibilitas - Undangan Pernikahan Elegan

## 🎨 Palet Warna Elegan

### Warna Utama:
- **Navy**: `oklch(0.2 0.03 240)` - Digunakan untuk teks utama dan elemen penting
- **Emas**: `oklch(0.77 0.09 70)` - Digunakan untuk aksen, tombol, dan elemen penting
- **Putih**: `oklch(1 0 0)` - Latar belakang utama dan elemen bersih

### Variasi Warna:
- Nuansa Navy: Dari `oklch(0.95 0.01 240)` hingga `oklch(0.1 0.02 240)`
- Nuansa Emas: Dari `oklch(0.97 0.08 70)` hingga `oklch(0.52 0.07 70)`

## ✨ Tipografi Elegan

### Font Utama:
- **Serif (Heading)**: Playfair Display - Digunakan untuk judul dan elemen penting
- **Sans-serif**: Inter - Digunakan untuk teks tubuh dan elemen UI
- **Alias Heading**: Ditambahkan `font-heading` untuk konsistensi

### Hierarki Tipografi:
- **H1**: `text-5xl` - Judul utama halaman
- **H2**: `text-4xl` - Bagian utama
- **H3**: `text-3xl` - Sub-bagian
- **Teks tubuh**: `text-base` hingga `text-lg`
- **Kelas khusus**: `.typography-elegant` untuk teks serif elegan

## 📐 Struktur Grid dan Layout

### Komponen ElegantGrid:
- Terdapat komponen `ElegantGrid` dan `GridItem` untuk struktur layout fleksibel
- Opsi spacing: `none`, `sm`, `md`, `lg`, `xl`
- Dukungan untuk `colSpan` dan `rowSpan` untuk layout kompleks

### Layout Umum:
- Latar belakang putih bersih untuk tampilan elegan
- Kartu-kartu dengan bayangan halus dan hover efek
- Spacing konsisten menggunakan sistem grid Tailwind

## 🎯 Aksesibilitas

### Kontras Warna:
- Rasio kontras minimum **4.5:1** untuk teks normal dan **3:1** untuk teks besar (sesuai WCAG 2.1 Level AA).
- **State Interaktif**: Untuk memastikan feedback yang jelas, semua elemen interaktif (tombol, link) harus memiliki `hover`, `active`, dan `focus` state yang kontras. Direkomendasikan menggunakan warna `primary` (Emas) atau `foreground` (Navy) untuk state ini, bukan warna dengan kontras rendah.

### Navigasi Keyboard:
- Semua elemen interaktif dapat diakses melalui keyboard
- Focus states yang jelas dan terlihat
- Struktur heading yang logis (H1 → H2 → H3)

### Responsivitas:
- Desain sepenuhnya responsif untuk semua ukuran layar
- Ukuran sentuhan minimum 44px untuk elemen interaktif
- Tipografi yang dapat dibaca di berbagai ukuran layar

## 🛠️ Komponen UI Kustom

### ElegantButton:
- Variasi: `default`, `outline`, `elegant`, `navy`
- Animasi transisi halus
- Efek hover yang elegan

### ElegantCard:
- Desain kartu dengan border dan bayangan
- Warna teks dan latar yang sesuai tema
- Efek hover dengan perubahan bayangan

### ElegantIcon:
- Ikon Lucide React yang minimalis
- Konsistensi warna (Navy dan Emas)
- Ukuran dan stroke yang dapat dikustomisasi

## 🔧 Implementasi Praktis

### Penggunaan Warna dalam Komponen:
```tsx
// Contoh penggunaan warna
<div className="text-navy bg-white border border-navy/20">
  <p className="text-gold">Teks aksen emas</p>
</div>
```

### Penggunaan Tipografi:
```tsx
<h1 className="font-heading text-4xl text-navy">Judul Elegan</h1>
<p className="typography-elegant">Teks serif elegan</p>
```

### Penggunaan Grid:
```tsx
<ElegantGrid container centered spacing="lg">
  <GridItem colSpan={6}>Konten kolom</GridItem>
  <GridItem colSpan={6}>Konten kolom lainnya</GridItem>
</ElegantGrid>
```

## ✅ Checklist Aksesibilitas

- [x] Rasio kontras warna memenuhi standar
- [x] Navigasi keyboard berfungsi dengan baik
- [x] Focus states terlihat jelas
- [x] Struktur heading logis
- [x] ARIA labels untuk ikon dan elemen interaktif
- [x] Desain responsif di semua ukuran layar
- [x] Kode semantik HTML digunakan secara tepat
- [x] Pengalaman pengguna tetap elegan untuk semua pengguna

## 🎯 Tujuan Desain

Desain ini bertujuan menciptakan pengalaman visual yang:
- **Elegan**: Menggunakan palet warna yang harmonis dan tipografi yang anggun
- **Profesional**: Dengan layout yang seimbang dan konsisten
- **Emosional**: Menciptakan perasaan hangat dan perayaan
- **Aksesibel**: Dapat dinikmati oleh semua tamu undangan

Dengan mengikuti panduan ini, pengembang dapat memastikan setiap tambahan atau modifikasi pada proyek tetap menjaga kualitas desain dan aksesibilitas yang elegan.