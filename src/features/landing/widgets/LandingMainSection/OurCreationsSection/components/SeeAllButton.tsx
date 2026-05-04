import clsx from "clsx";

interface Props extends React.ComponentProps<"button"> {}

export function SeeAllButton({ className, ...props }: Props) {
  return (
    <button
      className={clsx(
        "text-preset-7 font-alata w-fit cursor-pointer self-center border px-10 py-3 uppercase transition-colors duration-700 ease-in-out hover:bg-black hover:text-white",
        className,
      )}
      {...props}
    >
      See all
    </button>
  );
}
