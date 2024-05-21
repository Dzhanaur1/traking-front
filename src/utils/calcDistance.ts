import axios, { AxiosResponse } from "axios";

export const cuclcDistance = async (
  fromLocation: string,
  toLocation: string
) => {
  const response: AxiosResponse<MatrixDistanceResponse> = await axios.get(
    `https://api.distancematrix.ai/maps/api/distancematrix/json?key=HK0VgazEhNNoyNLzFU3B618xvl6zvEbhMkJkGgJ5PaJTyaL133MVC97i96fgA6FF&origins=${fromLocation}&destinations=${toLocation}`
  );

  return Math.floor(response.data.rows[0].elements[0].distance.value / 1000);
};
