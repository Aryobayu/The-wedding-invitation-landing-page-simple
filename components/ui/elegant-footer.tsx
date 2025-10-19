import { HeartIcon } from './elegant-icons';

export function ElegantFooter() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-navy text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <HeartIcon className="text-gold" size={32} />
          </div>
          
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl mb-2">Wassalamu'alaikum Warahmatullahi Wabarakatuh</h3>
            <p className="text-navy/20 font-sans">Dan semoga pernikahan kami menjadi awal dari cinta yang abadi</p>
          </div>
          
          <div className="text-center mb-8">
            <p className="font-sans text-navy/30">© {new Date().getFullYear()} Undangan Pernikahan Elegan. Hak Cipta Dilindungi.</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="#" 
              className="text-navy/30 hover:text-gold transition-colors duration-300"
              aria-label="Instagram"
            >
              Instagram
            </a>
            <a 
              href="#" 
              className="text-navy/30 hover:text-gold transition-colors duration-300"
              aria-label="Website"
            >
              Website
            </a>
            <a 
              href="#" 
              className="text-navy/30 hover:text-gold transition-colors duration-300"
              aria-label="Kontak"
            >
              Kontak
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}