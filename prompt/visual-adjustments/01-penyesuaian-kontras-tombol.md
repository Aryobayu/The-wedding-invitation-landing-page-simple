# Penyesuaian Visual: Kontras State Tombol Interaktif

## 🎯 Tujuan
Meningkatkan kontras warna pada elemen-elemen interaktif (seperti tombol dan link) saat dalam state `:hover` (diarahkan cursor) atau `:active` (diklik) untuk memberikan feedback visual yang jelas kepada pengguna dan memenuhi standar aksesibilitas.

##  प्रॉब्लम (Masalah)
Berdasarkan analisis pada screenshot di `public/Tampilan-visual-proyek`, beberapa tombol (contoh: "Copy Rekening", "Lihat di Google Maps") menggunakan warna latar `hover` yang sangat pucat (abu-abu/biru muda) di atas latar belakang halaman yang sudah terang (putih). Hal ini menghasilkan kontras yang sangat rendah, sehingga pengguna sulit membedakan apakah tombol tersebut sedang aktif atau tidak.

##  Kontext (Konteks)
- **Komponen Terdampak:** `gift-rsvp-section.tsx`, `event-details-section.tsx`, dan komponen lain yang memiliki tombol dengan `variant="outline"`.
- **Palet Warna Proyek:** Navy (foreground), Emas (primary), Putih (background).

## 🛠️ Tindakan & Solusi
Ganti implementasi `hover` state pada tombol-tombol tersebut dari warna berkontras rendah ke warna yang ada di palet utama proyek.

### Contoh Implementasi (Tailwind CSS):

**❌ JANGAN LAKUKAN (Kontras Rendah):**
```css
/* Contoh di globals.css atau kelas komponen */
.hover\:bg-gray-100 { ... }
.hover\:text-gray-500 { ... }
```

**✅ LAKUKAN (Kontras Tinggi):**
Gunakan warna `primary` (Emas) atau `foreground` (Navy) untuk menciptakan dampak visual yang kuat.

**Opsi A (Hover Emas):**
```tsx
// Di dalam komponen .tsx
<Button
  variant="outline"
  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
>
  Contoh Tombol
</Button>
```

**Opsi B (Hover Navy):**
```tsx
// Di dalam komponen .tsx
<Button
  variant="outline"
  className="border-foreground text-foreground hover:bg-foreground hover:text-background"
>
  Contoh Tombol
</Button>
```

## ✅ Kriteria Keberhasilan
- Perubahan warna pada saat `hover` terlihat jelas dan instan.
- Warna yang digunakan konsisten dengan palet warna utama (Emas/Navy).
- Hasil akhir memenuhi standar kontras WCAG 2.1 AA.
