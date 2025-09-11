import axios from 'axios';

export const sonnenApi = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
});

sonnenApi.interceptors.request.use(
  function (config) {
    config.withCredentials = false;
    return config;
  },
  function (error) {
    return Promise.reject(error instanceof Error ? error : new Error(String(error)));
  }
);
sonnenApi.interceptors.response.use(function (response) {
  return response;
});
