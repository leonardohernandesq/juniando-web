import IAuthor from "./author.interface";

/* eslint-disable semi */
export default interface IJobs {
  id: number;
  title: string;
  views: number;
  author: IAuthor;
  createdAt: string | null;
  updatedAt: string | null;
  deletedAt: string | null;
  logo: string;
  description: string;
  tags: string[];
}
