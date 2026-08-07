import React from "react";

function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#ececec] bg-white p-3 shadow-[0_-6px_20px_rgba(0,0,0,0.08)] md:hidden">
      <a
        href="https://phore.st/gnFjk"
        className="flex w-full items-center justify-center whitespace-nowrap rounded-[8px] bg-[#d82028] px-9 py-3.5 font-['Urbanist'] text-[16px] font-bold text-white transition-colors duration-300 hover:bg-[#b91219]"
      >
        Claim My Spot for $50
      </a>
    </div>
  );
}

export default StickyMobileCTA;
