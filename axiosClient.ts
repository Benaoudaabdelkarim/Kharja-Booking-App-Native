import axios, { AxiosRequestConfig } from "axios";
import * as SecureStore from "expo-secure-store";

const API_BASE_URL = "https://business.getgosim.com/api/v1/app";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
});

apiClient.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    const token = await SecureStore.getItemAsync("token");
    const language = await SecureStore.getItemAsync("language");
    const currency = await SecureStore.getItemAsync("currency");

    if (token) {
      config.headers = {
        ...(config.headers || {}),
        Authorization: `Bearer ${token}`,
      };
    }

    config.params = {
      ...(config.params || {}),
      ...(language ? { language } : {}),
      ...(currency ? { currency } : {}),
    };

    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error?.response?.status === 401) {
      await SecureStore.deleteItemAsync("token");
    }
    return Promise.reject(error);
  }
);

export default apiClient;
