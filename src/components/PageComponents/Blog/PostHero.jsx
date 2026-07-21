import React from "react";
import { Link } from "react-router-dom";
import fallbackBg from "@/assets/images/home/hero/hairdresser_barber_shop_styling_hair_client.webp";

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function PostHero({ post }) {
  const bg = post.image || fallbackBg;

  return (
    <header
      className="relative overflow-hidden bg-black bg-cover bg-center py-24 md:py-32"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-black/80" />
      <div className="relative z-10 mx-auto max-w-[820px] px-4 md:px-6">
        <Link
          to="/our-edmonton-barbershop-blog"
          className="mb-5 inline-block font-['Cairo'] text-[14px] font-semibold text-[#f2b8ba] hover:text-white hover:underline"
        >
          &larr; Back to the Blog
        </Link>
        {post.categories?.length > 0 && (
          <p className="mb-3.5 font-['Urbanist'] text-[14px] font-semibold uppercase tracking-[0.22em] text-[#f2b8ba]">
            {post.categories[0].name}
          </p>
        )}
        <h1 className="font-['Cairo'] text-[28px] font-extrabold leading-[1.2] text-white md:text-[42px]">
          {post.title}
        </h1>
        <p className="mt-3.5 font-['Urbanist'] text-[16px] text-white/70">
          {formatDate(post.date)}
        </p>
      </div>
    </header>
  );
}

export default PostHero;
