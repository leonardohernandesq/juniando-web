export interface Post {
  image: {
    url: string;
    name: string;
  };
  id: number;
  title: string;
  slug: string;
  likes: number;
  views: number;
  status: string; // Pode ser um enum se houver valores específicos
  featured: boolean;
  author: Author;
  createdAt: Date; // Ou Date se você converter as strings para objetos Date
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
