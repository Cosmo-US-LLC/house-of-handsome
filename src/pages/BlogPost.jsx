import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import SEO from "@/components/layout/SEO";
import PostHero from "@/components/PageComponents/Blog/PostHero";
import PostContent from "@/components/PageComponents/Blog/PostContent";
import { getPostBySlug } from "@/lib/blogApi";

function stripHtml(html) {
  return html.replace(/<[^>]*>/g, "").trim();
}

function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setPost(null);
    setNotFound(false);

    getPostBySlug(slug)
      .then((post) => {
        if (!cancelled) setPost(post);
      })
      .catch(() => {
        if (!cancelled) setNotFound(true);
      });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (notFound) {
    return <Navigate to="/our-edmonton-barbershop-blog" replace />;
  }

  if (!post) {
    return (
      <p className="mx-auto max-w-[820px] px-4 py-24 text-center font-['Urbanist'] text-[#6b6b6b] md:px-6">
        Loading post…
      </p>
    );
  }

  return (
    <>
      <SEO
        title={`${post.title} | House of Handsome Blog`}
        description={stripHtml(post.excerpt ?? "").slice(0, 160)}
      />
      <div>
        <PostHero post={post} />
        <PostContent post={post} />
      </div>
    </>
  );
}

export default BlogPost;
