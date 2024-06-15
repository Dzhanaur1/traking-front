"use client";
import axios from "axios";
import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const sendMail = async (e: React.ChangeEvent<EventTarget>) => {
    e.preventDefault();

    const response = await axios.post(
      "http://localhost/truking-back/public/api/send",
      {
        name,
        phone,
        email,
      }
    );
    return alert(response.data.message);
  };
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
            onChange={(event) => setName(event.target.value)}
            value={name}
            type="text"
            placeholder="Имя"
            className=" w-full py-[10px] px-[15px] text-black outline-none bg-white rounded-[5px] md:min-h-[43px] "
          />
          <input
            type="tel"
            onChange={(event) => setPhone(event.target.value)}
            value={phone}
            placeholder="Номер телефона"
            className=" w-full py-[10px] px-[15px] text-black outline-none bg-white rounded-[5px] md:min-h-[43px] "
          />
          <input
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            type="email"
            placeholder="Почта"
            className=" w-full py-[10px] px-[15px] text-black outline-none bg-white rounded-[5px] md:min-h-[43px] "
          />
          <button
            className="button-red w-full md:max-w-[250px]"
            onClick={(e) => sendMail(e)}
          >
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
