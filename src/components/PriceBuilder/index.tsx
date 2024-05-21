"use client";

import { cuclcDistance } from "@/utils/calcDistance";
import { dadataFetch } from "@/utils/dadataFetch";
import React, { useState } from "react";
import AsyncSelect from "react-select/async";

const TransitPriceBuilder = () => {
  const [fromLocation, setFromLocation] = useState<string>("");
  const [toLocation, setToLocation] = useState<string>("");
  const getCities = async (query: string) => {
    const cities: Cities = (await dadataFetch(query)).data;
    return cities.suggestions.map((obj) => ({
      label: obj.data.city,
      value: obj.data.city,
    }));
  };
  const onSubmit = async () => {
    console.log(fromLocation, toLocation);
    const distance = await cuclcDistance(fromLocation, toLocation);
    console.log(distance);
  };
  return (
    <div>
      <h1>Отправить груз</h1>
      <label htmlFor="LocationFrom">Введите адрес</label>

      <AsyncSelect
        placeholder={"Откуда"}
        loadOptions={getCities}
        defaultOptions
        onChange={(selectedCity) => {
          setFromLocation(selectedCity?.value || "");
        }}
      ></AsyncSelect>
      <label htmlFor="LocationTo"></label>
      <AsyncSelect
        placeholder={"Куда"}
        loadOptions={getCities}
        defaultOptions
        onChange={(selectedCity) => {
          setToLocation(selectedCity?.value || "");
        }}
      ></AsyncSelect>
      <button onClick={onSubmit}>Отправить</button>

      <h2>Выберите тип доставки</h2>
      <ul>
        <li></li>
      </ul>
    </div>
  );
};

export default TransitPriceBuilder;
