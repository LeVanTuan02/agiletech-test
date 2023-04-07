import { PostParams, PostResponse, PostData } from "../models/post";
import instance from "./instance";

export const PostApi = {
  getAll: (params?: PostParams): Promise<PostResponse> => {
    return instance.get("/posts", {
      params,
    });
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
};
