import { Suspense } from "react";

import Loading from "@/components/loading";
import BlogPosts from "@/components/posts/blog-posts";
import ArticleObject from "@/components/posts/article-object-posts";
import TopicPosts from "@/components/posts/topic-posts";
import BubblePosts from "@/components/posts/bubble-posts";

export default async function PagePosts() {
  const response = await fetch("http://localhost:3000/mock-json/json.json");
  const { content }: { content: string } = await response.json();

  return (
    <Suspense fallback={<Loading />}>
      <main className="pt-9 flex gap-4 relative px-4 lg:px-40 max-w-page mx-auto">
        <BlogPosts image="/images/post-react.png" data={content} />
        <div className="flex-col gap-y-6 items-center mb-4 md:gap-x-4 md:mb-4 hidden md:flex">
          <ArticleObject title="Juniando">
            Ajudamos você Desenvolvedor Jr a conseguir sua primeira vaga no
            mercado de trabalho, com dicas e anúncios de vagas para você
            alavangar sua carreira.
          </ArticleObject>

          <ArticleObject title="Assuntos Relevantes">
            <div className="mx-auto w-24 h-two-pixels rounded-2xl bg-line-blue md:m-0 md:mx-auto lg:mx-auto lg:my-1" />
            <TopicPosts />
          </ArticleObject>
        </div>
        <BubblePosts />
      </main>
    </Suspense>
  );
}
