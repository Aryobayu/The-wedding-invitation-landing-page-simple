'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Fungsi untuk scroll ke elemen target
  const scrollToTop = () => {
    const targetElement = document.getElementById('opening-verse');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    // Fungsi yang akan dijalankan saat event scroll terjadi
    const toggleVisibility = () => {
      // Tampilkan tombol jika pengguna scroll lebih dari 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Tambahkan event listener saat komponen dimuat di client
    window.addEventListener('scroll', toggleVisibility);

    // Cleanup: Hapus event listener saat komponen di-unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-20 right-6 z-40">
      {isVisible && (
        <Button
          onClick={scrollToTop}
          variant="outline"
          size="icon"
          className="rounded-full bg-card/80 backdrop-blur-sm border-border shadow-lg w-12 h-12 transition-opacity duration-300 animate-fade-in"
        >
          <ArrowUp className="w-6 h-6" />
          <span className="sr-only">Scroll to top</span>
        </Button>
      )}
    </div>
  );
}