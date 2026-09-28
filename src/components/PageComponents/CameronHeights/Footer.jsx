import { Mail, Facebook, Instagram } from "lucide-react";
import logoWhite from "@/assets/images/navbar/HOH_Logo_white.svg";
import { CAMERON_HEIGHTS_BOOKING_URL } from "@/utils/BookAnAppontemtREdirection";
import { NAV_LINKS, ADDRESS, PHONE, PHONE_HREF, MAPS_URL, OPENING_HOURS } from "./data";

function Footer() {
  return (
    <footer className="w-full bg-[#1a1512] py-10 text-white">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="flex flex-wrap justify-between gap-10 pb-8">
          <div className="flex flex-col gap-6 md:max-w-[380px]">
            <a href="#top" className="flex items-center gap-2">
              <img src={logoWhite} alt="House of Handsome Logo" className="h-full w-[80%] max-w-[240px] shrink-0" />
            </a>
            <p className="font-['Urbanist'] text-[15px] font-medium leading-[24px] text-white/60">
              A modern barbershop built for men who take their look seriously. Haircuts, beard work, and grooming
              done with precision, right here in Cameron Heights.
            </p>
            <div className="flex items-center gap-2">
              <a
                href="mailto:info@houseofhandsome.ca"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white hover:text-black"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/HouseofHandsomeCanada"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white hover:text-black"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/house.of.handsome.barbershop"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white hover:text-black"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="font-['Urbanist'] text-[13px] font-bold uppercase tracking-[0.06em] text-[#d82028]">
              Explore
            </h3>
            <ul className="flex flex-col gap-3 font-['Urbanist'] text-[15px] text-white/70">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-[#d82028]">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`${CAMERON_HEIGHTS_BOOKING_URL}?service=${encodeURIComponent("General Booking")}`}
                  className="transition-colors hover:text-[#d82028]"
                >
                  Book Now
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="font-['Urbanist'] text-[13px] font-bold uppercase tracking-[0.06em] text-[#d82028]">
              Location & Hours
            </h3>
            <div className="space-y-1 font-['Urbanist'] text-[15px] text-white/70">
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="block transition-colors hover:text-[#d82028]">
                {ADDRESS}
              </a>
              <a href={PHONE_HREF} className="block transition-colors hover:text-[#d82028]">
                {PHONE}
              </a>
            </div>
            <div className="space-y-1 font-['Urbanist'] text-[14px] text-white/50">
              {OPENING_HOURS.map((row) => (
                <p key={row.day}>
                  <strong className="text-white/70">{row.day}:</strong> {row.time}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6">
          <p className="text-center font-['Urbanist'] text-[13px] text-white/45">
            © House of Handsome. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
