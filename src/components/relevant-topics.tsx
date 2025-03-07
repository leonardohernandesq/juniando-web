"use client";

import { Fragment } from "react";

import ArrowArticlePosts from "@/components/icons/arrow-article";

import LineGray from "@/components/line-gray";
import { useRouter } from "next/navigation";

export interface IRelevanttopicsProps {
  techsRelevants: {
    id: number;
    name: string;
    quantity: number;
  }[];
}

export default function RelevantTopics({
  techsRelevants,
}: IRelevanttopicsProps) {
  const router = useRouter();

  return (
    <ul className="font-medium">
      {techsRelevants.map((item, index) => {
        return (
          <Fragment key={index}>
            <li
              className="flex items-center py-2 cursor-pointer"
              onClick={() =>
                router.push(`/posts?filter=${item.name.toLowerCase()}`)
              }
            >
              <ArrowArticlePosts />
              <span className="pl-2">{item.name}</span>
              <span className="ml-auto">({item.quantity})</span>
            </li>
            {index !== techsRelevants.length - 1 && <LineGray />}
          </Fragment>
        );
      })}
    </ul>
  );
}
