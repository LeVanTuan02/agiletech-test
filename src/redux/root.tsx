import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import postReducer from "./postSlice";

export const rootReducer = combineReducers({
  auth: authReducer,
  post: postReducer,
});
