"use client";

import React from "react";
import Card from "@/components/card";
import { usePosts } from "@/hooks/usePosts";
import Loading from "@/components/loading";

const Articles = () => {
  const { posts, isLoading } = usePosts();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="max-w-page grid sm:grid-cols-2 md:grid-cols-3 py-10 items-center justify-between gap-4 m-auto px-4">
      {posts.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </section>
  );
};

export default Articles;
