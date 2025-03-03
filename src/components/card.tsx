"use client";

import { HTMLAttributes, useCallback } from "react";

import Image from "next/image";

import MetaInfo from "@/components/meta-info";
import { Post } from "@/utils/interfaces/posts";
import { useRouter } from "next/navigation";

interface ICardProps {
  slug: string;
  title: string;
  description: string;
  createdAt: Date;
  author: string;
  image: string;
}

const Card = ({
  slug,
  title,
  description,
  createdAt,
  author,
  image,
}: ICardProps) => {
  const router = useRouter();

  const openPost = useCallback(() => {
    router.push(`/posts/${slug}`);
  }, [slug, router]);

  const removeTagsHTML = (inputString: string) => {
    return inputString.replace(/<[^>]*>/g, "");
  };

  return (
    <div
      className="bg-light rounded-b-xl drop-shadow-principal cursor-pointer h-full"
      onClick={openPost}
    >
      <Image
        src={image}
        alt={title}
        className="w-full h-56 object-cover pointer-events-none"
        width={1280}
        height={720}
      />
      <div className="p-8">
        <MetaInfo name={author} date={createdAt} />
        <h1 className="text-dark-100 pt-1 pb-1 text-xl font-semibold line-clamp-2">
          {title}
        </h1>
        <p className="text-dark-100 text-xs line-clamp-6 md:line-clamp-4">
          {removeTagsHTML(description)}
        </p>
      </div>
    </div>
  );
};

export default Card;
