import React from "react";

const DATES = [
  { label: "Entries Close", value: "End of August" },
  { label: "Draw", value: "Live at our opening event, End of August" },
  { label: "Winners Notified", value: "By email within 48 hours of the draw" },
];

function DatesBar() {
  return (
    <div className="w-full border-b border-[#ececec] bg-[#f5f5f5] py-4.5">
      <div className="mx-auto flex max-w-[1280px] flex-wrap gap-9 px-4 md:px-8">
        {DATES.map((d) => (
          <div key={d.label} className="flex flex-col">
            <span className="font-['Cairo'] text-[12px] font-bold uppercase tracking-[0.12em] text-[#d82028]">
              {d.label}
            </span>
            <span className="font-['Urbanist'] text-[14px] font-medium text-[#333333]">
              {d.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DatesBar;
