import axios, { AxiosRequestConfig } from "axios";
// import { string } from "yup/lib/locale";
import { CANCEL } from "redux-saga";

export const BASE_URL = "https://api-dev.domecompass.com";

export const LS_LOGIN_TOKEN = "login_token";

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem(LS_LOGIN_TOKEN);

  if (!token) {
    return config;
  }
  return { ...config, headers: { ...config.headers, Authorization: token } };
});

axios.interceptors.response.use(undefined, (error) => {
  if (axios.isCancel(error)) {
    return Promise.reject(error);
  }
  if (error.response.data?.code === 9101) {
    localStorage.removeItem(LS_LOGIN_TOKEN);
    window.location.href = "/login";
  }
});

export const get = <T>(url: string, config?: AxiosRequestConfig) => {
  const source = axios.CancelToken.source();
  const responce = axios.get<T>(url, { ...config, cancelToken: source.token });
  responce[CANCEL] = source.cancel;
  return responce;
};
