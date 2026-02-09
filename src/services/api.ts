import axios from 'axios';
import { API_BASE_URL } from '@/utils/constants';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const status: number = error.response.status;
      const data = error.response.data;

      if (status === 400) {
        return Promise.reject({
          type: 'VALIDATION_ERROR' as const,
          message:
            data?.message || 'Invalid feedback data. Please review your input.',
          fieldErrors: data?.errors || {},
        });
      }
      if (status === 429) {
        return Promise.reject({
          type: 'RATE_LIMIT' as const,
          message:
            'Too many submissions. Please wait a moment and try again.',
        });
      }
      if (status >= 500) {
        return Promise.reject({
          type: 'SERVER_ERROR' as const,
          message:
            'The server is temporarily unavailable. Please try again later.',
        });
      }
    }

    if (error.code === 'ERR_NETWORK' || error.message?.includes('CORS')) {
      return Promise.reject({
        type: 'NETWORK_ERROR' as const,
        message:
          'Unable to reach the server. Please check your internet connection.',
      });
    }

    return Promise.reject({
      type: 'UNKNOWN_ERROR' as const,
      message: 'An unexpected error occurred. Please try again.',
    });
  },
);
