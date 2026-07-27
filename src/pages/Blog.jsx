import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SEO from "@/components/layout/SEO";
import BlogHero from "@/components/PageComponents/Blog/BlogHero";
import PostGrid from "@/components/PageComponents/Blog/PostGrid";
import { getPosts } from "@/lib/blogApi";

function Blog() {
  const { pageNum } = useParams();
  const page = Number(pageNum) || 1;
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setPosts(null);
    setError(false);

    getPosts({ limit: 1000 })
      .then(({ posts }) => {
        if (!cancelled) setPosts(posts);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <SEO
        title="Blog | House of Handsome Edmonton Barbershop"
        description="Grooming guides, style tips, and stories from House of Handsome — Edmonton's premium barbershop."
      />
      <div>
        <BlogHero />
        {error ? (
          <p className="mx-auto max-w-[1280px] px-4 py-14 text-center font-['Urbanist'] text-[#6b6b6b] md:px-8">
            Couldn't load posts right now. Please try again shortly.
          </p>
        ) : posts === null ? (
          <p className="mx-auto max-w-[1280px] px-4 py-14 text-center font-['Urbanist'] text-[#6b6b6b] md:px-8">
            Loading posts…
          </p>
        ) : (
          <PostGrid
            posts={posts}
            basePath="/our-edmonton-barbershop-blog"
            initialPage={page}
          />
        )}
      </div>
    </>
  );
}

export default Blog;
