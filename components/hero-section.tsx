import { Button } from '@/components/ui/button'
import { Heart } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Decorative floral elements */}
      <div className="absolute top-8 left-8 w-16 h-16 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full text-secondary">
          <path
            d="M50 10 C30 10, 10 30, 10 50 C10 70, 30 90, 50 90 C70 90, 90 70, 90 50 C90 30, 70 10, 50 10 Z M50 20 C40 20, 30 30, 30 40 C30 50, 40 60, 50 60 C60 60, 70 50, 70 40 C70 30, 60 20, 50 20 Z"
            fill="currentColor"
          />
        </svg>
      </div>
      
      <div className="absolute top-8 right-8 w-12 h-12 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full text-secondary">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="50" cy="50" r="20" fill="currentColor"/>
        </svg>
      </div>

      <div className="text-center space-y-8 max-w-2xl">
        <div className="space-y-2">
          <p className="text-lg text-muted-foreground font-medium tracking-wide">
            The Wedding of
          </p>
          <h1 className="text-6xl md:text-8xl font-serif text-primary font-bold tracking-tight">
            Santi <span className="text-secondary">&</span> Faril
          </h1>
          <p className="text-xl md:text-2xl text-foreground font-medium mt-4">
            Senin, 27 Oktober 2025
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <p className="text-sm text-muted-foreground mb-2">Kepada Yth:</p>
          <p className="text-lg font-medium text-card-foreground">Nama Tamu</p>
        </div>

        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Heart className="w-5 h-5 mr-2" />
          Buka Undangan
        </Button>
      </div>

      {/* Bottom decorative elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-24 h-8 opacity-30">
        <svg viewBox="0 0 100 30" className="w-full h-full text-secondary">
          <path
            d="M10 15 Q25 5, 40 15 T70 15 T90 15"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="20" cy="15" r="2" fill="currentColor"/>
          <circle cx="50" cy="15" r="2" fill="currentColor"/>
          <circle cx="80" cy="15" r="2" fill="currentColor"/>
        </svg>
      </div>
    </section>
  )
}
