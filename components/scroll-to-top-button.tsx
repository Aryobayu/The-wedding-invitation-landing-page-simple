'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Fungsi untuk scroll ke elemen target
  const scrollToTop = () => {
    // Scroll to top of the page instead of a specific element
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    // Function that will run when scroll event occurs
    const toggleVisibility = () => {
      // Show button if user scrolls more than 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add event listener when component is mounted
    window.addEventListener('scroll', toggleVisibility, { passive: true });

    // Initial check in case the page is already scrolled
    toggleVisibility();

    // Cleanup: Remove event listener when component is unmounted
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