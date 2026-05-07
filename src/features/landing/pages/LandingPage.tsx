import { LandingHero } from "@/features/landing/widgets/LandingHero";
import { LandingMainSection } from "@/features/landing/widgets/LandingMainSection";

export function LandingPage() {
  return (
    <div className="@container flex flex-col bg-black">
      <LandingHero />
      <LandingMainSection />
    </div>
  );
}
