import { ContactCtaSection } from "@/components/home/ContactCtaSection";
import { HeroSection } from "@/components/home/HeroSection";
import { JourneyCollectionsSection } from "@/components/home/JourneyCollectionsSection";
// TestimonialsSection — archived; re-enable on homepage when ready:
// import { TestimonialsSection } from "@/components/home/TestimonialsSection";

export default function HomePage() {
  return (
    <div className="home-editorial-flow">
      <HeroSection />
      <JourneyCollectionsSection />
      {/* <TestimonialsSection /> */}
      <ContactCtaSection />
    </div>
  );
}
