import { LandingHeader } from "@/features/landing/widgets/LandingHeader";

export function LandingContainer() {
  return (
    <section className="relative mx-auto flex max-w-360 flex-col gap-y-48 @3xl:gap-y-36">
      <picture className="absolute -z-10 h-full w-full brightness-50">
        <source
          media="(min-width: 768px)"
          srcSet={`${import.meta.env.BASE_URL}/images/desktop/image-hero.jpg`}
        />
        <img
          src={`${import.meta.env.BASE_URL}/images/mobile/image-hero.jpg`}
          alt="Hero image (mobile)"
          className="h-full w-full object-cover"
        />
      </picture>
      <LandingHeader />
      <article className="w-full px-6 pb-56 @3xl:px-20 @3xl:pb-36">
        <h1 className="@3xl:text-preset-1 text-preset-3 font-josefin max-w-2xl border-2 border-white px-6 py-5 text-white uppercase @3xl:px-10 @3xl:py-10">
          Immersive experiences that deliver
        </h1>
      </article>
    </section>
  );
}
