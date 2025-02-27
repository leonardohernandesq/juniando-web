import { Post } from "./posts";

export interface ApiResponse {
  record: {
    posts: Post[];
    metadata: Metadata;
  };
}

interface Metadata {
  id: string;
  private: boolean;
  createdAt: string;
}
