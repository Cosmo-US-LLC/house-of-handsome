import React from "react";
import SEO from "@/components/layout/SEO";
import BlogHero from "@/components/PageComponents/Blog/BlogHero";
import PostGrid from "@/components/PageComponents/Blog/PostGrid";
import posts from "@/data/blogPosts.json";

function Blog() {
  return (
    <>
      <SEO
        title="Blog | House of Handsome Edmonton Barbershop"
        description="Grooming guides, style tips, and stories from House of Handsome — Edmonton's premium barbershop."
      />
      <div>
        <BlogHero />
        <PostGrid posts={posts} />
      </div>
    </>
  );
}

export default Blog;
