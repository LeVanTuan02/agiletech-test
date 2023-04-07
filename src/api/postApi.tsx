import { PostParams, PostResponse } from "../models/post";
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
};
