/* eslint-disable semi */
export default interface IPosts {
  id: number;
  title: string;
  slug: string;
  likes: number;
  views: number;
  status: string;
  featured: boolean;
  author: string;
  createdAt: string;
  updatedAt: string | null;
  deletedAt: string | null;
  image: string;
  description: string;
  content: string;
  tags: [];
}
