interface Props {
  text: string;
  mobileImgSrc: string;
  desktopImgSrc: string;
}

export function CreationElement({ text, mobileImgSrc, desktopImgSrc }: Props) {
  return (
    <div className="group relative flex min-h-32 cursor-pointer p-5 pt-14 xl:pt-88.5">
      <picture className="absolute top-0 left-0 -z-10 h-full w-full brightness-90 group-hover:opacity-25">
        <source media="(min-width: 1280px)" srcSet={desktopImgSrc} />
        <img
          src={mobileImgSrc}
          alt={desktopImgSrc.split("/").pop()}
          className="h-full w-full object-fill"
        />
      </picture>
      <span className="text-preset-5 font-josefin xl:text-preset-4 line-clamp-2 text-white uppercase group-hover:text-black">
        {text}
      </span>
    </div>
  );
}
