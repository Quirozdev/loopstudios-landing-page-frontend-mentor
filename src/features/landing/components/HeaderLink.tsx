interface Props {
  title: string;
  to: string;
}

export function HeaderLink({ title, to }: Props) {
  return (
    <li>
      <a
        href={to}
        className="text-preset-6 font-alata text-white after:mx-auto after:block after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-in-out after:content-[''] hover:after:w-6"
      >
        {title}
      </a>
    </li>
  );
}
