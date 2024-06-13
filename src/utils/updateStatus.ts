import axios from "axios";

const API_URL = "http://localhost/truking-back/public/api";

export const updateOrderStatus = async (id: number, status: string) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.post(
      `${API_URL}/order/update/${id}`,
      { status },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.message;
  } catch (error: any) {
    throw error.response.data;
  }
};
