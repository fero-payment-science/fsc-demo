/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { type InternalAxiosRequestConfig } from 'axios';

const defaultHeaders = {
  common: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

// Create axios instances.
export const transaction = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_TRANSACTION_URL,
  headers: {
    ...defaultHeaders,
    'x-api-key': process.env.MERCHANT_API_KEY, // @todo protect key server-side
  },
});

const getConfig = (
  config: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig => {
  return config;
};

transaction.interceptors.request.use(
  (config: any) => getConfig(config),
  (error: any) => Promise.reject(error),
);
