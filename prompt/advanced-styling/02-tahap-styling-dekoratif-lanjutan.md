# Styling Lanjutan: Tahap 02 - Styling Dekoratif Per Komponen

## 🎯 Tujuan
Menerapkan gaya dekoratif yang konsisten, elegan, dan profesional ke semua komponen utama laman undangan, melanjutkan gaya yang telah ditetapkan pada `HeroSection` dan `OpeningVerseSection`.

## 🧭 Prinsip Visual Utama (Ringkasan)

Berdasarkan analisis dan keputusan desain dari sesi sebelumnya, berikut adalah pilar visual yang harus diikuti:

1.  **Estetika Inti:** Modern, Minimalis, Elegan.
2.  **Palet Warna:**
    -   **Primer:** Hitam, Putih, dan Biru Langit (diambil dari foto utama mempelai).
    -   **Aksen:** Emas (`primary`), Navy (`foreground`), dan Biru Pucat (`dusty blue`) dari ornamen.
3.  **Penggunaan Ornamen:**
    -   Gunakan ornamen bunga (gaya *line-art* dan *watercolor*) secara strategis dan subtil.
    -   Fungsi utama ornamen adalah untuk membingkai konten, menambah kelembutan, dan mengisi ruang kosong tanpa membuatnya terlihat ramai.
4.  **Tipografi:**
    -   Gunakan `font-serif` (Playfair Display) untuk judul utama (Headings).
    -   Gunakan `font-sans` (Inter) untuk teks isi (body text).
    -   Pastikan semua teks memiliki kontras yang tinggi terhadap latar belakangnya.
5.  **Gaya Komponen:**
    -   Gunakan `Card` dengan desain yang bersih, `border` halus, dan `shadow` yang lembut.
    -   Maksimalkan penggunaan ruang kosong (*whitespace*) untuk menciptakan kesan mewah dan tidak sesak.
    -   Pastikan semua elemen interaktif (tombol, link) memiliki `hover` dan `active` state yang jelas menggunakan warna Emas atau Navy untuk kontras maksimal.

## 📝 Rencana Kerja Berurutan

Lanjutkan proses styling untuk setiap komponen dalam urutan berikut. **Tunggu instruksi di setiap akhir tahap** sebelum melanjutkan ke komponen berikutnya.

- [ ] **1. Couple Profile Section (`@components/couple-profile-section.tsx`)**
    -   **Tugas:** Mengganti ikon placeholder dengan foto asli mempelai dan menambahkan ornamen untuk mempercantik tampilan.

- [ ] **2. Countdown Section (`@components/countdown-section.tsx`)**
    -   **Tugas:** Memberikan latar belakang dan ornamen yang sesuai tema, serta menyesuaikan gaya kotak hitung mundur agar lebih elegan.

- [ ] **3. Event Details Section (`@components/event-details-section.tsx`)**
    -   **Tugas:** Menambahkan ornamen sebagai pembatas atau latar belakang kartu, dan memastikan tombol "Google Maps" memiliki kontras yang tinggi.

- [ ] **4. Gift & RSVP Section (`@components/gift-rsvp-section.tsx`)**
    -   **Tugas:** Menata ulang layout kartu "Wedding Gift" dan form "RSVP" dengan sentuhan dekoratif. Memperbaiki kontras tombol "Copy".

- [ ] **5. Closing Section (`@components/closing-section.tsx`)**
    -   **Tugas:** Mendesain bagian penutup dengan ornamen yang kuat dan indah sebagai penutup yang berkesan.

## ⚙️ Alur Kerja per Komponen

Untuk setiap komponen dalam daftar di atas, ikuti alur kerja berikut:

1.  **Analisis Komponen:** Tinjau kode `.tsx` komponen saat ini.
2.  **Usulkan Desain:** Ajukan rencana desain dekoratif yang baru, jelaskan ornamen yang akan dipakai dan perubahan gaya yang akan diterapkan.
3.  **Tunggu Persetujuan:** Jangan implementasikan kode sebelum mendapat persetujuan.
4.  **Implementasi:** Tulis dan terapkan kode baru ke file komponen.
5.  **Verifikasi:** Jalankan `pnpm build` untuk memastikan tidak ada error.
6.  **Tunggu Instruksi Lanjutan:** Tunggu perintah untuk memulai komponen berikutnya.
