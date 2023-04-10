import { ResponseSignin } from "../models/auth";
import instance from "./instance";

export const AuthApi = {
  signin: (data: { username: string }): Promise<ResponseSignin> => {
    return instance.post("/auth/login", data);
  },
  refreshToken: (value: string): Promise<ResponseSignin> => {
    return instance.post("/auth/refresh-token", {
      refreshToken: value,
    });
  },
};
