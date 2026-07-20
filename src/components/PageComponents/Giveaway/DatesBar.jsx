import React from "react";

const DATES = [
  { label: "Entries Close", value: "End of August" },
  { label: "Draw", value: "Live at our opening event, End of August" },
  { label: "Winners Notified", value: "By email within 48 hours of the draw" },
];

function DatesBar() {
  return (
    <div className="w-full border-b border-[#ececec] bg-[#f5f5f5] py-6">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-6 px-4 md:grid-cols-3 md:gap-9 md:px-8">
        {DATES.map((d, i) => (
          <div
            key={d.label}
            className={`flex flex-col ${
              i === 0
                ? "items-start text-left"
                : i === 1
                ? "items-center text-center"
                : "items-end text-right"
            }`}
          >
            <span className="font-['Cairo'] text-[15px] font-bold uppercase tracking-[0.12em] text-[#d82028]">
              {d.label}
            </span>
            <span className="font-['Urbanist'] text-[18px] font-medium text-[#333333]">
              {d.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DatesBar;
