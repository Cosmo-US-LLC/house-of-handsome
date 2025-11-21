import PrimaryCTA from "@/components/ui/PrimaryCTA";
import React, { useState } from "react";

export default function FreshLook() {
  return (
    <section className="bg-[#000000] relative max-md:px-4 max-md:py-2 md:p-2">
      <div className="absolute left-0 bottom-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="148"
          height="135"
          viewBox="0 0 148 135"
          fill="none"
        >
          <g clip-path="url(#clip0_642_5929)">
            <circle
              cx="57.643"
              cy="89.3568"
              r="89.8568"
              fill="white"
              fill-opacity="0.06"
            />
            <ellipse
              cx="41.5"
              cy="110"
              rx="105.5"
              ry="103"
              fill="white"
              fill-opacity="0.1"
            />
          </g>
          <defs>
            <clipPath id="clip0_642_5929">
              <rect width="148" height="135" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="absolute right-0 top-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="174" height="125" viewBox="0 0 174 125" fill="none">
  <ellipse cx="105.5" cy="22" rx="105.5" ry="103" fill="white" fill-opacity="0.1"/>
</svg>
      </div>
      <div className="border relative z-[9] max-md:px-4 border-dashed rounded-[16px]">
        <div className="mx-auto flex md:flex-row flex-col md:py-10 py-10 justify-between items-start md:items-center max-w-[1180px] ">
          <div className="">
            <h2 className="md:text-[48px] text-[36px] font-['Cairo'] font-bold text-[#fff] md:leading-[55px] leading-[40px] capitalize mb-4">
              Ready for a Fresh Look?
            </h2>
            <p className="font-['Urbanist'] font-medium text-[16px] text-[#fff] leading-[26px] mb-6">
              Book your appointment and experience grooming made for you
            </p>
          </div>
          <div className="">
            <PrimaryCTA />
          </div>
        </div>
      </div>
    </section>
  );
}
