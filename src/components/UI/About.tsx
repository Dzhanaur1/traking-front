import React from "react";

const About = () => {
  return (
    <div className="container md:mb-[150px] flex items-center justify-between ">
      <div className="flex flex-col md:max-w-[630px] text-[20px]">
        <h2 className=" italic font-black text-[60px] leading-none">
          ТРАНС <span className="text-red">ЮГ</span>
        </h2>
        <h3 className="mb-[17px] font-bold">ГРУЗОПЕРЕВОЗКИ</h3>
        <div>
          <p>
            <i className="font-semibold">
              ТРАНС <span className="text-red">ЮГ</span>
            </i>
            – мультисервисный оператор логистических услуг, эксперт в сфере
            комплексных решений и организации грузоперевозок на территории
            России и за рубежом.
          </p>
          <p className="font-semibold my-[20px]">
            Компания основана в 2012 году.
          </p>
          <p>
            Ежегодно услугами компании пользуются .
            <span className="font-semibold">4,5 млн клиентов</span>
          </p>
        </div>
      </div>
      <img src="images/about.svg" alt="" />
    </div>
  );
};

export default About;
