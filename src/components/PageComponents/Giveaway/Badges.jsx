import React from "react";

function Badges() {
  return (
    <div className="w-full border-b border-[#ececec] bg-white py-5.5">
      <div className="mx-auto flex max-w-[1280px] flex-wrap justify-center gap-4.5 px-4 md:px-8">
        <div className="flex min-w-[280px] flex-col items-center gap-1 rounded-xl border border-[#ececec] px-7 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#d82028]/40 hover:shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
          <span className="font-['Urbanist'] text-[12px] font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
            CommunityVotes Sherwood Park
          </span>
          <span className="font-['Cairo'] text-[20px] font-extrabold text-[#b9862e]">
            2023 Silver Winner
          </span>
          <span className="font-['Urbanist'] text-[12.5px] text-[#6b6b6b]">
            Voted Best in Barber Shops and Men's Hairdressers
          </span>
        </div>
        <div className="flex min-w-[280px] flex-col items-center gap-1 rounded-xl border border-[#ececec] px-7 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#d82028]/40 hover:shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
          <span className="font-['Urbanist'] text-[12px] font-semibold uppercase tracking-[0.14em] text-[#6b6b6b]">
            Quality Business Awards
          </span>
          <span className="font-['Cairo'] text-[20px] font-extrabold text-[#b9862e]">
            2024 Winner
          </span>
          <span className="font-['Urbanist'] text-[12.5px] text-[#6b6b6b]">
            House of Handsome Barbershop Ltd.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Badges;
