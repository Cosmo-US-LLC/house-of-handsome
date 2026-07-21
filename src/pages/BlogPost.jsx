import React from "react";
import { useParams, Navigate } from "react-router-dom";
import SEO from "@/components/layout/SEO";
import PostHero from "@/components/PageComponents/Blog/PostHero";
import PostContent from "@/components/PageComponents/Blog/PostContent";
import posts from "@/data/blogPosts.json";

function stripHtml(html) {
  return html.replace(/<[^>]*>/g, "").trim();
}

function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/our-edmonton-barbershop-blog" replace />;
  }

  return (
    <>
      <SEO
        title={`${post.title} | House of Handsome Blog`}
        description={stripHtml(post.excerpt).slice(0, 160)}
      />
      <div>
        <PostHero post={post} />
        <PostContent post={post} />
      </div>
    </>
  );
}

export default BlogPost;
