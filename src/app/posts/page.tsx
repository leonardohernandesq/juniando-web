import React from "react";

import Card from "@/components/card";
import { Post } from "@/utils/interfaces/posts";
import EmptyPage from "@/components/empty";

interface IPosts {
  searchParams: Promise<{ filter: string }>;
}

const Articles = async ({ searchParams }: IPosts) => {
  const { filter } = await searchParams;

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

  const filteredUrl = (postsToFiltered: Post[]) => {
    const newsPosts = postsToFiltered?.filter((item) =>
      item.tags.includes(filter)
    );
    return newsPosts;
  };

  const data = filter ? filteredUrl(posts.record.posts) : posts.record.posts;

  return (
    <section className="max-w-page py-10 m-auto">
      {data.length ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 items-center justify-between gap-4 m-auto px-4">
          {data.map((item: Post) => (
            <Card
              key={item.id}
              slug={item.slug}
              title={item.title}
              description={item.description}
              createdAt={new Date(item.createdAt)}
              author={item.author.name}
              image={item.image}
              tags={item.tags}
            />
          ))}
        </div>
      ) : (
        <EmptyPage />
      )}
    </section>
  );
};

export default Articles;
