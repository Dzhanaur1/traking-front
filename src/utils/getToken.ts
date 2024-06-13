import axios from "axios";

const API_URL = "http://localhost/truking-back/public/api";

export const getToken = async (login: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { login, password });
    return response.data;
  } catch (error: any) {
    return error.response;
  }
};
export const logOut = async () => {
  const response = await axios.get(`${API_URL}/logout`);
  return response.data;
};
