import React from "react";
import { useParams, Navigate } from "react-router-dom";
import SEO from "@/components/layout/SEO";
import ArchiveHero from "@/components/PageComponents/Blog/ArchiveHero";
import PostGrid from "@/components/PageComponents/Blog/PostGrid";
import posts from "@/data/blogPosts.json";
import categories from "@/data/blogCategories.json";

function BlogCategory() {
  const { categorySlug } = useParams();
  const category = categories.find((c) => c.slug === categorySlug);
  const filtered = posts.filter((p) =>
    p.categories.some((c) => c.slug === categorySlug)
  );

  if (!category || filtered.length === 0) {
    return <Navigate to="/our-edmonton-barbershop-blog" replace />;
  }

  return (
    <>
      <SEO
        title={`${category.name} | House of Handsome Blog`}
        description={`Posts in "${category.name}" from the House of Handsome Edmonton barbershop blog.`}
      />
      <div>
        <ArchiveHero
          kicker="Category"
          name={category.name}
          count={filtered.length}
        />
        <PostGrid posts={filtered} />
      </div>
    </>
  );
}

export default BlogCategory;
