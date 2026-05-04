import { LandingHeader } from "@/features/landing/widgets/LandingHeader";
import { LandingHero } from "@/features/landing/widgets/LandingHero";

export function LandingPage() {
  return (
    <div className="@container">
      <div className="relative flex flex-col gap-y-48 @3xl:gap-y-36">
        <picture className="absolute -z-10 h-full w-full brightness-50">
          <source
            media="(min-width: 768px)"
            srcSet={`${import.meta.env.BASE_URL}/images/desktop/image-hero.jpg`}
          />
          <img
            src={`${import.meta.env.BASE_URL}/images/mobile/image-hero.jpg`}
            alt="Hero image (mobile)"
            className="mx-auto h-full w-full max-w-360 object-cover"
          />
        </picture>
        <LandingHeader />
        <LandingHero />
      </div>
    </div>
  );
}
