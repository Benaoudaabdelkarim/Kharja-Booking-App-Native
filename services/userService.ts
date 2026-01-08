import apiClient from "../axiosClient.ts";
import { ApiResponse, User } from "../types.ts";

export const getMe = async (): Promise<ApiResponse<User>> => {
  const res = await apiClient.get("/auth/me");
  return res.data;
};
