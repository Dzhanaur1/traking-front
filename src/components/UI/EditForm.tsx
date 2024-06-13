"use client";
import React, { useEffect, useState } from "react";
import { DeliveryType } from "../PriceBuilder/deliveryTypeList";
const deliveryTypes: DeliveryType[] = [
  {
    id: 1,
    name: "Фура для жидкостей",
    image: "images/transports/t_03.webp",
    weight: 1,
    length: 1,
    height: 1,
    coefficent: 4,
  },
  {
    id: 2,
    name: "Открытая платформа",
    image: "images/transports/t_02.webp",
    weight: 1,
    length: 1,
    height: 1,
    coefficent: 3,
  },
  {
    id: 3,
    name: "Открытая платформа",
    image: "images/transports/t_02.webp",
    weight: 1,
    length: 1,
    height: 1,
    coefficent: 2,
  },
  {
    id: 4,
    name: "Открытая платформа",
    image: "images/transports/t_02.webp",
    weight: 1,
    length: 1,
    height: 1,
    coefficent: 1,
  },
];
const EditForm = (id: number) => {};

export default EditForm;
