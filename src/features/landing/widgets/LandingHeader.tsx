import { HoverableLink } from "@/features/landing/components/HoverableLink";
import { BurgerMenu } from "@/features/landing/widgets/BurgerMenu";

export function LandingHeader() {
  return (
    <header className="w-full px-6 pt-10 md:pt-16 @3xl:px-20">
      <nav className="flex items-center justify-between">
        <a href="#">
          <img src={`${import.meta.env.BASE_URL}/images/logo.svg`} alt="Logo" />
        </a>
        <ul className="hidden items-center gap-x-8 @5xl:flex">
          <HoverableLink title="About" to="#" />
          <HoverableLink title="Careers" to="#" />
          <HoverableLink title="Events" to="#" />
          <HoverableLink title="Products" to="#" />
          <HoverableLink title="Support" to="#" />
        </ul>
        <BurgerMenu className="flex @5xl:hidden" />
      </nav>
    </header>
  );
}
