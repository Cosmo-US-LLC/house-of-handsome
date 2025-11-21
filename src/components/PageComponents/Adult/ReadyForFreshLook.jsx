import React from "react";
import PrimaryCTA from "../../ui/PrimaryCTA";

function ReadyForFreshLook() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-[1440px] px-10">
        {/* CTA Container */}
        <div className="relative bg-black rounded-2xl h-[200px] overflow-hidden">
          {/* Dashed Border */}
          <div className="absolute inset-[10px] border border-dashed border-white opacity-60 rounded-2xl pointer-events-none" />

          {/* Background Decorative Elements */}
          <div className="absolute top-[-81px] right-[80px] w-[211px] h-[206px] opacity-50">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-[#d82028] to-transparent blur-3xl" />
          </div>

          <div className="absolute bottom-0 left-0 w-[148px] h-[135px] opacity-50">
            <div className="w-full h-full rounded-full bg-gradient-to-tr from-[#d82028] to-transparent blur-2xl" />
          </div>

          {/* Content */}
          <div className="relative flex items-center justify-between h-full px-16">
            {/* Left - Text */}
            <div className="space-y-5 text-white">
              <h2 className="font-['Cairo'] font-bold text-[36px] md:text-[48px] leading-[55px]">
                Ready for a Fresh Look?
              </h2>
              <p className="font-['Urbanist'] font-normal text-[18px] leading-[26px]">
                Book your appointment and experience grooming made for you
              </p>
            </div>

            {/* Right - CTA Button */}
            <div>
              <PrimaryCTA>Book Appointments</PrimaryCTA>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReadyForFreshLook;

