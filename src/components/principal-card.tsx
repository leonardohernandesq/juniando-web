"use client";

import Image from "next/image";
import MetaInfo from "./meta-info";
import { useCallback } from "react";
import { useRouter } from "next/navigation";

interface IPrincipalCard {
  slug: string;
  image: string;
  title: string;
  author: string;
  date: string | Date;
}

const PrincipalCard = ({
  slug,
  image,
  title,
  author,
  date,
}: IPrincipalCard) => {
  const router = useRouter();

  const openPost = useCallback(() => {
    router.push(`/posts/${slug}`);
  }, [slug, router]);

  return (
    <div className="relative cursor-pointer" onClick={openPost}>
      <Image
        src={image}
        alt="post image"
        width={745}
        height={412}
        className="h-full max-h-principal_card_max rounded-lg"
      />
      <div className="w-full absolute bottom-1 left-0 p-7 pt-20 z-50">
        <div className="-z-10 absolute w-full inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg" />
        <h1 className="text-3xl font-bold text-light">{title}</h1>
        <MetaInfo
          className="text-light text-xl mt-4"
          name={author}
          date={new Date(date)}
        />
      </div>
    </div>
  );
};

export default PrincipalCard;
