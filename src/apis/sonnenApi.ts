import axios from 'axios';
import { statusCodes, statusCodesMessages } from '../constants/statusCodeMessage';

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
      // handle BAD_REQUEST  UN_AUTH & FORBIDDEN reponse status
      if (status === statusCodes['BAD_REQUEST'] || status === statusCodes['UN_AUTH'] || status === statusCodes['FORBIDDEN']) {
        const errorMessage = error.response?.data?.message || statusCodesMessages[status];

        throw new Error(`API Error ${status}: ${errorMessage}`);
      }
      // handle generic response status codes
      throw new Error('An unexpected error occurred');
    }

    throw new Error(error instanceof Error ? error.message : String(error));
  }
);
