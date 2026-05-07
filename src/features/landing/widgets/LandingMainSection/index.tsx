import { InteractiveVRSection } from "@/features/landing/widgets/LandingMainSection/InteractiveVRSection";
import { OurCreationsSection } from "@/features/landing/widgets/LandingMainSection/OurCreationsSection";

export function LandingMainSection() {
  return (
    <main className="mx-auto flex w-full max-w-360 flex-col gap-24 bg-white px-6 pb-24 md:pb-20 xl:gap-40 xl:pb-44 @3xl:px-20">
      <InteractiveVRSection />
      <OurCreationsSection />
    </main>
  );
}
