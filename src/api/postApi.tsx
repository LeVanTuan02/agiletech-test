import { PostParams, PostResponse, PostData, Post } from "../models/post";
import { instanceV2 } from "./instance";

export const PostApi = {
  getAll: (params?: PostParams): Promise<PostResponse> => {
    return instanceV2.get("/posts", {
      params,
    });
  },
  getPost: (id: string): Promise<Post> => {
    return instanceV2.get(`/posts/${id}`);
  },
  getTags: (): Promise<string[]> => {
    return instanceV2.get("/posts/tags");
  },
  addPost: (post: PostData): Promise<PostData> => {
    return instanceV2.post("/posts", post);
  },
  removePost: (id: string): Promise<string> => {
    return instanceV2.delete(`/posts/${id}`);
  },
  updatePost: (post: Post): Promise<Post> => {
    return instanceV2.patch(`/posts/${post.id}`, post);
  },
};
