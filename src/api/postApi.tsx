import { PostParams, PostResponse, PostData, Post } from "../models/post";
import instance from "./instance";

export const PostApi = {
  getAll: (params?: PostParams): Promise<PostResponse> => {
    return instance.get("/posts", {
      params,
    });
  },
  getPost: (id: string): Promise<Post> => {
    return instance.get(`/posts/${id}`);
  },
  getTags: (): Promise<string[]> => {
    return instance.get("/posts/tags");
  },
  addPost: (post: PostData): Promise<PostData> => {
    return instance.post("/posts", post);
  },
  removePost: (id: string): Promise<string> => {
    return instance.delete(`/posts/${id}`);
  },
  updatePost: (post: Post): Promise<Post> => {
    return instance.patch(`/posts/${post.id}`, post);
  },
};
