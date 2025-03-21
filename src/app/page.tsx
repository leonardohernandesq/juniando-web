import Bubble from "@/components/bubble";
import Card from "@/components/card";
import HeroSection from "@/components/hero-section";
import LayoutArticle from "@/components/layout-article";
import Loading from "@/components/loading";
import PrincipalCard from "@/components/principal-card";
import RelevantTopics from "@/components/relevant-topics";
import { posts, postsMostViews } from "@/services/posts";

import { getImageWithPermission } from "@/utils/get-image-with-permission";
import { Post } from "@/utils/interfaces/posts";
import { techsRelevants } from "@/utils/mock/topich-relevants";

export default async function Home() {
  const currentPosts = await posts({ limit: 6 });
  const postsWithMostViews = await postsMostViews();

  const principalPost = currentPosts.find(
    (item: Post) => item.featured
  ) as Post;

  if (currentPosts.length === 0 || postsWithMostViews.length === 0) {
    return <Loading />;
  }

  return (
    <div className="w-full max-w-page m-auto px-4">
      <div className="w-full mt-10 flex justify-between gap-4">
        <PrincipalCard
          image={getImageWithPermission(
            (principalPost ?? currentPosts[0]).image.key
          )}
          author={(principalPost || currentPosts[0]).author.name}
          date={new Date((principalPost || currentPosts[0]).createdAt)}
          title={(principalPost || currentPosts[0]).title}
          slug={(principalPost || currentPosts[0]).slug}
        />

        <div className="flex-col gap-y-6 items-center mb-4 md:gap-x-4 md:mb-4 hidden md:flex">
          <LayoutArticle title="Juniando">
            Ajudamos você Desenvolvedor Jr a conseguir sua primeira vaga no
            mercado de trabalho, com dicas e anúncios de vagas para você
            alavangar sua carreira.
          </LayoutArticle>

          <LayoutArticle title="Assuntos Relevantes">
            <div className="mx-auto w-24 h-two-pixels rounded-2xl bg-line-blue md:m-0 md:mx-auto lg:mx-auto lg:my-1" />
            <RelevantTopics techsRelevants={techsRelevants(currentPosts)} />
          </LayoutArticle>
        </div>
      </div>

      <div>
        <HeroSection title="Mais Visualizados">
          {postsWithMostViews.map((item: Post) => (
            <Card
              key={item.id}
              slug={item.slug}
              title={item.title}
              description={item.description}
              createdAt={item.createdAt}
              author={item.author.name}
              image={item.image.url}
              tags={item.tags}
              view={item.views}
            />
          ))}
        </HeroSection>

        <HeroSection title="Últimos Posts">
          {currentPosts.map((item: Post) => (
            <Card
              key={item.id}
              slug={item.slug}
              title={item.title}
              description={item.description}
              createdAt={item.createdAt}
              author={item.author.name}
              image={item.image.url}
              tags={item.tags}
              view={item.views}
            />
          ))}
        </HeroSection>
        <Bubble />
      </div>
    </div>
  );
}
