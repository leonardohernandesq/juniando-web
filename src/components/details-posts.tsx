import Image from "next/image";
import MetaInfo from "./meta-info";
import { HTMLAttributes } from "react";

interface IBlogPosts extends HTMLAttributes<HTMLElement> {
  image: string;
  data: string;
  author: string;
  createdAt: Date;
  quantityView: number;
  title: string;
}

export default function DetailsPosts({
  image,
  data,
  author,
  createdAt,
  quantityView,
  title,
  ...rest
}: IBlogPosts) {
  const { className, ...props } = rest;
  return (
    <section className="mb-10 w-full" {...props}>
      <Image
        className="w-full"
        src={image}
        alt="post-image"
        width={744}
        height={440}
      />
      <MetaInfo
        date={createdAt}
        name={author}
        className={className}
        view={quantityView}
      />
      <h1 className="text-xl md:text-3xl mb-2">{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data }} />
    </section>
  );
}
