export interface Post {
  image: {
    url: string;
    name: string;
    key: string;
  };
  id: number;
  title: string;
  slug: string;
  likes: number;
  views: number;
  status: string;
  featured: boolean;
  author: Author;
  createdAt: Date;
  updatedAt: string | null;
  deletedAt: string | null;
  description: string;
  tags: string[];
}

export interface Author {
  id: string;
  name: string;
  avatar: string;
}
