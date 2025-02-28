/* eslint-disable semi */

import IAuthor from "@/models/author.interface";

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
