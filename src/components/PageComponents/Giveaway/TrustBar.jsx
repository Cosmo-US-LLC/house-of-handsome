import React from "react";

function TrustBar() {
  return (
    <div className="w-full bg-[#d82028] py-4">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-4 px-4 md:px-8">
        <span className="font-['Cairo'] text-[16px] font-bold text-white">
          6 Shops Across Alberta.{" "}
          <em className="not-italic text-[#ffd7d9]">Red Deer Makes 7.</em>
        </span>
        <span className="font-['Urbanist'] text-[14px] tracking-[0.02em] text-white/85">
          Sherwood Park &middot; Spruce Grove &middot; Whyte Avenue &middot;
          Edmonton Downtown &middot; South Common &middot; Cameron Heights
        </span>
      </div>
    </div>
  );
}

export default TrustBar;
