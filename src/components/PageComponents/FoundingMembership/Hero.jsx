import React from "react";
import heroBg from "@/assets/images/home/hero/hairdresser_barber_shop_styling_hair_client.webp";

function Hero() {
  return (
    <header
      className="relative w-full overflow-hidden bg-black bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c0c0c]/95 via-[#1c1c1c]/90 to-[#141414]/95" />
      <div className="pointer-events-none absolute -right-[140px] -top-[140px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(216,32,40,0.28),transparent_65%)]" />

      <div className="relative z-10 mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-4 py-16 md:grid-cols-[1.1fr_0.9fr] md:gap-14 md:px-8 md:py-20">
        <div>
          <p className="mb-3 font-['Urbanist'] text-[12.5px] font-semibold uppercase tracking-[0.2em] text-[#f2b8ba]">
            Opening In Red Deer &middot; End of August
          </p>
          <h1 className="mb-3 font-['Cairo'] text-[34px] font-bold leading-[1.15] text-white md:text-[56px]">
            Become A <span className="text-[#d82028]">Founding Member.</span>
          </h1>
          <p className="mb-6 max-w-[48ch] font-['Urbanist'] text-[16px] font-medium text-white/85 md:text-[18px]">
            House of Handsome is Alberta's award-winning barbershop, now
            bringing its seventh location to Red Deer.
          </p>

          <div className="mb-6 max-w-[520px] rounded-2xl border border-white/15 bg-white/[0.06] p-5 md:p-6">
            <p className="mb-2 font-['Urbanist'] text-[14px] font-semibold uppercase tracking-[0.14em] text-white/65">
              Lifetime Membership
            </p>
            <div className="mb-3 flex items-baseline gap-3">
              <span className="font-['Cairo'] text-[22px] font-semibold text-white/40 line-through">
                $100
              </span>
              <span className="font-['Cairo'] text-[38px] font-bold text-white md:text-[44px]">
                $50
              </span>
              <span className="rounded-md bg-[#d82028] px-2.5 py-1 font-['Urbanist'] text-[12px] font-bold uppercase tracking-[0.08em] text-white">
                Founders Only
              </span>
            </div>
            <ul className="flex flex-col gap-1">
              {[
                "20% off every service, for life",
                "Free head massage with every visit",
                "Priority booking + numbered Founding Card",
              ].map((item) => (
                <li
                  key={item}
                  className="relative py-1 pl-[26px] font-['Urbanist'] text-[16px] text-white/90"
                >
                  <span className="absolute left-0 font-bold text-[#d82028]">
                    &#10003;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3.5 border-t border-white/10 pt-3 font-['Urbanist'] text-[14px] font-semibold text-[#f2b8ba]">
              Only 150 ever. First come, first served.
            </p>
          </div>

          <a
            href="https://phore.st/gnFjk"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-[8px] bg-[#d82028] px-9 py-4 font-['Urbanist'] text-[18px] font-bold text-white transition-colors duration-300 hover:bg-[#b91219]"
          >
            Claim My Spot for $50
          </a>
          <p className="mt-3.5 font-['Urbanist'] text-[14px] text-white/70">
            <span className="tracking-[1px] text-[#FBBC05]">&#9733;&#9733;&#9733;&#9733;&#9733;</span>{" "}
            4.9 on Google &middot; 3,000+ reviews across Alberta
          </p>
        </div>

        <div className="hidden md:flex md:h-full md:items-center md:justify-center">
          <div
            className="mx-auto w-full max-w-[500px] rounded-2xl border border-[#d82028]/50 bg-gradient-to-br from-[#181818] via-[#242424] to-[#131313] p-9 shadow-[0_28px_56px_rgba(0,0,0,0.55)]"
            style={{ transform: "rotate(-3deg)" }}
          >
            <div className="flex items-start justify-between">
              <span className="font-['Urbanist'] text-[16px] font-bold uppercase tracking-[0.16em] text-white">
                House of <em className="not-italic text-[#d82028]">Handsome</em>
              </span>
              <span className="font-['Cairo'] text-[13px] tracking-[0.14em] text-white/55">
                No. __ / 150
              </span>
            </div>
            <h3 className="mt-10 mb-1 font-['Cairo'] text-[32px] font-bold text-white">
              Founding Member
            </h3>
            <p className="font-['Urbanist'] text-[16px] text-white/60">
              Red Deer &middot; Charter Class
            </p>
            <div className="mt-8 flex justify-between border-t border-[#d82028]/40 pt-5 font-['Urbanist'] text-[13px] font-semibold uppercase tracking-[0.12em] text-[#d82028]">
              <span>Lifetime</span>
              <span>Est. 2026</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
