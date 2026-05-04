export function InteractiveVRSection() {
  return (
    <section className="relative flex flex-col gap-12 xl:flex-row xl:gap-0">
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet={`${import.meta.env.BASE_URL}/images/desktop/image-interactive.jpg`}
        />
        <img
          src={`${import.meta.env.BASE_URL}/images/mobile/image-interactive.jpg`}
          alt="VR image (mobile)"
          className="w-full"
        />
      </picture>
      <div className="flex flex-col gap-4 bg-white text-center xl:absolute xl:right-0 xl:w-[52%] xl:flex-1 xl:self-end xl:pt-24 xl:pl-24 xl:text-left">
        <h2 className="text-preset-4 xl:text-preset-2 font-josefin uppercase">
          The leader in interactive VR
        </h2>
        <p className="text-preset-6 font-alata opacity-50">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </section>
  );
}
