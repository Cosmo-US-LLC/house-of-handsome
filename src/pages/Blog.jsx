import React from "react";
import { useParams } from "react-router-dom";
import SEO from "@/components/layout/SEO";
import BlogHero from "@/components/PageComponents/Blog/BlogHero";
import PostGrid from "@/components/PageComponents/Blog/PostGrid";
import posts from "@/data/blogPosts.json";

function Blog() {
  const { pageNum } = useParams();
  const page = Number(pageNum) || 1;

  return (
    <>
      <SEO
        title="Blog | House of Handsome Edmonton Barbershop"
        description="Grooming guides, style tips, and stories from House of Handsome — Edmonton's premium barbershop."
      />
      <div>
        <BlogHero />
        <PostGrid
          posts={posts}
          basePath="/our-edmonton-barbershop-blog"
          initialPage={page}
        />
      </div>
    </>
  );
}

export default Blog;
