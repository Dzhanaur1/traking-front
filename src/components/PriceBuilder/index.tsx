"use client";
import InputMask from "react-input-mask";
import { cuclcDistance } from "@/utils/calcDistance";
import { dadataFetch } from "@/utils/dadataFetch";
import {
  Autocomplete,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import {
  DatePicker,
  LocalizationProvider,
  TimeField,
  TimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React, { FC, SyntheticEvent, useEffect, useState } from "react";
import "dayjs/locale/ru";
import dayjs, { Dayjs } from "dayjs";
import DeliveryTypeList, { DeliveryType } from "./deliveryTypeList";
import {
  calcTransitPrice,
  calcTransitPriceProps,
} from "@/utils/CalcTransitPrice";
import { createOrder } from "@/utils/createOrder";
import { useRouter } from "next/navigation";

dayjs.locale("ru");
type CityType = {
  label: string;
  value: string;
};
const cargoTypes = [
  {
    id: 1,
    name: "Жидкий",
    coefficent: 2,
  },
  {
    id: 2,
    name: "Хрупкий",
    coefficent: 1.5,
  },
];
type PriceBuiderFormProps = {
  fromLocationProp?: string;
  toLocationProp?: string;
  date?: any;
  time?: string;
  typeOfTransport?: DeliveryType;
  typeofCargo?: number;
  phone?: string;
};
const PriceBuiderForm: FC<PriceBuiderFormProps> = ({
  fromLocationProp,
  toLocationProp,
  date,
  time,
  typeOfTransport,
  typeofCargo,
  phone,
}) => {
  const [fromLocation, setFromLocation] = useState<string>(
    fromLocationProp || ""
  );
  const [toLocation, setToLocation] = useState<string>(toLocationProp || "");
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(date || null);
  const [selectedTime, setSelectedTime] = useState<string>(time || "");
  const [selectedType, setSelectedType] = useState<number>(typeofCargo || 0);
  const [transport, setTrasport] = useState<DeliveryType | null>(
    typeOfTransport || null
  );
  const [loading, setIsLoading] = useState<boolean>(true);
  const [cities, setSities] = useState<CityType[]>([]);
  const [tel, setTel] = useState<string>(phone || "");
  const [price, setPrice] = useState<number>(0);
  const router = useRouter();
  useEffect(() => {
    if (fromLocation && toLocation) {
      const getDistance = async () => {
        setIsLoading(true);

        const distance = await cuclcDistance(fromLocation, toLocation);
        const cargoType = cargoTypes.find((obj) => obj.id === selectedType);
        let selectedTypeCoef = cargoType?.coefficent || 1;

        const data: calcTransitPriceProps = {
          distance: distance,
          typeCoef: selectedTypeCoef,
          transportCoef: transport?.coefficent,
        };
        setPrice(calcTransitPrice(data));
        setIsLoading(false);
        // calcTransitPrice(data);
        return distance;
      };
      getDistance();
    } else {
      setPrice(0);
      setIsLoading(true);
    }
  }, [fromLocation, toLocation, selectedType, transport]);
  const handleTransportSelect = (selectedTransport: any) => {
    setTrasport(selectedTransport);
  };
  const getCities = async (query?: string) => {
    const data: Cities = (await dadataFetch(query || "")).data;
    const cities = data.suggestions.map((obj) => ({
      label: obj.data.city,
      value: obj.data.city,
    }));
    setSities(cities);
  };
  const handlerFromLocation = (value: string) => {
    setFromLocation(value);

    return getCities(value);
  };
  const handlerToLocation = (value: string) => {
    setToLocation(value);

    return getCities(value);
  };
  const onSubmit = async (event: React.ChangeEvent<EventTarget>) => {
    event.preventDefault();
    if (
      !selectedDate ||
      !fromLocation ||
      !toLocation ||
      !transport ||
      tel.includes("_") ||
      tel.length == 0
    ) {
      return alert("Зполните все обязательные  поля");
    }
    const cargoType = cargoTypes.find((obj) => obj.id === selectedType);
    const newOrder = {
      fromLocation: fromLocation,
      toLocation: toLocation,
      date: selectedDate.format("YYYY-MM-DD"),
      time: selectedTime,
      typeOfTransport: transport.name,
      typeOfCargo: cargoType?.name || " Не указан",
      phone: tel,
      price: price,
      status: "Новый",
    };

    const response = await createOrder(newOrder);
    alert(response);
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  return (
    <div className="flex-1 max-w-[500px] flex flex-col gap-[40px] bg-dark_gray p-[20px] rounded-[15px]">
      <h3 className="font-bold text-[24px] ">
        Расчет и предварительное оформление
      </h3>
      <div>
        <div className="flex gap-[15px]">
          <Autocomplete
            className="flex-1"
            options={cities}
            getOptionLabel={(city: CityType) => city.label}
            id="clear-on-escape"
            clearOnEscape
            onChange={(
              event: SyntheticEvent<Element, Event>,
              newValue: any | null
            ) => {
              setFromLocation(newValue?.label);
            }}
            onInputChange={(event, newInputValue) => {
              handlerFromLocation(newInputValue);
            }}
            inputValue={fromLocation}
            renderInput={(params) => (
              <TextField
                className="bg-[#fff] flex-1 w-full rounded-md"
                {...params}
                id="from"
                label="Откуда"
                variant="filled"
                required={true}
                value={fromLocation}
              />
            )}
          />
          <Autocomplete
            className="flex-1"
            options={cities}
            getOptionLabel={(city: CityType) => city.label}
            id="clear-on-escape"
            clearOnEscape
            onChange={(
              event: SyntheticEvent<Element, Event>,
              newValue: any | null
            ) => {
              setToLocation(newValue?.label);
            }}
            onInputChange={(event, newInputValue) => {
              handlerToLocation(newInputValue);
            }}
            inputValue={toLocation}
            renderInput={(params) => (
              <TextField
                className="bg-[#fff] flex-1 w-full rounded-md"
                {...params}
                id="from"
                label="Куда"
                variant="filled"
                required={true}
              />
            )}
          />
        </div>
      </div>
      <DeliveryTypeList
        onTransportSelect={(selectedTransport) =>
          handleTransportSelect(selectedTransport)
        }
      />

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="flex gap-[10px]">
          <DatePicker
            value={selectedDate}
            onChange={(newValue) => setSelectedDate(newValue)}
            className="flex-1 bg-white outline-none border-none rounded-md"
            format="DD/MM/YYYY"
            label="Дата"
            slotProps={{
              textField: {
                variant: "filled",
                focused: false,
                className: "text-black",
                required: true,
              },
            }}
          />
          <FormControl
            variant="filled"
            className="flex-1 bg-white outline-none border-none rounded-md"
          >
            <InputLabel id="demo-simple-select-label" focused={false}>
              Время
            </InputLabel>
            <Select
              required={true}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={age}
              label="Age"
              value={selectedTime}
              onChange={(event) => setSelectedTime(event.target.value)}
            >
              <MenuItem value={"13:30"}>до 13:30</MenuItem>
              <MenuItem value={"15:30"}>до 15:30</MenuItem>
              <MenuItem value={"17:30"}>до 17:30</MenuItem>
              <MenuItem value={"19:30"}>до 19:30</MenuItem>
            </Select>
          </FormControl>
        </div>
      </LocalizationProvider>
      <div>
        <h4 className="text-[18px] font-medium nb-[20px]">Тип груза</h4>
        <ul className="flex gap-[40px]">
          {cargoTypes.map((cargo) => (
            <li
              onClick={() => setSelectedType(cargo.id)}
              className={` cursor-pointer text-[18px] font-semibold ${
                selectedType == cargo.id ? "bg-white text-dark_gray" : ""
              } transition border rounded-[10px] bg-transparent flex justify-center items-center border-white flex-1 p-[14px] `}
            >
              {cargo.name}
            </li>
          ))}
        </ul>
      </div>
      <form className="bg-white flex flex-col gap-[15px]  rounded-[10px] p-[16px]">
        <InputMask
          mask="+7 (999) 999-99-99"
          className="flex p-[17px] w-full bg-dark_gray rounded-[10px]"
          type="tel"
          onChange={(event) => setTel(event.target.value)}
          value={tel}
        />
        <div className="flex gap-[70px] items-center ">
          {loading ? (
            <div className="flex items-center flex-1">
              <p className=" mr-[15px] text-[18px] font-medium text-black">
                Итого:
              </p>
              <div className="w-full max-w-[80px] h-[22px] blur-[1px] bg-neutral-500 rounded-md"></div>
            </div>
          ) : (
            <div className="flex items-center">
              <p className=" mr-[10px] text-[18px] font-medium text-black">
                Итого:{" "}
              </p>
              <span className=" text-[22px] text-red font-bold">{price} ₽</span>
            </div>
          )}

          <button
            onClick={(event) => onSubmit(event)}
            className="  button-red flex-1 "
          >
            Оформить
          </button>
        </div>
      </form>
    </div>
  );
};

export default PriceBuiderForm;
{
  /* <p className={`${loading ? "bg-red" : ""}`}>{price}</p>
      <button onClick={(event) => onSubmit(event)}>Отправить</button> */
}
