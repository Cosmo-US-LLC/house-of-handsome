import logo from "@/assets/images/navbar/HOH_Logo.svg";
import logoWhite from "@/assets/images/navbar/HOH_Logo_white.svg";
import useScrolled from "@/hooks/useScrolled";
import { NAV_LINKS } from "./data";

function Nav() {
  const scrolled = useScrolled(4);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 w-full transition-shadow duration-200 ${
        scrolled
          ? "border-b border-neutral-200 bg-white/90 shadow-md backdrop-blur supports-backdrop-filter:bg-white/70"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="flex min-h-[64px] items-center justify-between gap-4">
          <a
            href="#top"
            aria-label="House of Handsome Franchising - Top"
            className="flex max-h-[31px] max-w-[150px] items-center sm:max-w-[178px]"
          >
            <img src={scrolled ? logo : logoWhite} alt="House of Handsome Logo" className="h-full w-full object-contain" />
          </a>
          <div className="flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`hidden font-['Urbanist'] text-[16px] font-medium transition-colors lg:inline ${
                  scrolled ? "text-black hover:text-neutral-700" : "text-white hover:text-neutral-300"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#apply"
              className="inline-flex items-center justify-center rounded-[10px] bg-[#d82028] px-4 py-2.5 font-['Urbanist'] text-[13px] font-bold text-white transition-colors duration-300 hover:bg-[#b91219] sm:text-[14px]"
            >
              <span className="sm:hidden">Apply</span>
              <span className="hidden sm:inline">Explore Franchise Opportunities</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
