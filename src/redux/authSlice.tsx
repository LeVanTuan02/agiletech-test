import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthApi } from "../api/authApi";
import { RootState } from "./store";
import { ACCESS_TOKEN_STORAGE_KEY } from "../constants";

interface AuthState {
  isLogged: boolean;
}

const initialState: AuthState = {
  isLogged: false,
};

export const signin = createAsyncThunk("auth/signin", async (data: { username: string }) => {
  return AuthApi.signin(data);
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signout: (state) => {
      state.isLogged = false;
      localStorage.removeItem(ACCESS_TOKEN_STORAGE_KEY);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signin.fulfilled, (state, { payload }) => {
      if (payload.accessToken) {
        state.isLogged = true;
        localStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, JSON.stringify(payload.accessToken));
      }
    });
  },
});

export default authSlice.reducer;
export const { signout } = authSlice.actions;
export const selectSttLogin = (state: RootState) => state.auth.isLogged;
