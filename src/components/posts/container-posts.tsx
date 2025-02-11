"use client";
import React from "react";

export default function ContainerPosts() {
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
    <main
      className="w-[1130px] grid grid-cols-2"
      dangerouslySetInnerHTML={{ __html: content }}
    ></main>
  );
}
