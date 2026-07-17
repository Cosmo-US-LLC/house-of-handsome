import React from "react";

const PLACEHOLDERS = [
  "[REPLACE: interior photo · Whyte Avenue]",
  "[REPLACE: haircut in progress · Edmonton Downtown]",
  "[REPLACE: hot towel shave · Sherwood Park]",
  "[REPLACE: finished cut / client · South Common]",
];

function Gallery() {
  return (
    <section className="w-full bg-white pb-14 md:pb-[72px]">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6">
        <div className="mb-10">
          <p className="mb-3 font-['Urbanist'] text-[13px] font-semibold uppercase tracking-[0.2em] text-[#d82028]">
            Inside House of Handsome
          </p>
          <h2 className="mb-3 font-['Cairo'] text-[28px] font-bold tracking-[-0.01em] text-[#111111] md:text-[38px]">
            Same Chairs. Same Craft. <span className="text-[#d82028]">New City.</span>
          </h2>
          <p className="max-w-[58ch] font-['Urbanist'] text-[15.5px] text-[#6b6b6b]">
            The Red Deer shop is being built right now. Here's what every
            House of Handsome looks like inside.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {PLACEHOLDERS.map((label) => (
            <div
              key={label}
              className="flex aspect-[4/5] items-center justify-center rounded-xl border-2 border-dashed border-[#c9c9c9] p-4 text-center font-['Urbanist'] text-[13px] font-semibold text-[#6b6b6b]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, #f0f0f0, #f0f0f0 12px, #e8e8e8 12px, #e8e8e8 24px)",
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
