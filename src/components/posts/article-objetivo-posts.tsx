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
    <article className="text-center shadow-md rounded-2xl px-4 py-7 w-[290px] flex flex-col md:max-h-56">
      <h1 className="font-bold text-xl md:text-base">{title}</h1>
      <span className="text-[14px] md:text-sm">{children}</span>
    </article>
  );
}
