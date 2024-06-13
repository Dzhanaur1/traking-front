import React from "react";

const Contact = () => {
  return (
    <div className="container flex justify-between items-center my-[150px]  ">
      <img src="images/contact.png" alt="" />
      <div className="flex flex-col max-w-[420px]">
        <h2 className=" font-bold text-[48px] leading-tight">
          Стать клиентом
          <br />
          <span className=" font-black italic">
            ТРАНС<span className=" text-red"> ЮГ</span>
          </span>
        </h2>
        <p>Заполните простую форму и мы свяжемся с вами!</p>

        <form
          className="flex flex-col justify-center items-center gap-[17px] mt-[40px]"
          action=""
        >
          <input
            type="text"
            placeholder="Имя"
            className=" w-full py-[10px] px-[15px] text-black outline-none bg-white rounded-[5px] md:min-h-[43px] "
          />
          <input
            type="tel"
            placeholder="Номер телефона"
            className=" w-full py-[10px] px-[15px] text-black outline-none bg-white rounded-[5px] md:min-h-[43px] "
          />
          <input
            type="email"
            placeholder="Почта"
            className=" w-full py-[10px] px-[15px] text-black outline-none bg-white rounded-[5px] md:min-h-[43px] "
          />
          <button className="button-red w-full md:max-w-[250px]">
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
