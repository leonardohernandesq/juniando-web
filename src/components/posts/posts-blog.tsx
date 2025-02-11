"use client";

import Image from "next/image";
import React from "react";

export default function PostsBlog() {
  const [content, setContent] = React.useState<string>("");
  React.useEffect(() => {
    async function chamadaApi() {
      const response = await fetch("api");
      const json: { content: string } = await response.json();
      setContent(json.content);
    }

    chamadaApi();
  });

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
