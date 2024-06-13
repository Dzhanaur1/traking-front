export interface Order {
  fromLocation: string;
  toLocation: string;
  date: string; // Возможно, вам будет нужно преобразовать эту строку в объект Date
  time: string;
  typeOfTransport: string;
  typeOfCargo: string;
  phone: string;
  price: number;
  status: string;
}

import axios from "axios";
const API_URL = "http://localhost/truking-back/public/api";
export const createOrder = async (order: Order) => {
  try {
    const response = await axios.post(`${API_URL}/order/create`, order);
    return response.data.message;
  } catch (error) {
    throw error;
  }
};
