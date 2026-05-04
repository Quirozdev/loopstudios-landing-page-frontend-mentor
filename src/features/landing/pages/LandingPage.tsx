import { LandingHero } from "@/features/landing/widgets/LandingHero";
import { LandingMainSection } from "@/features/landing/widgets/LandingMainSection";

export function LandingPage() {
  return (
    <div className="@container flex flex-col gap-24">
      <LandingHero />
      <LandingMainSection />
    </div>
  );
}
