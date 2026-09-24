import { MapPin } from "lucide-react";
import PrimaryCTA from "@/components/ui/PrimaryCTA";
import { ADDRESS, PHONE, MAPS_URL, OPENING_HOURS } from "./data";

function FindUs() {
  return (
    <section id="find" className="w-full bg-[#0e0b0a] py-16 text-white md:py-20">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="mb-2 h-[3px] w-9 bg-[#d82028]" aria-hidden="true" />
        <h2 className="font-['Cairo'] text-[32px] font-bold text-white md:text-[40px]">Find Us</h2>

        <div className="mt-8 grid grid-cols-1 gap-9 md:grid-cols-2">
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

          <div className="flex min-h-[220px] flex-col items-center justify-center gap-3 rounded-[6px] border border-white/10 bg-[#221c19] p-6 text-center">
            <MapPin className="h-7 w-7 text-[#d82028]" />
            <div className="font-['Urbanist'] text-[15px] font-bold text-[#d82028]">{ADDRESS}</div>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">
              <PrimaryCTA>Get Directions</PrimaryCTA>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FindUs;
