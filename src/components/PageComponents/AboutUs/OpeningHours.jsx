import PrimaryCTA from "../../../components/ui/PrimaryCTA";
import React from "react";

function OpeningHours() {
  return (
    <section className="py-12 bg-[#F4F4F4]">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8 text-center flex flex-col gap-8 justify-center items-center">
        <h2 className="text-[48px] font-['Cairo'] font-bold leading-[55px] capitalize text-[#181818]">
          Opening Hours
        </h2>
        <div className="space-y-4 text-[#181818] font-['Urbanist'] text-[16px] font-medium leading-[26px] w-full max-w-[400px]">
          <div className="flex justify-between">
            <span>Monday to Friday</span>
            <span className="text-[#d82028]">9:00am — 8:00pm</span>
          </div>
          <div className="flex justify-between">
            <span>Saturday</span>
            <span className="text-[#d82028]">9:00am — 7:00pm</span>
          </div>
          <div className="flex justify-between">
            <span>Sunday</span>
            <span className="text-[#d82028]">10:00am — 6:00pm</span>
          </div>
        </div>
        <PrimaryCTA children="Book an Appointment" className="" />
      </div>
    </section>
  );
}

export default OpeningHours;
