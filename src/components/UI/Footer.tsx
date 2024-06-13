import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className=" flex justify-center flex-col items-center   py-[40px] md:max-h-[450px] h-full  bg-dark_gray">
      <div className="container flex justify-between items-center w-full !max-w-[1000px]">
        <div>
          <img src="footer-logo.svg" alt="" className="mb-[30px]" />
          <h4 className=" text-[20px] font-bold">МЕНЮ</h4>
          <ul className="flex flex-col gap-[15px]">
            <li>
              <Link href="" className=" font-medium uppercase">
                Услуги
              </Link>
            </li>
            <li>
              <Link href="" className=" font-medium uppercase">
                О компании
              </Link>
            </li>
            <li>
              <Link href="" className=" font-medium uppercase">
                Тарифы
              </Link>
            </li>
            <li>
              <Link href="" className=" font-medium uppercase">
                Контакты
              </Link>
            </li>
          </ul>
        </div>
        <form
          className="bg-[#3A4750] py-[40px] max-w-[495px] px-[80px] "
          action=""
        >
          <h4 className="mb-[12px] font-semibold text-[20px]">Связаться</h4>
          <div className="relative w-full py-[10px] px-[15px] text-black outline-none bg-white flex items-center overflow-hidden rounded-[5px] md:min-h-[43px]">
            <input
              className=" bg-transparent"
              type="text"
              placeholder="Почта"
            />
            <div className="absolute top-0 right-0 w-[25%] flex justify-center items-center h-full bg-red  ">
              <img src="arrow.svg" alt="" />
            </div>
          </div>
          <p className="text-[18px] mt-[20px] text-neutral-500">
            Заполните простую форму и мы свяжемся с вами!
          </p>
        </form>
      </div>
      <div className="w-full h-[1px] max-w-[1074px] md:mt-[45px] bg-[#3A4750]"></div>
      <p className="md:mt-[45px]">© ТрансЮГ 2024. Все права защищены</p>
    </footer>
  );
};

export default Footer;
