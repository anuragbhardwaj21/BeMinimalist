import axios from "axios";
import { getLocalStorageItem, notifyError, notifyErrorWithButton, removeLocalStorageItem } from "./helper";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use(
  function (config) {
    config.headers.Authorization = `Bearer ${getLocalStorageItem("token")}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  function (error) {
    console.log(error, "error");
    if (error?.response?.status === 401) {
      notifyError("Please login again.")
      removeLocalStorageItem("token");
      removeLocalStorageItem("userData");
      removeLocalStorageItem("cartData");
      removeLocalStorageItem("avatarDetails");
      window.location.href = "/login";
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export default api;
