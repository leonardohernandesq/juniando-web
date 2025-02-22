import { Fragment } from "react";

import ArrowArticlePosts from "@/components/icons/arrow-article";

import LineGray from "@/components/line-gray";

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

export default function RelevantTopics() {
  return (
    <ul className="font-medium">
      {topicTech.map(({ tech }, index) => {
        return (
          <Fragment key={index}>
            <li className="flex items-center py-2 cursor-pointer">
              <ArrowArticlePosts />
              <span className="pl-2">{tech}</span>
              <span className="ml-auto">(2)</span>
            </li>
            <LineGray />
          </Fragment>
        );
      })}
    </ul>
  );
}
