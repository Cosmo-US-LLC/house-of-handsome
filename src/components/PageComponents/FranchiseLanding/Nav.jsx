import { NAV_LINKS } from "./data";

function Nav() {
  return (
    <nav className="sticky top-0 z-[200] w-full border-b border-[#e6e3de] bg-white">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <a
            href="#top"
            aria-label="House of Handsome Franchising - Top"
            className="whitespace-nowrap font-['Cairo'] text-[16px] font-bold uppercase leading-none tracking-[0.02em] text-[#111111] sm:text-[22px] lg:text-[26px]"
          >
            House of Handsome <span className="text-[#d82028]">Franchising</span>
          </a>
          <div className="flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hidden font-['Urbanist'] text-[16px] font-semibold text-[#181818] transition-colors hover:text-[#d82028] lg:inline"
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
