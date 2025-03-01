"use client";

import Bubble from "@/components/bubble";
import DetailsPosts from "@/components/details-posts";
import LayoutArticle from "@/components/layout-article";
import Loading from "@/components/loading";
import RelevantTopics from "@/components/relevant-topics";
import { useAppContext } from "@/utils/context/use-context";
import { useParams } from "next/navigation";

export default function Posts() {
  const { slug } = useParams();
  const { posts } = useAppContext();
  const postDetails = posts.find((post) => post.slug === slug);

  if (!postDetails) {
    return <Loading />;
  }

  return (
    <main className="w-full pt-9 flex max-w-page mx-auto px-4">
      <DetailsPosts image={postDetails.image} data={postDetails.description} />
      <div className="flex-col gap-y-6 items-center mb-4 md:gap-x-4 md:mb-4 hidden md:flex w-full">
        <LayoutArticle title="Juniando">
          Ajudamos você Desenvolvedor Jr a conseguir sua primeira vaga no
          mercado de trabalho, com dicas e anúncios de vagas para você alavancar
          sua carreira.
        </LayoutArticle>

        <LayoutArticle title="Assuntos Relevantes">
          <div className="mx-auto w-24 h-two-pixels rounded-2xl bg-line-blue md:m-0 md:mx-auto lg:mx-auto lg:my-1" />
          <RelevantTopics />
        </LayoutArticle>
      </div>
      <Bubble />
    </main>
  );
}
