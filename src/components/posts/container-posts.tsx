import React from "react";
import BlogPosts from "./blog-posts";
import ArticleObjetivoPosts from "./article-objetivo-posts";
import TopicPosts from "./topic-posts";
import BubblePosts from "./bubble-posts";

export default function ContainerPosts() {
  return (
    <main className="px-[155px] pt-9 grid grid-cols-[65%_35%] relative">
      <BlogPosts />
      <div className="flex flex-col gap-y-6 items-end">
        <ArticleObjetivoPosts title="Juniando">
          Ajudamos você Desenvolvedor Jr a conseguir sua primeira vaga no
          mercado de trabalho, com dicas e anúncios de vagas para você alavangar
          sua carreira.
        </ArticleObjetivoPosts>

        <ArticleObjetivoPosts title="Assuntos Relevantes">
          <div className="w-24 h-[2px] rounded-2xl bg-[#0565FF] m-auto mt-2 mb-4"></div>
          <TopicPosts />
        </ArticleObjetivoPosts>
      </div>
      <BubblePosts />
    </main>
  );
}
