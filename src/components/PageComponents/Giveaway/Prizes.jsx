import React from "react";

function Prizes() {
  return (
    <section className="w-full bg-[#f5f5f5] py-14 md:py-[84px]">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="mb-11">
          <p className="mb-3 font-['Urbanist'] text-[14px] font-semibold uppercase tracking-[0.2em] text-[#d82028]">
            The Prizes
          </p>
          <h2 className="font-['Cairo'] text-[28px] font-bold tracking-[-0.01em] text-[#111111] md:text-[40px]">
            One Winner. <span className="text-[#d82028]">A Year Of Fresh Cuts.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-xl border-2 border-[#d82028] bg-white p-8">
            <span className="mb-4 inline-block rounded-md bg-[#d82028] px-3 py-1.5 font-['Urbanist'] text-[12px] font-bold uppercase tracking-[0.12em] text-white">
              Grand Prize
            </span>
            <h3 className="mb-2.5 font-['Cairo'] text-[24px] font-bold text-[#111111]">
              Free Haircuts For A Year
            </h3>
            <p className="font-['Urbanist'] text-[16px] text-[#6b6b6b]">
              Twelve haircuts, one every month for a full year. Walk in, sit
              down, walk out sharp. Never reach for your wallet once.
            </p>
            <p className="mt-4 font-['Cairo'] text-[16px] font-extrabold text-[#d82028]">
              Value: $400+
            </p>
          </div>

          <div className="rounded-xl bg-white p-8 shadow-[0_6px_24px_rgba(0,0,0,0.05)]">
            <span className="mb-4 inline-block rounded-md bg-[#f5f5f5] px-3 py-1.5 font-['Urbanist'] text-[12px] font-bold uppercase tracking-[0.12em] text-[#111111]">
              10 Runners-Up
            </span>
            <h3 className="mb-2.5 font-['Cairo'] text-[24px] font-bold text-[#111111]">
              Free First Cut + Hot Towel Shave
            </h3>
            <p className="font-['Urbanist'] text-[16px] text-[#6b6b6b]">
              The full House of Handsome first visit, on us: cut, hot towel
              shave, and the head massage that comes with every chair.
            </p>
            <p className="mt-4 font-['Cairo'] text-[16px] font-extrabold text-[#d82028]">
              Value: $60+
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Prizes;
