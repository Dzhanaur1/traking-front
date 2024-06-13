import axios from "axios";
import { headers } from "next/headers";

const API_URL = "http://localhost/truking-back/public/api";

export const getOrders = async () => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get(
      `${API_URL}/admin`,

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.orders;
  } catch (error: any) {
    throw error.response.data;
  }
};
