import { Post } from "../interfaces/posts";

export const techsRelevants = (posts: Post[]) => {
  return [
    {
      id: 1,
      name: "Javascript",
      quantity: posts.filter((item: Post) => item.tags.includes("javascript"))
        .length,
    },
    {
      id: 2,
      name: "ReactJS",
      quantity: posts.filter((item: Post) => item.tags.includes("reactjs"))
        .length,
    },
    {
      id: 3,
      name: "NodeJS",
      quantity: posts.filter((item: Post) => item.tags.includes("nodejs"))
        .length,
    },
    {
      id: 4,
      name: "AngularJS",
      quantity: posts.filter((item: Post) => item.tags.includes("angularjs"))
        .length,
    },
  ];
};
