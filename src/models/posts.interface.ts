import IAuthor from "./author.interface";

/* eslint-disable semi */
export default interface IPosts {
  id: number;
  title: string;
  slug: string;
  likes: number;
  views: number;
  status: string;
  featured: boolean;
  author: IAuthor;
  createdAt: string;
  updatedAt: string | null;
  deletedAt: string | null;
  image: string;
  description: string;
  tags: string[];
}
