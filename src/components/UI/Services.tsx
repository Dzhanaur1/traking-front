import Link from "next/link";
import React from "react";

const Services = () => {
  return (
    <div className="container flex flex-col md:gap-[40px] md:mt-[50px]">
      <h2 className=" text-[22px] font-bold uppercase">НАШИ УСЛУГИ</h2>

      <div className="flex justify-between gap-[20px]">
        <div className="flex flex-col flex-1 gap-[15px] ">
          <img
            className="max-h-[276px] h-full"
            src="images/services/1.png"
            alt=""
          />
          <h4 className="text-[18px] font-bold">
            Международные и междугородные грузоперевозки
          </h4>

          <Link href="" className="button self-start">
            Подробнее
          </Link>
        </div>
        <div className="flex flex-col flex-1 gap-[15px] ">
          <img
            className="max-h-[276px] h-full"
            src="images/services/2.png"
            alt=""
          />
          <h4 className="text-[18px] font-bold">
            Переезды квартир, офисов, торговых сетей по России
          </h4>

          <Link href="" className="button self-start">
            Подробнее
          </Link>
        </div>
        <div className="flex flex-col flex-1 gap-[15px] ">
          <img
            className="max-h-[276px] h-full"
            src="images/services/3.png"
            alt=""
          />
          <h4 className="text-[18px] font-bold">Перевозка сборных грузов</h4>

          <Link href="" className="button self-start mt-auto">
            Подробнее
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
