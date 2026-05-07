import { useClickOutsideDetector } from "@/shared/hooks/use-click-outside-detector";
import { useKeyDown } from "@/shared/hooks/use-key-press";
import React, { useRef, useState } from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import clsx from "clsx";
import { BurgerMenuLink } from "@/features/landing/widgets/BurgerMenu/components/BurgerMenuLink";

interface Props extends React.ComponentProps<"div"> {}

export function BurgerMenu({ className, ...props }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useClickOutsideDetector({
    elementRef: menuRef,
    onClickOutside: () => {
      setIsMenuOpen(false);
    },
  });

  useKeyDown({
    key: "Escape",
    onKeyDown: () => {
      setIsMenuOpen(false);
    },
  });

  return (
    <div
      ref={menuRef}
      className={clsx(`flex items-center`, className)}
      {...props}
    >
      <button
        className="cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <RxHamburgerMenu className="size-6 text-white" />
      </button>
      <div
        className={clsx(
          "fixed top-0 right-0 left-0 z-30 flex h-screen w-screen flex-col gap-y-48 bg-black px-6 py-10 transition-transform duration-700 ease-in-out md:gap-y-32 md:px-20 md:py-16",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between">
          <img src={`${import.meta.env.BASE_URL}/images/logo.svg`} alt="Logo" />
          <button
            onClick={() => setIsMenuOpen(false)}
            className="cursor-pointer text-white"
          >
            <RxCross1 className="size-6" />
          </button>
        </div>
        <ul className="flex flex-col gap-6">
          <BurgerMenuLink title="About" to="#" />
          <BurgerMenuLink title="Careers" to="#" />
          <BurgerMenuLink title="Events" to="#" />
          <BurgerMenuLink title="Products" to="#" />
          <BurgerMenuLink title="Support" to="#" />
        </ul>
      </div>
    </div>
  );
}
