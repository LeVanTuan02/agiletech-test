import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Pagination, Post, PostData, PostParams } from "../models/post";
import { PostApi } from "../api/postApi";
import { RootState } from "./store";

interface PostState {
  posts?: Post[];
  post?: Post | {};
  pagination: Pagination;
  tags: string[];
}

const initialState: PostState = {
  posts: [],
  post: {},
  pagination: {
    totalPage: 0,
    limit: 0,
    currentPage: 0,
    total: 0,
  },
  tags: [],
};

export const getPosts = createAsyncThunk("post/getPosts", async (params?: PostParams) => {
  return PostApi.getAll(params);
});

export const getPost = createAsyncThunk("post/getPost", async (id: string) => {
  return PostApi.getPost(id);
});

export const getTags = createAsyncThunk("post/getTags", async () => {
  return PostApi.getTags();
});

export const addPost = createAsyncThunk("post/addPost", async (data: PostData) => {
  return PostApi.addPost(data);
});

export const removePost = createAsyncThunk("post/removePost", async (id: string) => {
  return PostApi.removePost(id);
});

export const updatePost = createAsyncThunk("post/update", async (data: Post) => {
  return PostApi.updatePost(data);
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

    builder.addCase(getPost.fulfilled, (state, { payload }) => {
      state.post = payload;
    });

    builder.addCase(getTags.fulfilled, (state, { payload }) => {
      state.tags = payload;
    });

    builder.addCase(addPost.fulfilled, (state, { payload }) => {
      state.posts = [...(state.posts as any), payload];
    });

    builder.addCase(removePost.fulfilled, (state, { payload }) => {
      state.posts = state.posts?.filter((item) => item.id !== payload);
    });
  },
});

export default postSlice.reducer;
export const selectPosts = (state: RootState) => state.post.posts;
export const selectTags = (state: RootState) => state.post.tags;
export const selectPaginationPost = (state: RootState) => state.post.pagination;
