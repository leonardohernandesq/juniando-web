/* eslint-disable semi */

import IAuthor from "@/models/author.interface";

export default interface IJobs {
  id: number;
  views: number;
  author: IAuthor;
  "image-recruiter": string;
  "recruiter-enterprise": string;
  modality: string;
  salary: string;
  locality: string;
  title: string;
  createdAt: string | null;
  updatedAt: string | null;
  deletedAt: string | null;
  logo: string;
  description: string;
  tags: string[];
}
