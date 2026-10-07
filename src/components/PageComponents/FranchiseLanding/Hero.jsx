import heroImage from "@/assets/images/franchise/franchise_hero/franchise_landing_hero.webp";
import { HERO_STATS } from "./data";

function Hero() {
  return (
    <section id="top" className="bg-[#111111] text-white pb-14 pt-[calc(64px+3.5rem)] md:pb-[72px] md:pt-[calc(64px+72px)]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-10 px-4 md:px-8 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col gap-6">
          <h1 className="font-['Cairo'] text-[38px] font-bold leading-[1.1] sm:text-[48px] lg:text-[60px]">
            Run your own <span className="text-[#d82028]">House of Handsome.</span>
          </h1>
          <p className="max-w-[540px] font-['Urbanist'] text-[16px] font-medium leading-[26px] text-[#d6d3ce] md:text-[18px]">
            Our Shop-in-Shop model lets you operate a House of Handsome barbershop with the brand, booking system,
            marketing and training already in place. You run the shop. We back you.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="#apply" className="inline-flex items-center justify-center rounded-[10px] bg-[#d82028] px-6 py-4 font-['Urbanist'] text-[16px] font-bold text-white transition-colors hover:bg-[#b91219]">
              Explore Franchise Opportunities
            </a>
            <a href="#model" className="inline-flex items-center justify-center rounded-[10px] border border-[#5a5754] px-6 py-4 font-['Urbanist'] text-[16px] font-semibold text-white transition-colors hover:bg-white/10">
              See How the Model Works
            </a>
          </div>
          <div className="grid grid-cols-3 gap-4 border-t border-[#2e2c2a] pt-5 font-['Urbanist'] text-[13px] text-[#d6d3ce] sm:flex sm:flex-wrap sm:gap-8 sm:text-[15px]">
            {HERO_STATS.map((s) => (
              <div key={s.value}>
                <strong className="block font-['Cairo'] text-[18px] text-white sm:text-[22px]">{s.value}</strong>
                {s.label}
              </div>
            ))}
          </div>
        </div>
        <img
          src={heroImage}
          alt="House of Handsome barbers cutting hair inside the shop"
          className="h-[280px] w-full rounded-[10px] object-cover sm:h-[380px] lg:h-[460px]"
        />
      </div>
    </section>
  );
}

export default Hero;
