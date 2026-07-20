import React from "react";
import communityVotesAward from "@/assets/images/awards/communityvotes-sherwood-park-2025-platinum.webp";
import qualityBusinessAward from "@/assets/images/awards/quality-business-award-2024.webp";

function Badges() {
  return (
    <div className="w-full border-b border-[#ececec] bg-white py-5.5">
      <div className="mx-auto flex max-w-[1280px] flex-wrap justify-center gap-4.5 px-4 md:px-8">
        <div className="flex min-w-[280px] items-center justify-center rounded-xl border border-[#ececec] px-7 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#d82028]/40 hover:shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
          <img
            src={communityVotesAward}
            alt="CommunityVotes Sherwood Park 2025 Platinum Winner - Voted Best in Barber Shops and Men's Hairdressers"
            className="h-36 w-auto object-contain"
          />
        </div>
        <div className="flex min-w-[280px] items-center justify-center rounded-xl border border-[#ececec] px-7 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#d82028]/40 hover:shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
          <img
            src={qualityBusinessAward}
            alt="Quality Business Awards 2024 Winner - House of Handsome Barbershop Ltd."
            className="h-36 w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Badges;
