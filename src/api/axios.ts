import axios, { AxiosResponse } from "axios";
export const BaseURL =
  process.env.NODE_ENV === "development"
    ? import.meta.env.VITE_BACKEND_DEVELOPMENT_URL
    : import.meta.env.VITE_BACKEND_PRODUCTION_URL;

const api = axios.create({
  baseURL: BaseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {
    const regex = /^\/mocks\/.*\.json$/;
    if (config.url && regex.test(config.url)) {
      config.baseURL = "/";
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    return response;
  },
  (error) => {
    // errorHandler(error);
    return Promise.reject(error);
  }
);

export default api;
