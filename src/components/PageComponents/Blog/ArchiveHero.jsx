import React from "react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/images/home/hero/hairdresser_barber_shop_styling_hair_client.webp";

function ArchiveHero({ kicker, name, count }) {
  return (
    <header
      className="relative overflow-hidden bg-black bg-cover bg-center py-24 md:py-32"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-black/85" />
      <div className="relative z-10 mx-auto max-w-[1280px] px-4 md:px-8">
        <Link
          to="/our-edmonton-barbershop-blog"
          className="mb-5 inline-block font-['Cairo'] text-[14px] font-semibold text-[#f2b8ba] hover:text-white hover:underline"
        >
          &larr; Back to the Blog
        </Link>
        <p className="mb-3.5 font-['Urbanist'] text-[14px] font-semibold uppercase tracking-[0.22em] text-[#f2b8ba]">
          {kicker}
        </p>
        <h1 className="font-['Cairo'] text-[28px] font-extrabold leading-[1.15] text-white md:text-[42px]">
          {name}
        </h1>
        <p className="mt-3.5 font-['Urbanist'] text-[16px] text-white/70">
          {count} {count === 1 ? "post" : "posts"}
        </p>
      </div>
    </header>
  );
}

export default ArchiveHero;
