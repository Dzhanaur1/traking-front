import axios, { AxiosResponse } from "axios";

export const dadataFetch = async (
  query: string
): Promise<AxiosResponse<Cities>> => {
  try {
    const data = await axios.post<Cities>(
      "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address",
      {
        query: query,
        count: 3,
        locations: [
          {
            city_type_full: "город",
          },
        ],
      },
      {
        headers: {
          Authorization: "Token e0e0ef8187e2848e0fad2d6775f2535fc2e45a09",
          "Content-Type": "application/json",
        },
      }
    );
    return data;
  } catch (ex) {
    return {} as Promise<AxiosResponse<Cities>>;
  }
};
