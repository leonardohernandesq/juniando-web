import Head from "next/head";

import Bubble from "@/components/bubble";
import DetailsPosts from "@/components/details-posts";
import LayoutArticle from "@/components/layout-article";
import Loading from "@/components/loading";
import RelevantTopics from "@/components/relevant-topics";

import { techsRelevants } from "@/utils/mock/topich-relevants";
import { getImageWithPermission } from "@/utils/get-image-with-permission";

import "@/styles/details-post.css";

import {
  fetchPostBySlug,
  increasePostViewCount,
  posts,
} from "@/services/posts";
import { IincreasePostViewCount } from "@/interfaces/posts";
import { Metadata } from "next";
import { cleanDescription } from "@/utils/text-clean-tags-html";

interface IPostsDetail {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: IPostsDetail): Promise<Metadata> {
  const slug = (await params).slug;
  const postDetails = await fetchPostBySlug(slug);

  if (!postDetails) {
    return { title: "Post não encontrado" };
  }

  return {
    title: postDetails.title,
    description: cleanDescription(postDetails.description),
    openGraph: {
      title: postDetails.title,
      description: cleanDescription(postDetails.description),
      url: `https://juniando.vercel.app/posts/${slug}`,
      type: "article",
      images: [{ url: getImageWithPermission(postDetails.image.key) }],
    },
  };
}

export default async function Posts({ params }: IPostsDetail) {
  const { slug } = await params;
  const currentPosts = await posts({});

  const post = await fetchPostBySlug(slug);
  const viewsDetail: IincreasePostViewCount = await increasePostViewCount(slug);

  if (!post) {
    return <Loading />;
  }

  return (
    <>
      <Head>
        <title>{post?.title}</title>
        <meta name="description" content={post.description} />
      </Head>
      <main className="w-full pt-9 flex max-w-page mx-auto px-4 gap-4">
        <DetailsPosts
          author={post.author.name}
          createdAt={post.createdAt}
          image={getImageWithPermission(post.image.key)}
          data={post.description}
          className="font-bold text-base mt-2"
          title={post.title}
          quantityView={viewsDetail.views}
        />
        <div className="flex-col gap-y-6 items-center mb-4 md:gap-x-4 md:mb-4 hidden md:flex w-full max-w-articles-detail">
          <LayoutArticle title="Juniando">
            Ajudamos você Desenvolvedor Jr a conseguir sua primeira vaga no
            mercado de trabalho, com dicas e anúncios de vagas para você
            alavancar sua carreira.
          </LayoutArticle>

          <LayoutArticle title="Assuntos Relevantes">
            <div className="mx-auto w-24 h-two-pixels rounded-2xl bg-line-blue md:m-0 md:mx-auto lg:mx-auto lg:my-1" />
            <RelevantTopics techsRelevants={techsRelevants(currentPosts)} />
          </LayoutArticle>
        </div>
        <Bubble />
      </main>
    </>
  );
}
