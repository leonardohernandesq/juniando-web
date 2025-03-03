import React from "react";

import Card from "@/components/card";
import { Post } from "@/utils/interfaces/posts";

const Articles = async () => {
  const posts = await fetch(
    "https://api.jsonbin.io/v3/b/67be1eaaacd3cb34a8f06a64",
    {
      next: {
        revalidate: 60, // 1 min
      },
    }
  ).then((res) => {
    return res.json();
  });

  return (
    <section className="max-w-page grid sm:grid-cols-2 md:grid-cols-3 py-10 items-center justify-between gap-4 m-auto px-4">
      {posts.record.posts.map((item: Post) => (
        <Card
          key={item.id}
          slug={item.slug}
          title={item.title}
          description={item.description}
          createdAt={new Date(item.createdAt)}
          author={item.author.name}
          image={item.image}
        />
      ))}
    </section>
  );
};

export default Articles;
