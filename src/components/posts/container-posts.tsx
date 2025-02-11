import React from "react";
import BlogPosts from "./blog-posts";

export default function ContainerPosts() {
  return (
    <main className="px-[155px] grid grid-cols-2 gap-x-24">
      <BlogPosts />
    </main>
  );
}
