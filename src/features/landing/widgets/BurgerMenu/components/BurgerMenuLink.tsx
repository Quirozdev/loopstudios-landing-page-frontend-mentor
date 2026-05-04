interface Props {
  title: string;
  to: string;
}

export function BurgerMenuLink({ title, to }: Props) {
  return (
    <li className="w-fit">
      <a
        href={to}
        className="text-preset-5 font-josefin text-white uppercase after:block after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-in-out after:content-[''] hover:after:w-full"
      >
        {title}
      </a>
    </li>
  );
}
