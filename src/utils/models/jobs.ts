import { Author } from "./posts";

export interface Job {
  id: number;
  title: string;
  views: number;
  author: Author;
  createdAt: Date;
  updatedAt: string | null;
  deletedAt: string | null;
  logo: string;
  description: string;
  tags: string[];
}
