import React from "react";
import ArrowArticlePosts from "../icons/arrow-article";
import LinhaArticlePosts from "./linha-article-posts";

const topicTech: { tech: string }[] = [
  {
    tech: "Javascript",
  },
  {
    tech: "ReactJs",
  },
  {
    tech: "VueJs",
  },
  {
    tech: "AngularJs",
  },
];

export default function TopicPosts() {
  return (
    <ul className="font-medium">
      {topicTech.map(({ tech }, index) => {
        return (
          <React.Fragment key={index}>
            <li className="flex items-center py-2 cursor-pointer">
              <ArrowArticlePosts />
              <span className="pl-2">{tech}</span>
              <span className="ml-auto">(2)</span>
            </li>
            <LinhaArticlePosts />
          </React.Fragment>
        );
      })}
    </ul>
  );
}
