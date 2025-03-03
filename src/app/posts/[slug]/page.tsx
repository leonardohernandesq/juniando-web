import Bubble from "@/components/bubble";
import DetailsPosts from "@/components/details-posts";
import LayoutArticle from "@/components/layout-article";
import Loading from "@/components/loading";
import RelevantTopics from "@/components/relevant-topics";

import "@/styles/details-post.css";
import Head from "next/head";
import { Post } from "@/utils/interfaces/posts";

interface IPostsDetail {
  params: {
    slug: string;
  };
}

export default async function Posts({ params: { slug } }: IPostsDetail) {
  const responsePosts = await fetch(
    "https://api.jsonbin.io/v3/b/67be1eaaacd3cb34a8f06a64",
    {
      next: {
        revalidate: 60 * 60 * 24, // 24 hours
      },
    }
  ).then((res) => {
    return res.json();
  });

  const posts = responsePosts.record.posts;

  const postDetails = posts.find((post: Post) => post.slug === slug);

  if (!postDetails) {
    return <Loading />;
  }

  return (
    <>
      <Head>
        <title>{postDetails?.title}</title>
        <meta name="description" content={postDetails.description} />
      </Head>
      <main className="w-full pt-9 flex max-w-page mx-auto px-4">
        <DetailsPosts
          author={postDetails.author.name}
          createdAt={postDetails.createdAt}
          image={postDetails.image}
          data={postDetails.description}
          className="font-bold text-base mt-2"
          title={postDetails.title}
        />
        <div className="flex-col gap-y-6 items-center mb-4 md:gap-x-4 md:mb-4 hidden md:flex w-full">
          <LayoutArticle title="Juniando">
            Ajudamos você Desenvolvedor Jr a conseguir sua primeira vaga no
            mercado de trabalho, com dicas e anúncios de vagas para você
            alavancar sua carreira.
          </LayoutArticle>

          <LayoutArticle title="Assuntos Relevantes">
            <div className="mx-auto w-24 h-two-pixels rounded-2xl bg-line-blue md:m-0 md:mx-auto lg:mx-auto lg:my-1" />
            <RelevantTopics />
          </LayoutArticle>
        </div>
        <Bubble />
      </main>
    </>
  );
}
