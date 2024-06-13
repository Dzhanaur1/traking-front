import React from "react";

const Features = () => {
  return (
    <div className="container flex justify-between md:my-[50px]">
      <div className="flex flex-col flex-1 justify-center items-center border-r border-[#fff] md:min-h-[200xp] h-full gap-[20px] ">
        <h3 className=" text-red text-[68px] font-bold">20+</h3>
        <p className=" text-center text-[24px] font-bold max-w-[300px]">
          Более 20 лет опыта грузовых перевозок
        </p>
      </div>
      <div className="flex flex-col flex-1 justify-center items-center border-r border-[#fff] md:min-h-[200xp] h-full gap-[20px] ">
        <h3 className=" text-red text-[68px] font-bold">145</h3>
        <p className=" text-center text-[24px] font-bold max-w-[300px]">
          Городов присутствия по всей России и СНГ
        </p>
      </div>
      <div className="flex flex-col flex-1 justify-center items-center md:min-h-[200xp] h-full gap-[20px] ">
        <h3 className=" text-red text-[68px] font-bold">{">"}2 млн</h3>
        <p className=" text-center text-[24px] font-bold max-w-[200px]">
          Выполненных заказов в год
        </p>
      </div>
    </div>
  );
};

export default Features;
