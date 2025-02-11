import { ReactNode } from "react";

type articleObjetivo = {
  title: string;
  children: ReactNode;
};

export default function ArticleObjetivoPosts({
  title,
  children,
}: articleObjetivo) {
  return (
    <article className="text-center shadow-md rounded-2xl px-4 py-7 w-[290px] flex flex-col">
      <h1 className="font-bold text-xl">{title}</h1>
      <span className="text-[14px]">{children}</span>
    </article>
  );
}
