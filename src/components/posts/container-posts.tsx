import React from "react";
import ArticleObjetivoPosts from "./article-objetivo-posts";
import TopicPosts from "./topic-posts";
import BubblePosts from "./bubble-posts";
import "./loading.css";

const BlogPosts = React.lazy(() => import("./blog-posts"));

export default function ContainerPosts() {
  return (
    <main className="px-[155px] pt-9 grid lg:grid-cols-[65%_35%] relative md:grid-cols-1 sm:grid-cols-1">
      <BlogPosts />
      <div className="flex lg:flex-col gap-y-6 items-end md:flex-row md:gap-x-4 md:mb-4">
        <ArticleObjetivoPosts title="Juniando">
          Ajudamos você Desenvolvedor Jr a conseguir sua primeira vaga no
          mercado de trabalho, com dicas e anúncios de vagas para você alavangar
          sua carreira.
        </ArticleObjetivoPosts>

        <ArticleObjetivoPosts title="Assuntos Relevantes">
          <div className="w-24 h-[2px] rounded-2xl bg-[#0565FF] lg:mx-auto lg:my-1 md:m-0 md:mx-auto"></div>
          <TopicPosts />
        </ArticleObjetivoPosts>
      </div>
      <BubblePosts />
    </main>
  );
}
