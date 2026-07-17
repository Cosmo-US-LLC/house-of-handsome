import React from "react";

const SERVICES = [
  "Haircuts & Skin Fades",
  "Beard Trims & Lineups",
  "Hot Towel Shaves",
  "Scalp Detox",
  "Waxing & Cleanup",
  "Head Massage",
];

function Services() {
  return (
    <section className="w-full bg-black py-14 md:py-[72px]">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6">
        <div className="mb-10">
          <p className="mb-3 font-['Urbanist'] text-[13px] font-semibold uppercase tracking-[0.2em] text-[#d82028]">
            Built For Men's Grooming
          </p>
          <h2 className="mb-3 font-['Cairo'] text-[28px] font-bold tracking-[-0.01em] text-white md:text-[38px]">
            Everything A Working Man Needs. <span className="text-[#d82028]">Nothing He Doesn't.</span>
          </h2>
          <p className="max-w-[58ch] font-['Urbanist'] text-[15.5px] text-white/65">
            Hot towels, pre-shave oils, proper aftershave. A full routine
            done right. In and out looking sharp, whether you're coming off
            a shift or heading to one.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3.5 md:grid-cols-3">
          {SERVICES.map((svc) => (
            <div
              key={svc}
              className="flex items-center gap-3 rounded-xl border border-[#2b2b2b] bg-[#1a1a1a] p-5 font-['Cairo'] text-[15.5px] font-semibold text-white"
            >
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#d82028]" />
              {svc}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
