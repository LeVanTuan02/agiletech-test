import axios from "axios";
import { ACCESS_TOKEN_STORAGE_KEY } from "../constants";

const instance = axios.create({
  baseURL: "https://test-react.agiletech.vn",
});

instance.interceptors.request.use(
  function (config) {
    const accessToken = JSON.parse(localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY) as string);
    config.headers["Authorization"] = `Bearer ${accessToken}`;
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
  async function (error) {
    //  xử lý die access token
    if (error.response.status === 401 || error.response.status === 403) {
      window.location.href = "/signin";
      localStorage.clear();
    }
    return Promise.reject(error);
  },
);

export default instance;
