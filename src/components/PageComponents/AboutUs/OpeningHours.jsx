import PrimaryCTA from "../../../components/ui/PrimaryCTA";
import React from "react";

function OpeningHours() {
  return (
    <section className="bg-[#f4f4f4] pt-12 pb-20">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="flex flex-col gap-6 items-center justify-between h-[266px] w-full text-center">
          {/* Title */}
          <h2 className="text-[36px] md:text-[48px] font-['Cairo'] font-bold leading-[55px] capitalize text-[#181818]">
            Opening Hours
          </h2>

          {/* Hours Table */}
          <div className="w-full md:w-[401px] font-['Urbanist'] font-medium text-[16px] leading-[26px]">
            <div className="flex justify-between mb-[6px] ">
              <span className="text-[#181818] leading-[162.5%]">Monday to Friday</span>
              <span className="text-[#d82028] leading-[162.5%]">9:00am — 8:00pm</span>
            </div>
            <div className="flex justify-between mb-[6px] ">
              <span className="text-[#181818] leading-[162.5%]">Saturday</span>
              <span className="text-[#d82028] leading-[162.5%]">9:00am — 7:00pm</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#181818] leading-[162.5%]">Sunday</span>
              <span className="text-[#d82028] leading-[162.5%]">10:00am — 6:00pm</span>
            </div>
          </div>

          {/* CTA Button */}
          <PrimaryCTA>Book An Appointment</PrimaryCTA>
        </div>
      </div>
    </section>
  );
}

export default OpeningHours;
