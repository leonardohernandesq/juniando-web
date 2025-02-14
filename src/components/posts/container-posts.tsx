import React, { Suspense } from "react";
import ArticleObject from "./article-objetivo-posts";
import TopicPosts from "./topic-posts";
import BubblePosts from "./bubble-posts";
import "./loading.css";

const BlogPosts = React.lazy(() => import("./blog-posts"));

export default function ContainerPosts() {
  return (
    <Suspense fallback={<div className="loader m-auto my-4"></div>}>
      <main className="pt-9 grid relative px-4 md:grid-cols-1 md:px-[155px] lg:grid-cols-[65%_35%] lg:px-[155px">
        <BlogPosts />
        <div className="flex flex-col gap-y-6 items-center mb-4 md:items-end md:flex-row md:gap-x-4 md:mb-4 lg:items-end lg:flex-col ">
          <ArticleObject title="Juniando">
            Ajudamos você Desenvolvedor Jr a conseguir sua primeira vaga no
            mercado de trabalho, com dicas e anúncios de vagas para você
            alavangar sua carreira.
          </ArticleObject>

          <ArticleObject title="Assuntos Relevantes">
            <div className="mx-auto w-24 h-[2px] rounded-2xl bg-[#0565FF] md:m-0 md:mx-auto lg:mx-auto lg:my-1"></div>
            <TopicPosts />
          </ArticleObject>
        </div>
        <BubblePosts />
      </main>
    </Suspense>
  );
}
