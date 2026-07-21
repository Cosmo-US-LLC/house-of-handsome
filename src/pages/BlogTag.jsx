import React from "react";
import { useParams, Navigate } from "react-router-dom";
import SEO from "@/components/layout/SEO";
import ArchiveHero from "@/components/PageComponents/Blog/ArchiveHero";
import PostGrid from "@/components/PageComponents/Blog/PostGrid";
import posts from "@/data/blogPosts.json";
import tags from "@/data/blogTags.json";

function BlogTag() {
  const { tagSlug } = useParams();
  const tag = tags.find((t) => t.slug === tagSlug);
  const filtered = posts.filter((p) =>
    p.tags.some((t) => t.slug === tagSlug)
  );

  if (!tag || filtered.length === 0) {
    return <Navigate to="/our-edmonton-barbershop-blog" replace />;
  }

  return (
    <>
      <SEO
        title={`${tag.name} | House of Handsome Blog`}
        description={`Posts tagged "${tag.name}" from the House of Handsome Edmonton barbershop blog.`}
      />
      <div>
        <ArchiveHero kicker="Tag" name={tag.name} count={filtered.length} />
        <PostGrid posts={filtered} />
      </div>
    </>
  );
}

export default BlogTag;
