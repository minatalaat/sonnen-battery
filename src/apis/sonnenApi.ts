import axios from 'axios';
import { statusCodes } from '../constants/statusCodeMessage';

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
sonnenApi.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;

      if (status === 400 || status === 401 || status === 403) {
        const errorMessage = error.response?.data?.message || statusCodes[status];

        throw new Error(`API Error ${status}: ${errorMessage}`);
      }

      throw new Error('An unexpected error occurred');
    }

    throw new Error(error instanceof Error ? error.message : String(error));
  }
);
