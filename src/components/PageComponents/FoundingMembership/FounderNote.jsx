import React from "react";

function FounderNote() {
  return (
    <section className="w-full bg-[#f5f5f5] py-14 text-center md:py-[72px]">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6">
        <p className="mb-6 font-['Urbanist'] text-[13px] font-semibold uppercase tracking-[0.2em] text-[#d82028]">
          Founder's Note
        </p>
        <p className="mx-auto mb-7 max-w-[60ch] font-['Urbanist'] text-[16.5px] text-[#333333]">
          House of Handsome was born from a love for the craft and a desire
          to create something lasting. Red Deer, we're building this shop
          for you, and the first 150 men who back us will always have a
          special place in it. Thank you for being part of the journey.
        </p>
        <p
          className="text-[54px] leading-none text-[#d82028]"
          style={{ fontFamily: "'Rouge Script', cursive" }}
        >
          Alex
        </p>
        <p className="mt-2.5 font-['Urbanist'] text-[13px] font-semibold uppercase tracking-[0.18em] text-[#6b6b6b]">
          Founder
        </p>
      </div>
    </section>
  );
}

export default FounderNote;
