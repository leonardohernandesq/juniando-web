// "use client";

import Bubble from "@/components/bubble";
import Card from "@/components/card";
import HeroSection from "@/components/hero-section";
import LayoutArticle from "@/components/layout-article";
import Loading from "@/components/loading";
import PrincipalCard from "@/components/principal-card";
import RelevantTopics from "@/components/relevant-topics";
import { Post } from "@/utils/interfaces/posts";

export default async function Home() {
  const posts = await fetch(
    "https://api.jsonbin.io/v3/b/67be1eaaacd3cb34a8f06a64",
    {
      next: {
        revalidate: 60, // 1 min
      },
    }
  ).then((res) => {
    return res.json();
  });

  if (posts.length === 0) {
    return <Loading />;
  }

  return (
    <div className="w-full max-w-page m-auto px-4">
      <div className="w-full mt-10 flex justify-between gap-4">
        <PrincipalCard
          image={posts.record.posts[0].image}
          author={posts.record.posts[0].author.name}
          date={new Date(posts.record.posts[0].createdAt)}
          title={posts.record.posts[0].title}
          slug={posts.record.posts[0].slug}
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
          {posts.record.posts.map((item: Post) => (
            <Card
              key={item.id}
              slug={item.slug}
              title={item.title}
              description={item.description}
              createdAt={item.createdAt}
              author={item.author.name}
              image={item.image}
            />
          ))}
        </HeroSection>

        <HeroSection title="Últimos Posts">
          {posts.record.posts.map((item: Post) => (
            <Card
              key={item.id}
              slug={item.slug}
              title={item.title}
              description={item.description}
              createdAt={item.createdAt}
              author={item.author.name}
              image={item.image}
            />
          ))}
        </HeroSection>
        <Bubble />
      </div>
    </div>
  );
}
