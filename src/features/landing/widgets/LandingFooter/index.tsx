import { HoverableLink } from "@/features/landing/components/HoverableLink";
import { SocialNetworkLink } from "@/features/landing/widgets/LandingFooter/SocialNetworkLink";

export function LandingFooter() {
  return (
    <footer className="mx-auto flex w-full max-w-360 flex-col gap-y-10 px-6 pt-10 md:flex-row md:justify-between md:p-14 @3xl:px-20">
      <div className="flex flex-col gap-y-10 md:gap-6">
        <a href="#" className="self-center md:self-start">
          <img src={`${import.meta.env.BASE_URL}/images/logo.svg`} alt="Logo" />
        </a>
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left xl:gap-x-8">
          <HoverableLink to="#" title="About" />
          <HoverableLink to="#" title="Careers" />
          <HoverableLink to="#" title="Events" />
          <HoverableLink to="#" title="Products" />
          <HoverableLink to="#" title="Support" />
        </div>
      </div>
      <div className="md:gapy-6 flex flex-col justify-center gap-y-4">
        <div className="flex items-center justify-center gap-4 md:justify-end xl:gap-x-8">
          <SocialNetworkLink
            to="https://facebook.com"
            iconAlt="Facebook"
            iconSrc={`${import.meta.env.BASE_URL}/images/icon-facebook.svg`}
          />
          <SocialNetworkLink
            to="https://x.com"
            iconAlt="Twitter"
            iconSrc={`${import.meta.env.BASE_URL}/images/icon-twitter.svg`}
          />
          <SocialNetworkLink
            to="https://pinterest.com"
            iconAlt="Pinterest"
            iconSrc={`${import.meta.env.BASE_URL}/images/icon-pinterest.svg`}
          />
          <SocialNetworkLink
            to="https://instagram.com"
            iconAlt="Instagram"
            iconSrc={`${import.meta.env.BASE_URL}/images/icon-instagram.svg`}
          />
        </div>
        <p className="text-preset-6 font-alata text-center text-white opacity-50 md:text-right">
          © 2021 Loopstudios. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
