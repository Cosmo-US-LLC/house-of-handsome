import React, { useState } from "react";
import PostCard from "./PostCard";

const PAGE_SIZE = 9;

function PostGrid({ posts }) {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(posts.length / PAGE_SIZE));
  const start = (page - 1) * PAGE_SIZE;
  const visible = posts.slice(start, start + PAGE_SIZE);

  const goToPage = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
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
          <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => goToPage(Math.max(1, page - 1))}
              disabled={page === 1}
              className="rounded-md border border-[#ececec] px-3.5 py-2 font-['Urbanist'] text-[14px] font-semibold text-[#111111] transition-colors hover:border-[#d82028] hover:text-[#d82028] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-[#ececec] disabled:hover:text-[#111111]"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => goToPage(p)}
                className={`min-w-9 rounded-md px-3.5 py-2 font-['Urbanist'] text-[14px] font-semibold transition-colors ${
                  p === page
                    ? "bg-[#d82028] text-white"
                    : "border border-[#ececec] text-[#111111] hover:border-[#d82028] hover:text-[#d82028]"
                }`}
              >
                {p}
              </button>
            ))}

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
