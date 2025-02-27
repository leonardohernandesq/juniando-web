import { Post } from "./models/posts";

export function getMostViewed(posts: Post[]) {
  return [...posts].sort((a, b) => b.views - a.views).slice(0, 6);
}

export function getLatestPosts(posts: Post[]) {
  return [...posts]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, 6);
}

export function getMainPost(posts: Post[]) {
  return [...posts]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, 1);
}
