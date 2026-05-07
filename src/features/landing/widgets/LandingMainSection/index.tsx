import { InteractiveVRSection } from "@/features/landing/widgets/LandingMainSection/InteractiveVRSection";
import { OurCreationsSection } from "@/features/landing/widgets/LandingMainSection/OurCreationsSection";

export function LandingMainSection() {
  return (
    <main className="mx-auto flex w-full max-w-360 flex-col gap-24 bg-white px-6 xl:gap-40 @3xl:px-20">
      <InteractiveVRSection />
      <OurCreationsSection />
    </main>
  );
}
