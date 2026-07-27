import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import SEO from "@/components/layout/SEO";
import ArchiveHero from "@/components/PageComponents/Blog/ArchiveHero";
import PostGrid from "@/components/PageComponents/Blog/PostGrid";
import { getPosts } from "@/lib/blogApi";

function BlogTag() {
  const { tagSlug, pageNum } = useParams();
  const page = Number(pageNum) || 1;
  const [posts, setPosts] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setPosts(null);
    setNotFound(false);

    getPosts({ tag: tagSlug, limit: 1000 })
      .then(({ posts }) => {
        if (cancelled) return;
        if (posts.length === 0) {
          setNotFound(true);
        } else {
          setPosts(posts);
        }
      })
      .catch(() => {
        if (!cancelled) setNotFound(true);
      });

    return () => {
      cancelled = true;
    };
  }, [tagSlug]);

  if (notFound) {
    return <Navigate to="/our-edmonton-barbershop-blog" replace />;
  }

  if (!posts) {
    return (
      <p className="mx-auto max-w-[1280px] px-4 py-14 text-center font-['Urbanist'] text-[#6b6b6b] md:px-8">
        Loading posts…
      </p>
    );
  }

  const tag = posts[0]?.tags?.find((t) => t.slug === tagSlug);
  const tagName = tag?.name ?? tagSlug;

  return (
    <>
      <SEO
        title={`${tagName} | House of Handsome Blog`}
        description={`Posts tagged "${tagName}" from the House of Handsome Edmonton barbershop blog.`}
      />
      <div>
        <ArchiveHero kicker="Tag" name={tagName} count={posts.length} />
        <PostGrid posts={posts} basePath={`/tag/${tagSlug}`} initialPage={page} />
      </div>
    </>
  );
}

export default BlogTag;
