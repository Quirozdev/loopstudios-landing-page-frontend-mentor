interface Props {
  to: string;
  iconSrc: string;
  iconAlt: string;
}

export function SocialNetworkLink({ to, iconSrc, iconAlt }: Props) {
  return (
    <a
      href={to}
      target="_blank"
      referrerPolicy="no-referrer"
      className="after:mx-auto after:mt-2 after:block after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-in-out after:content-[''] hover:after:w-full"
    >
      <img src={iconSrc} alt={iconAlt} />
    </a>
  );
}
