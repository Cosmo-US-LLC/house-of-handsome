import React from "react";
import heroBg from "@/assets/images/home/hero/hairdresser_barber_shop_styling_hair_client.webp";

function BlogHero() {
  return (
    <header
      className="relative overflow-hidden bg-black bg-cover bg-center py-24 md:py-36"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-black/85" />
      <div className="relative z-10 mx-auto max-w-[1280px] px-4 md:px-8">
        <p className="mb-3.5 font-['Urbanist'] text-[14px] font-semibold uppercase tracking-[0.22em] text-[#f2b8ba]">
          House of Handsome
        </p>
        <h1 className="font-['Cairo'] text-[32px] font-extrabold leading-[1.15] text-white md:text-[48px]">
          Our Edmonton Barbershop <span className="text-[#d82028]">Blog</span>
        </h1>
        <p className="mt-3.5 max-w-[640px] font-['Urbanist'] text-[16px] text-white/70 md:text-[18px]">
          Grooming guides, style tips, and stories from the House of Handsome
          chair.
        </p>
      </div>
    </header>
  );
}

export default BlogHero;
