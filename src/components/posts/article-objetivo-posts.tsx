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
    <article>
      <h1>{title}</h1>
      {children}
    </article>
  );
}
