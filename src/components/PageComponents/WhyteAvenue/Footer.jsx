import { Mail, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/images/navbar/HOH_Logo.svg";
import { WHYTE_AVE_BOOKING_URL } from "@/utils/BookAnAppontemtREdirection";
import { NAV_LINKS } from "./data";

function Footer() {
  return (
    <footer className="w-full bg-[#f7f7f7] rounded-tl-[10px] rounded-tr-[10px] py-10">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="flex flex-wrap justify-between pb-8 max-md:gap-10 max-md:grid max-md:grid-cols-1">
          <div className="flex flex-col md:max-w-[380px] gap-6">
            <a href="#top" className="flex items-center gap-2">
              <img
                src={logo}
                alt="House of Handsome Logo"
                className="w-[80%] max-w-[300px] h-full shrink-0"
              />
            </a>
            <p className="font-['Urbanist'] text-base font-medium leading-[24px] text-black">
              Premium men's grooming on Whyte Avenue, Edmonton. Tradition meets style, in the heart of the strip.
            </p>
            <div className="flex items-center gap-2">
              <a
                href="mailto:info@houseofhandsome.ca"
                className="flex items-center justify-center w-10 h-10 text-black transition-colors border border-black rounded-full hover:bg-black hover:text-white"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/HouseofHandsomeCanada"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 text-black transition-colors border border-black rounded-full hover:bg-black hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/house.of.handsome.barbershop"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 text-black transition-colors border border-black rounded-full hover:bg-black hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="font-['Urbanist'] text-lg font-extrabold leading-none text-black">Explore</h3>
            <ul className="flex flex-col gap-3 font-['Urbanist'] text-base font-normal text-black">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="transition-colors hover:text-[#d82028]">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`${WHYTE_AVE_BOOKING_URL}?service=${encodeURIComponent("General Booking")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-[#d82028]"
                >
                  Book Now
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="font-['Urbanist'] text-lg font-extrabold leading-none text-black">Location & Hours</h3>
            <div className="font-['Urbanist'] text-base font-normal text-black space-y-1">
              <p className="font-bold">House of Handsome Whyte Ave</p>
              <a
                href="https://www.google.com/maps/place/House+of+Handsome+Barbershop/@53.5139375,-113.4969093,670m/data=!3m2!1e3!5s0x53a02205fc8a30ed:0xaf2b37a7a23a2552!4m15!1m8!3m7!1s0x53a02205fc52b0fb:0x4ccc0b64b95d5389!2s10369+78+Ave+NW,+Edmonton,+AB+T6E+6T3,+Canada!3b1!8m2!3d53.5139375!4d-113.4969093!16s%2Fg%2F11rnfbs075!3m5!1s0x53a023da737d6f13:0x86e6796deefbe987!8m2!3d53.5139298!4d-113.496912!16s%2Fg%2F11krs6ktn2?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-colors hover:text-[#d82028]"
              >
                10369 78 Ave NW, Edmonton, AB
              </a>
            </div>
            <div className="font-['Urbanist'] text-base font-normal text-black space-y-1">
              <p><strong>Tue to Sat:</strong> 10am to 7pm</p>
              <p><strong>Sun to Mon:</strong> Closed</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 border-t border-black/50 md:flex-row">
          <p className="font-['Urbanist'] text-sm font-normal text-center text-black">
            Copyright © 2026 House of Handsome, Whyte Avenue. All offers shown valid per posted terms.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
