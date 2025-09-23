import { HeroSection } from '@/components/hero-section'
import { CoupleSection } from '@/components/couple-section'
import { EventDetailsSection } from '@/components/event-details-section'
import { GiftRsvpSection } from '@/components/gift-rsvp-section'

export default function WeddingInvitation() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CoupleSection />
      <EventDetailsSection />
      <GiftRsvpSection />
    </main>
  )
}
