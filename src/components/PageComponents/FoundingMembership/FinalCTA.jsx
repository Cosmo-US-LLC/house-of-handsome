import React from "react";
import finalBg from "@/assets/images/location/shop_image/shop_image1.webp";

// Update as memberships sell, or leave null for the default scarcity line.
const SPOTS_REMAINING = null;

const MEMBERSHIP_LINK = "https://phore.st/gnFjk";

function FinalCTA() {
  const scarcityLabel =
    typeof SPOTS_REMAINING === "number" &&
    SPOTS_REMAINING >= 0 &&
    SPOTS_REMAINING <= 150
      ? `Only ${SPOTS_REMAINING} of 150 spots left.`
      : "Only 150 ever. First come, first served.";

  return (
    <section
      id="claim"
      className="relative w-full overflow-hidden bg-black bg-cover bg-center py-16 text-center md:py-[88px]"
      style={{ backgroundImage: `url(${finalBg})` }}
    >
      <div className="absolute inset-0 bg-black/85" />
      <div className="relative z-10 mx-auto max-w-[1080px] px-4 md:px-6">
        <p className="mb-3 font-['Urbanist'] text-[14px] font-semibold uppercase tracking-[0.2em] text-[#d82028]">
          The Founding 150 &middot; Red Deer
        </p>
        <h2 className="mb-4 font-['Cairo'] text-[30px] font-bold text-white md:text-[46px]">
          Your Chair Is <span className="text-[#d82028]">Waiting.</span>
        </h2>
        <p className="mx-auto mb-8 max-w-[58ch] font-['Urbanist'] text-[16px] text-white/70">
          Join the 150 men who will always call this shop theirs. {scarcityLabel}
        </p>
        <a
          href={MEMBERSHIP_LINK}
          className="inline-flex items-center justify-center whitespace-nowrap rounded-[8px] bg-[#d82028] px-9 py-4 font-['Urbanist'] text-[18px] font-bold text-white transition-colors duration-300 hover:bg-[#b91219]"
        >
          Claim My Spot for $50
        </a>
        <p className="mt-4 font-['Urbanist'] text-[14px] text-white/55">
          Secure checkout &middot; Opening in Fall 2026
        </p>
      </div>
    </section>
  );
}

export default FinalCTA;
