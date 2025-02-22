import { ReactNode } from "react";

interface IArticleObject {
  title: string;
  children: ReactNode;
}

export default function ArticleObjectPosts({
  title,
  children,
}: IArticleObject) {
  return (
    <article className="text-center shadow-md rounded-2xl px-4 py-7 w-72 flex flex-col md:max-h-56">
      <h1 className="font-bold text-xl md:text-base">{title}</h1>
      <span className="text-sm md:text-sm">{children}</span>
    </article>
  );
}
