import axios from "axios";

const API_URL = "http://localhost/truking-back/public/api";
const token = localStorage.getItem("token");
export const fetchProfile = async () => {
  const response = await axios.get(`${API_URL}/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  //   console.log(response.data);

  return response.data;
};
