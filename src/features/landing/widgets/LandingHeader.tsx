import { HeaderLink } from "@/features/landing/components/HeaderLink";
import { BurgerMenu } from "@/features/landing/widgets/BurgerMenu";

export function LandingHeader() {
  return (
    <header className="mx-auto w-full max-w-6xl px-6 pt-16 @3xl:px-20">
      <nav className="flex items-center justify-between">
        <a href="#">
          <img src={`${import.meta.env.BASE_URL}/images/logo.svg`} alt="Logo" />
        </a>
        <ul className="hidden items-center gap-x-8 @5xl:flex">
          <HeaderLink title="About" to="#" />
          <HeaderLink title="Careers" to="#" />
          <HeaderLink title="Events" to="#" />
          <HeaderLink title="Products" to="#" />
          <HeaderLink title="Support" to="#" />
        </ul>
        <BurgerMenu className="flex @5xl:hidden" />
      </nav>
    </header>
  );
}
