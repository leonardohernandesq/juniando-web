"use client";
import axios from "axios";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { ApiResponse } from "../models/api-response";
import { Post } from "../models/posts";

interface PostsContextType {
  posts: Post[];
  setPosts: Dispatch<SetStateAction<Post[]>>;
}

const PostsContext = createContext<PostsContextType | undefined>(undefined);

export function PostsProvider({ children }: { children: ReactNode }) {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    try {
      async function fetchPosts() {
        const response = await axios.get<ApiResponse>(
          "https://api.jsonbin.io/v3/b/67be1eaaacd3cb34a8f06a64"
        );
        setPosts(response.data.record.posts);
      }
      fetchPosts();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostsContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(PostsContext);
  if (!context)
    throw new Error("usePosts deve ser usado dentro de um PostsProvider");
  return context;
}
