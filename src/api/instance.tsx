import axios from "axios";
import { ACCESS_TOKEN_STORAGE_KEY, REFRESH_TOKEN_STORAGE_KEY } from "../constants";
import jwtDecode from "jwt-decode";
import dayjs from "dayjs";
import { AuthApi } from "./authApi";
import { ResponseSignin } from "../models/auth";

const instance = axios.create({
  baseURL: "https://test-react.agiletech.vn",
});

let refreshTokenRequest: null | Promise<ResponseSignin> = null;
instance.interceptors.request.use(
  async function (config) {
    const accessToken = JSON.parse(localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY) as string);

    if (!accessToken) return config;

    const user: { exp: number } = jwtDecode(accessToken);
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

    // nếu chưa expried token ? sử dụng token hiện tại : refresh token
    if (isExpired && !config.url?.includes("/auth/refresh-token")) {
      const refreshToken = JSON.parse(localStorage.getItem(REFRESH_TOKEN_STORAGE_KEY) as string);
      refreshTokenRequest = refreshTokenRequest ? refreshTokenRequest : AuthApi.refreshToken(refreshToken);

      const { accessToken: newAccessToken, refreshToken: newRefreshToken } = await refreshTokenRequest;
      refreshTokenRequest = null;

      localStorage.setItem(ACCESS_TOKEN_STORAGE_KEY, JSON.stringify(newAccessToken));
      localStorage.setItem(REFRESH_TOKEN_STORAGE_KEY, JSON.stringify(newRefreshToken));

      config.headers["Authorization"] = `Bearer ${newAccessToken}`;
    } else {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default instance;
