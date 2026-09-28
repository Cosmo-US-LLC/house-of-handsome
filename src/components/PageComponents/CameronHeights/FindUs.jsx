import { MapPin } from "lucide-react";
import PrimaryCTA from "@/components/ui/PrimaryCTA";
import { ADDRESS, PHONE, MAPS_URL, OPENING_HOURS } from "./data";
import cameronHeightsImage from "../../../assets/images/home/location/location_c3.webp";

function FindUs() {
  return (
    <section id="find" className="w-full bg-[#0e0b0a] py-16 text-white md:py-20">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="mb-2 h-[3px] w-9 bg-[#d82028]" aria-hidden="true" />
        <h2 className="font-['Cairo'] text-[32px] font-bold text-white md:text-[40px]">Find Us</h2>

        <div className="mt-8 grid grid-cols-1 gap-9 md:grid-cols-2">

          <div className="relative flex min-h-[220px] flex-col items-center justify-center gap-3 overflow-hidden rounded-[6px] border border-white/10 p-6 text-center">
            <img
              src={cameronHeightsImage}
              alt="Cameron Heights Edmonton location"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
            <MapPin className="relative z-10 h-7 w-7 text-[#d82028]" />
            <div className="relative z-10 font-['Urbanist'] text-[15px] font-bold text-[#d82028]">{ADDRESS}</div>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="relative z-10">
              <PrimaryCTA>Get Directions</PrimaryCTA>
            </a>
          </div>
          <div>
            <h4 className="font-['Urbanist'] text-[12px] font-bold uppercase tracking-[0.06em] text-[#d82028]">
              Address
            </h4>
            <p className="mt-2 font-['Urbanist'] text-[15px] leading-[1.7] text-white/60">
              {ADDRESS}
              <br />
              {PHONE}
            </p>

            <h4 className="mt-5 font-['Urbanist'] text-[12px] font-bold uppercase tracking-[0.06em] text-[#d82028]">
              Hours
            </h4>
            <div className="mt-2">
              {OPENING_HOURS.map((row) => (
                <div
                  key={row.day}
                  className="flex justify-between border-b border-white/10 py-2 font-['Urbanist'] text-[14px] text-white/60 last:border-b-0"
                >
                  <span>{row.day}</span>
                  <span>{row.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FindUs;
