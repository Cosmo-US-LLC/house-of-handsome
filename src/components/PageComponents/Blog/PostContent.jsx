import React from "react";
import { Link } from "react-router-dom";

const contentClasses = [
  "font-['Urbanist'] text-[16px] leading-[1.75] text-[#333333]",
  "[&_h1]:font-['Cairo'] [&_h1]:text-[26px] [&_h1]:md:text-[32px] [&_h1]:font-bold [&_h1]:text-[#111111] [&_h1]:mt-9 [&_h1]:mb-4",
  "[&_h2]:font-['Cairo'] [&_h2]:text-[22px] [&_h2]:md:text-[26px] [&_h2]:font-bold [&_h2]:text-[#111111] [&_h2]:mt-9 [&_h2]:mb-3.5",
  "[&_h3]:font-['Cairo'] [&_h3]:text-[19px] [&_h3]:md:text-[21px] [&_h3]:font-bold [&_h3]:text-[#111111] [&_h3]:mt-7 [&_h3]:mb-3",
  "[&_h4]:font-['Cairo'] [&_h4]:text-[18px] [&_h4]:font-bold [&_h4]:text-[#111111] [&_h4]:mt-6 [&_h4]:mb-2.5",
  "[&_p]:mb-4.5",
  "[&_a]:font-semibold [&_a]:text-[#d82028] [&_a]:hover:underline",
  "[&_strong]:font-semibold [&_strong]:text-[#111111]",
  "[&_ul]:my-4 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-[22px]",
  "[&_ol]:my-4 [&_ol]:list-decimal [&_ol]:space-y-1.5 [&_ol]:pl-[22px]",
  "[&_li]:pl-1",
  "[&_blockquote]:my-6 [&_blockquote]:border-l-4 [&_blockquote]:border-[#d82028] [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:text-[#555555]",
  "[&_img]:my-6 [&_img]:w-full [&_img]:rounded-xl [&_img]:h-auto",
  "[&_table]:w-full [&_table]:my-6 [&_table]:border-collapse",
  "[&_td]:border [&_td]:border-[#ececec] [&_td]:p-2.5",
  "[&_th]:border [&_th]:border-[#ececec] [&_th]:p-2.5 [&_th]:bg-[#f5f5f5]",
].join(" ");

function PostContent({ post }) {
  return (
    <main className="py-14 md:py-[72px]">
      <div className="mx-auto max-w-[820px] px-4 md:px-6">
        <div
          className={contentClasses}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {post.tags?.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-2 border-t border-[#ececec] pt-8">
            {post.tags.map((tag) => (
              <Link
                key={tag.slug}
                to={`/tag/${tag.slug}`}
                className="rounded-md bg-[#f5f5f5] px-3 py-1.5 font-['Urbanist'] text-[12px] font-semibold uppercase tracking-[0.08em] text-[#6b6b6b] transition-colors hover:bg-[#d82028] hover:text-white"
              >
                {tag.name}
              </Link>
            ))}
          </div>
        )}

        <Link
          to="/our-edmonton-barbershop-blog"
          className="mt-12 inline-block font-['Cairo'] text-[14px] font-semibold text-[#d82028] hover:underline"
        >
          &larr; Back to the Blog
        </Link>
      </div>
    </main>
  );
}

export default PostContent;
