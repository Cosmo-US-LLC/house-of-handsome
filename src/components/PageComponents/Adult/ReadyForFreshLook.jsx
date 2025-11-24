import React from "react";
import PrimaryCTA from "../../ui/PrimaryCTA";

function ReadyForFreshLook() {
  return (
    <section className="py-6 bg-black ">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6">
        {/* CTA Container */}
        <div className="relative bg-black rounded-2xl min-h-[200px] md:h-[200px] overflow-hidden">
          {/* Dashed Border */}
          <div className="absolute inset-[10px] border border-dashed border-white opacity-60 rounded-2xl pointer-events-none" />

          {/* Content - Stack on mobile, side-by-side on desktop */}
          <div className="relative flex flex-col md:flex-row items-center justify-between h-full gap-6 md:gap-8 px-6 py-8 md:px-16 md:py-0">
            {/* Left - Text */}
            <div className="space-y-3 md:space-y-5 text-white text-center md:text-left">
              <h2 className="font-['Cairo'] font-bold text-[28px] md:text-[36px] lg:text-[48px] leading-tight md:leading-[55px]">
                Ready for a Fresh Look?
              </h2>
              <p className="font-['Urbanist'] font-normal text-[16px] md:text-[18px] leading-[24px] md:leading-[26px]">
                Book your appointment and experience grooming made for you
              </p>
            </div>

            {/* Right - CTA Button */}
            <div className="shrink-0">
              <PrimaryCTA>Book Appointments</PrimaryCTA>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReadyForFreshLook;
