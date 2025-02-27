"use client";
import Bubble from "@/components/bubble";
import Card from "@/components/card";
import HeroSection from "@/components/hero-section";
import LayoutArticle from "@/components/layout-article";
import Loading from "@/components/loading";
import PrincipalCard from "@/components/principal-card";
import RelevantTopics from "@/components/relevant-topics";
import { useAppContext } from "@/utils/context/use-context";
import { formatDate } from "@/utils/format-date";
import {
  getLatestPosts,
  getMainPost,
  getMostViewed,
} from "@/utils/post-selector";

export default function Home() {
  const { posts } = useAppContext();

  const mostViewed = getMostViewed(posts);
  const latestPosts = getLatestPosts(posts);
  const mainPost = getMainPost(posts);

  if (posts.length === 0) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="max-w-page m-auto px-4">
      <div className="w-full mt-10 flex justify-between gap-4">
        <PrincipalCard
          image={mainPost[0].image}
          author={mainPost[0].author.name}
          date={formatDate(new Date(mainPost[0].createdAt))}
          title={mainPost[0].title}
        />

        <div className="flex-col gap-y-6 items-center mb-4 md:gap-x-4 md:mb-4 hidden md:flex">
          <LayoutArticle title="Juniando">
            Ajudamos você Desenvolvedor Jr a conseguir sua primeira vaga no
            mercado de trabalho, com dicas e anúncios de vagas para você
            alavangar sua carreira.
          </LayoutArticle>

          <LayoutArticle title="Assuntos Relevantes">
            <div className="mx-auto w-24 h-two-pixels rounded-2xl bg-line-blue md:m-0 md:mx-auto lg:mx-auto lg:my-1" />
            <RelevantTopics />
          </LayoutArticle>
        </div>
      </div>

      <div>
        <HeroSection title="Mais Visualizados">
          {mostViewed.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </HeroSection>

        <HeroSection title="Últimos Posts">
          {latestPosts.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </HeroSection>
        <Bubble />
      </div>
    </div>
  );
}
