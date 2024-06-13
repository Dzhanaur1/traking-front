import axios from "axios";

export const deleteOrder = async (id: number): Promise<string> => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.delete(
      `http://localhost/truking-back/public/api/order/delete/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.message;
  } catch (error: any) {
    if (error.response) {
      throw new Error(`Error: ${error.response.data.message}`);
    } else if (error.request) {
      throw new Error("Error: No response from server");
    } else {
      throw new Error(`Error: ${error.message}`);
    }
  }
};
