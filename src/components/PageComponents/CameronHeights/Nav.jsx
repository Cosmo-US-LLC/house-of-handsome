import logoWhite from "@/assets/images/navbar/HOH_Logo_white.svg";
import useScrolled from "@/hooks/useScrolled";
import { NAV_LINKS } from "./data";
import { CAMERON_HEIGHTS_BOOKING_URL } from "@/utils/BookAnAppontemtREdirection";

function Nav() {
  const scrolled = useScrolled(4);

  return (
    <nav
      className={`fixed top-16 sm:top-10 z-[200] w-full transition-shadow duration-200 ${
        scrolled
          ? "bg-[#0e0b0a]/95 backdrop-blur border-b border-white/10 shadow-md"
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
              src={logoWhite}
              alt="House of Handsome Logo"
              className="object-contain w-full h-full"
            />
          </a>

          <div className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`hidden md:inline font-['Urbanist'] text-[16px] font-semibold transition-colors hover:text-[#d82028] ${
                  link.label === "Home"
                    ? "text-[#d82028] border-b-2 border-[#d82028] pb-1"
                    : "text-white/85"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`${CAMERON_HEIGHTS_BOOKING_URL}?service=${encodeURIComponent("General Booking")}`}
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
