import { CreationElement } from "@/features/landing/widgets/LandingMainSection/OurCreationsSection/components/CreationElement";
import { SeeAllButton } from "@/features/landing/widgets/LandingMainSection/OurCreationsSection/components/SeeAllButton";

export function OurCreationsSection() {
  return (
    <section className="relative flex flex-col gap-12 md:gap-8">
      <div className="flex w-full items-center justify-between">
        <h2 className="text-preset-4 md:text-preset-2 font-josefin flex-1 text-center uppercase xl:text-left">
          Our Creations
        </h2>
        <SeeAllButton className="hidden xl:block" />
      </div>
      <div className="grid grid-cols-1 gap-y-6 xl:grid-cols-4 xl:gap-x-8 xl:gap-y-8">
        <CreationElement
          text="Deep Earth"
          mobileImgSrc={`${import.meta.env.BASE_URL}/images/mobile/image-deep-earth.jpg`}
          desktopImgSrc={`${import.meta.env.BASE_URL}/images/desktop/image-deep-earth.jpg`}
        />
        <CreationElement
          text="Night Arcade"
          mobileImgSrc={`${import.meta.env.BASE_URL}/images/mobile/image-night-arcade.jpg`}
          desktopImgSrc={`${import.meta.env.BASE_URL}/images/desktop/image-night-arcade.jpg`}
        />
        <CreationElement
          text="Soccer Team VR"
          mobileImgSrc={`${import.meta.env.BASE_URL}/images/mobile/image-soccer-team.jpg`}
          desktopImgSrc={`${import.meta.env.BASE_URL}/images/desktop/image-soccer-team.jpg`}
        />
        <CreationElement
          text="The Grid"
          mobileImgSrc={`${import.meta.env.BASE_URL}/images/mobile/image-grid.jpg`}
          desktopImgSrc={`${import.meta.env.BASE_URL}/images/desktop/image-grid.jpg`}
        />
        <CreationElement
          text="From Up Above VR"
          mobileImgSrc={`${import.meta.env.BASE_URL}/images/mobile/image-from-above.jpg`}
          desktopImgSrc={`${import.meta.env.BASE_URL}/images/desktop/image-from-above.jpg`}
        />
        <CreationElement
          text="Pocket Borealis"
          mobileImgSrc={`${import.meta.env.BASE_URL}/images/mobile/image-pocket-borealis.jpg`}
          desktopImgSrc={`${import.meta.env.BASE_URL}/images/desktop/image-pocket-borealis.jpg`}
        />
        <CreationElement
          text="The Curiosity"
          mobileImgSrc={`${import.meta.env.BASE_URL}/images/mobile/image-curiosity.jpg`}
          desktopImgSrc={`${import.meta.env.BASE_URL}/images/desktop/image-curiosity.jpg`}
        />
        <CreationElement
          text="Make It Fisheye"
          mobileImgSrc={`${import.meta.env.BASE_URL}/images/mobile/image-fisheye.jpg`}
          desktopImgSrc={`${import.meta.env.BASE_URL}/images/desktop/image-fisheye.jpg`}
        />
      </div>
      <SeeAllButton className="xl:hidden" />
    </section>
  );
}
