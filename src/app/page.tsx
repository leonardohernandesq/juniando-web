// "use client";
import Bubble from "@/components/bubble";
import Card from "@/components/card";
import HeroSection from "@/components/hero-section";
import LayoutArticle from "@/components/layout-article";
import Loading from "@/components/loading";
import PrincipalCard from "@/components/principal-card";
import RelevantTopics from "@/components/relevant-topics";
import { Post } from "@/utils/interfaces/posts";
import { techsRelevants } from "@/utils/mock/topich-relevants";
import AWS from "aws-sdk";
import { env } from "process";

const posts = async () =>
  await fetch(`${env.API_URL}/posts`, {
    next: {
      revalidate: 60, // 1 min
    },
  }).then((res) => {
    return res.json();
  });

export default async function Home() {
  const s3 = new AWS.S3({
    accessKeyId: "AKIA5WLTS2J6VPY6WW34", //
    secretAccessKey: "AKIA5WLTS2J6VPY6WW34",
    region: "us-east-2",
    signatureVersion: "v4",
  });

  const bucketName = "juniando";
  const fileKey = "1742253407127react.jpg";

  const url = s3.getSignedUrl("getObject", {
    Bucket: bucketName,
    Key: fileKey,
    Expires: 900,
  });

  console.log("URL assinada:", url);

  const currentPosts = await posts();

  const principalPost = currentPosts.record.posts.find(
    (item: Post) => item.featured
  ) as Post;

  if (currentPosts.length === 0) {
    return <Loading />;
  }

  return (
    <div className="w-full max-w-page m-auto px-4">
      <div className="w-full mt-10 flex justify-between gap-4">
        <PrincipalCard
          image={principalPost.image.url}
          author={principalPost.author.name}
          date={new Date(principalPost.createdAt)}
          title={principalPost.title}
          slug={principalPost.slug}
        />

        <div className="flex-col gap-y-6 items-center mb-4 md:gap-x-4 md:mb-4 hidden md:flex">
          <LayoutArticle title="Juniando">
            Ajudamos você Desenvolvedor Jr a conseguir sua primeira vaga no
            mercado de trabalho, com dicas e anúncios de vagas para você
            alavangar sua carreira.
          </LayoutArticle>

          <LayoutArticle title="Assuntos Relevantes">
            <div className="mx-auto w-24 h-two-pixels rounded-2xl bg-line-blue md:m-0 md:mx-auto lg:mx-auto lg:my-1" />
            <RelevantTopics
              techsRelevants={techsRelevants(currentPosts.record.posts)}
            />
          </LayoutArticle>
        </div>
      </div>

      <div>
        <HeroSection title="Mais Visualizados">
          {currentPosts.record.posts.map((item: Post) => (
            <Card
              key={item.id}
              slug={item.slug}
              title={item.title}
              description={item.description}
              createdAt={item.createdAt}
              author={item.author.name}
              image={item.image.url}
              tags={item.tags}
            />
          ))}
        </HeroSection>

        <HeroSection title="Últimos Posts">
          {currentPosts.record.posts.map((item: Post) => (
            <Card
              key={item.id}
              slug={item.slug}
              title={item.title}
              description={item.description}
              createdAt={item.createdAt}
              author={item.author.name}
              image={item.image.url}
              tags={item.tags}
            />
          ))}
        </HeroSection>
        <Bubble />
      </div>
    </div>
  );
}
