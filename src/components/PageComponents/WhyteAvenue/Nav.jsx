import logo from "@/assets/images/navbar/HOH_Logo.svg";
import logoWhite from "@/assets/images/navbar/HOH_Logo_white.svg";
import useScrolled from "@/hooks/useScrolled";
import { NAV_LINKS } from "./data";
import { WHYTE_AVE_BOOKING_URL } from "@/utils/BookAnAppontemtREdirection";

function Nav() {
  const scrolled = useScrolled(4);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[200] w-full transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur border-b border-neutral-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#top"
            aria-label="House of Handsome - Home"
            className="flex gap-2 items-center max-h-[31px] max-w-[178px]"
          >
            <img
              src={scrolled ? logo : logoWhite}
              alt="House of Handsome Logo"
              className="object-contain w-full h-full"
            />
          </a>

          <div className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`hidden md:inline font-['Urbanist'] text-[16px] font-semibold transition-colors ${
                  scrolled ? "text-[#181818] hover:text-[#d82028]" : "text-white hover:text-neutral-300"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`${WHYTE_AVE_BOOKING_URL}?service=${encodeURIComponent("General Booking")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-[10px] bg-[#d82028] px-5 py-2.5 font-['Urbanist'] text-[14px] font-bold capitalize text-white transition-colors duration-300 hover:bg-[#b91219]"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
