"use client";
import React, { useState } from "react";
import TransitPriceBuilder from "../PriceBuilder";
import { tree } from "next/dist/build/templates/app-page";
import Popup from "../Popup";
import PriceBuiderForm from "../PriceBuilder";

const Intro = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className=" bg-dark_gray w-full h-full flex items-end max-h-[574px]">
      <div className="container flex justify-between items-center">
        <div className="flex-col flex md:max-w-[286px] gap-[30px]">
          <h1 className=" text-[32px] font-bold">
            ТРАНС <span className=" text-red">ЮГ</span>
          </h1>
          <p className=" text-[12px] font-normal ">
            Компания <span className="font-bold">«ТРАНС ЮГ»</span> предоставляет
            транспортные услуги с 2002 года. За время работы мы стали партнерами
            множества клиентов не только в России, но и в странах СНГ и
            заслужили звание надежного грузоперевозчика.
          </p>
          <div>
            <button className="button" onClick={() => setOpen(true)}>
              Рассчитать стоимость{" "}
            </button>
          </div>
        </div>
        <img src="images/intro.png" alt="" />
      </div>
      <Popup isOpen={open} onClose={() => setOpen(false)}>
        <PriceBuiderForm />
      </Popup>
    </div>
  );
};

export default Intro;
