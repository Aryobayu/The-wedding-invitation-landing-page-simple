import { OpeningVerseSection } from "@/components/opening-verse-section";
import { CoupleProfileSection } from "@/components/couple-profile-section";
import { CountdownSection } from "@/components/countdown-section";
import { EventDetailsSection } from "@/components/event-details-section";
import { GiftRsvpSection } from "@/components/gift-rsvp-section";
import { ClosingSection } from "@/components/closing-section";

export default function WeddingInvitation() {
  return (
    <main className="min-h-screen">
      <OpeningVerseSection />
      <CoupleProfileSection />
      <CountdownSection />
      <EventDetailsSection />
      <GiftRsvpSection />
      <ClosingSection />
    </main>
  );
}
