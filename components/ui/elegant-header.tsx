import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function ElegantHeader() {
  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif font-bold text-navy">
          {`{W & M}`}
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link 
            href="#opening-verse" 
            className="text-navy hover:text-gold transition-colors duration-300 font-sans"
          >
            Pembukaan
          </Link>
          <Link 
            href="#couple-profile" 
            className="text-navy hover:text-gold transition-colors duration-300 font-sans"
          >
            Pasangan
          </Link>
          <Link 
            href="#countdown" 
            className="text-navy hover:text-gold transition-colors duration-300 font-sans"
          >
            Hitung Mundur
          </Link>
          <Link 
            href="#event-details" 
            className="text-navy hover:text-gold transition-colors duration-300 font-sans"
          >
            Acara
          </Link>
        </nav>
        
        <Button 
          variant="outline" 
          className="hidden md:flex text-navy border-navy hover:bg-navy hover:text-white hover:border-navy"
        >
          Konfirmasi Kehadiran
        </Button>
        
        {/* Mobile menu button */}
        <Button 
          variant="outline" 
          size="icon"
          className="md:hidden text-navy border-navy"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" 
            />
          </svg>
        </Button>
      </div>
    </header>
  );
}