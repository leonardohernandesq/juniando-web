import Image from "next/image";

interface IBlogPosts {
  image: string;
  data: string;
}

export default async function BlogPosts({ image, data }: IBlogPosts) {
  return (
    <section>
      <Image src={image} alt="post-image" width={744} height={440} />
      <div dangerouslySetInnerHTML={{ __html: data }} />
    </section>
  );
}
