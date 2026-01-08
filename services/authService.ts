import * as SecureStore from "expo-secure-store";
import apiClient from "../axiosClient";

const TOKEN_KEY = "token";
const LANGUAGE_KEY = "language";
const CURRENCY_KEY = "currency";

export const loginWithEmail = async (email: string) => {
  const res = await apiClient.post("/auth/login", { email });
  return res.data;
};

export const verifyOtp = async (params: { email: string; otp: string }) => {
  const res = await apiClient.post("/auth/otp", params);

  const token: string | undefined = res?.data?.token;

  if (token) {
    await SecureStore.setItemAsync(TOKEN_KEY, token);
  }

  return res.data;
};

export const logout = async () => {
  await SecureStore.deleteItemAsync(TOKEN_KEY);
};

export const setLanguage = (code: string) =>
  SecureStore.setItemAsync(LANGUAGE_KEY, code);

export const setCurrency = (code: string) =>
  SecureStore.setItemAsync(CURRENCY_KEY, code);

export const getStoredToken = () => SecureStore.getItemAsync(TOKEN_KEY);
export const getStoredLanguage = () => SecureStore.getItemAsync(LANGUAGE_KEY);
export const getStoredCurrency = () => SecureStore.getItemAsync(CURRENCY_KEY);
