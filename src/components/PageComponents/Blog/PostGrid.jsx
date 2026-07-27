import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostCard from "./PostCard";
import { getPageItems } from "@/lib/pagination";

const PAGE_SIZE = 9;

function PostGrid({ posts, basePath, initialPage = 1 }) {
  const navigate = useNavigate();
  const [page, setPage] = useState(initialPage);
  const totalPages = Math.max(1, Math.ceil(posts.length / PAGE_SIZE));
  const start = (page - 1) * PAGE_SIZE;
  const visible = posts.slice(start, start + PAGE_SIZE);

  const goToPage = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    if (basePath) {
      navigate(p === 1 ? basePath : `${basePath}/page/${p}`);
    }
  };

  return (
    <section className="w-full bg-white py-14 md:py-[84px]">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-12 flex flex-wrap items-center justify-end gap-2">
            <button
              type="button"
              onClick={() => goToPage(Math.max(1, page - 1))}
              disabled={page === 1}
              className="rounded-md border border-[#ececec] px-3.5 py-2 font-['Urbanist'] text-[14px] font-semibold text-[#111111] transition-colors hover:border-[#d82028] hover:text-[#d82028] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-[#ececec] disabled:hover:text-[#111111]"
            >
              Prev
            </button>

            {getPageItems(page, totalPages).map((item, i) =>
              item === "ellipsis" ? (
                <span key={`ellipsis-${i}`} className="px-1.5 font-['Urbanist'] text-[14px] text-[#999999]">
                  …
                </span>
              ) : (
                <button
                  key={item}
                  type="button"
                  onClick={() => goToPage(item)}
                  className={`min-w-9 rounded-md px-3.5 py-2 font-['Urbanist'] text-[14px] font-semibold transition-colors ${
                    item === page
                      ? "bg-[#d82028] text-white"
                      : "border border-[#ececec] text-[#111111] hover:border-[#d82028] hover:text-[#d82028]"
                  }`}
                >
                  {item}
                </button>
              )
            )}

            <button
              type="button"
              onClick={() => goToPage(Math.min(totalPages, page + 1))}
              disabled={page === totalPages}
              className="rounded-md border border-[#ececec] px-3.5 py-2 font-['Urbanist'] text-[14px] font-semibold text-[#111111] transition-colors hover:border-[#d82028] hover:text-[#d82028] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-[#ececec] disabled:hover:text-[#111111]"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default PostGrid;
