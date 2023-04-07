import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Pagination, Post, PostParams } from "../models/post";
import { PostApi } from "../api/postApi";
import { RootState } from "./store";

interface PostState {
  posts?: Post[];
  pagination: Pagination;
}

const initialState: PostState = {
  posts: [],
  pagination: {
    totalPage: 0,
    limit: 0,
    currentPage: 0,
    total: 0,
  },
};

export const getPosts = createAsyncThunk("post/getPosts", async (params?: PostParams) => {
  return PostApi.getAll(params);
});

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosts.fulfilled, (state, { payload }) => {
      state.posts = payload.posts;
      state.pagination = {
        totalPage: payload.total_page,
        limit: payload.page_size,
        currentPage: payload.current_page,
        total: payload.total,
      };
    });
  },
});

export default postSlice.reducer;
export const selectPosts = (state: RootState) => state.post.posts;
export const selectPaginationPost = (state: RootState) => state.post.pagination;
