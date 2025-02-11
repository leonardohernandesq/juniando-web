import React from "react";
import BlogPosts from "./blog-posts";
import ArticleObjetivoPosts from "./article-objetivo-posts";
import TopicPosts from "./topic-posts";

export default function ContainerPosts() {
  return (
    <main className="px-[155px] pt-9 grid grid-cols-2 gap-x-24">
      <BlogPosts />
      <div className="flex flex-col gap-y-6">
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
    </main>
  );
}
