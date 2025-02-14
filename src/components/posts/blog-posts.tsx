import Image from "next/image";
import React from "react";

export default async function BlogPosts() {
  const response = await fetch("http://localhost:3000/mock-json/json.json");
  const { content }: { content: string } = await response.json();

  return (
    <section>
      <Image
        src={"/images/post-react.png"}
        alt="post-image"
        width={744}
        height={440}
      />

      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </section>
  );
}
