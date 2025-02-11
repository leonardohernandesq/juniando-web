import React from "react";
import PostsBlog from "./posts-blog";

export default function ContainerPosts() {
  return (
    <main className="px-[155px] grid grid-cols-2 gap-x-24">
      <PostsBlog />
    </main>
  );
}
