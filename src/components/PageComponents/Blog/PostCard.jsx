import React from "react";
import { Link } from "react-router-dom";

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function stripHtml(html) {
  return html.replace(/<[^>]*>/g, "").trim();
}

function PostCard({ post }) {
  return (
    <Link
      to={`/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-[#ececec] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#d82028]/40 hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
    >
      <div className="aspect-[16/10] w-full overflow-hidden bg-[#f5f5f5]">
        {post.image ? (
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center font-['Cairo'] text-[14px] font-semibold text-[#d82028]/40">
            House of Handsome
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        {post.categories?.length > 0 && (
          <span className="mb-2.5 block font-['Urbanist'] text-[12px] font-semibold uppercase tracking-[0.12em] text-[#d82028]">
            {post.categories[0].name}
          </span>
        )}
        <h3 className="mb-2.5 font-['Cairo'] text-[18px] font-bold leading-snug text-[#111111] group-hover:text-[#d82028] md:text-[20px]">
          {post.title}
        </h3>
        <p className="mb-4 line-clamp-3 font-['Urbanist'] text-[14px] text-[#6b6b6b] md:text-[15px]">
          {stripHtml(post.excerpt)}
        </p>
        <span className="mt-auto font-['Urbanist'] text-[13px] text-[#999999]">
          {formatDate(post.date)}
        </span>
      </div>
    </Link>
  );
}

export default PostCard;
