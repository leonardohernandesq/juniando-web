import Bubble from "@/components/bubble";
import DetailsPosts from "@/components/details-posts";
import LayoutArticle from "@/components/layout-article";
import Loading from "@/components/loading";
import RelevantTopics from "@/components/relevant-topics";

import "@/styles/details-post.css";
import { Post } from "@/utils/interfaces/posts";
import { techsRelevants } from "@/utils/mock/topich-relevants";
import { cleanDescription } from "@/utils/text-clean-tags-html";
import { Metadata } from "next";

interface IPostsDetail {
  params: Promise<{ slug: string }>;
}

const posts = async () =>
  await fetch("https://api.jsonbin.io/v3/b/67be1eaaacd3cb34a8f06a64", {
    next: {
      revalidate: 60 * 60 * 24, // 24 hours
    },
  }).then((res) => {
    return res.json();
  });

async function getPostDetails(slug: string) {
  const responsePosts = await posts();
  return responsePosts.record.posts.find((post: Post) => post.slug === slug);
}

export async function generateMetadata({
  params,
}: IPostsDetail): Promise<Metadata> {
  const slug = (await params).slug;
  const postDetails = await getPostDetails(slug);

  if (!postDetails) {
    return { title: "Post não encontrado" };
  }

  return {
    title: `Juniando: ${postDetails.title}`,
    description: cleanDescription(postDetails.description),
    openGraph: {
      title: `Juniando: ${postDetails.title}`,
      description: cleanDescription(postDetails.description),
      url: `https://juniando.vercel.app/posts/${slug}`,
      type: "article",
      images: [{ url: postDetails.image }],
    },
  };
}

export default async function Posts({ params }: IPostsDetail) {
  const postDetails = await getPostDetails((await params).slug);

  if (!postDetails) {
    return <Loading />;
  }

  const currentPosts = await posts();

  return (
    <main className="w-full pt-9 flex max-w-page mx-auto px-4">
      <DetailsPosts
        author={postDetails.author.name}
        createdAt={postDetails.createdAt}
        image={postDetails.image}
        data={postDetails.description}
        className="font-bold text-base mt-2"
        title={postDetails.title}
      />
      <div className="flex-col gap-y-6 items-center mb-4 md:gap-x-4 md:mb-4 hidden md:flex w-full max-w-articles-detail">
        <LayoutArticle title="Juniando">
          Ajudamos você Desenvolvedor Jr a conseguir sua primeira vaga no
          mercado de trabalho, com dicas e anúncios de vagas para você alavancar
          sua carreira.
        </LayoutArticle>

        <LayoutArticle title="Assuntos Relevantes">
          <div className="mx-auto w-24 h-two-pixels rounded-2xl bg-line-blue md:m-0 md:mx-auto lg:mx-auto lg:my-1" />
          <RelevantTopics
            techsRelevants={techsRelevants(currentPosts.record.posts)}
          />
        </LayoutArticle>
      </div>
      <Bubble />
    </main>
  );
}
