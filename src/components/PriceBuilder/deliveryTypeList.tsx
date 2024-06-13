import axios from "axios";
import React, { FC, useEffect, useState } from "react";

export type DeliveryType = {
  id: number;
  name: string;
  image: string;
  weight: number;
  length: number;
  height: number;
  coefficent: number;
};

type DeliveryTypeListProps = {
  onTransportSelect: (selectedTransport: DeliveryType) => void;
};
//

const DeliveryTypeList: FC<DeliveryTypeListProps> = ({ onTransportSelect }) => {
  const [selectedTypeId, setSelectedTypeId] = useState<number>(1);
  const [deliveryTypes, setDeliveryTypes] = useState<DeliveryType[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    // Fetch transport types from the API
    const fetchDeliveryTypes = async () => {
      try {
        const response = await axios.get(
          "http://localhost/truking-back/public/api/transport-types"
        );
        const formattedData = response.data.map((type: any) => ({
          ...type,
          weight: Number(type.weight),
          length: Number(type.length),
          height: Number(type.height),
          coefficent: Number(type.coefficent),
        }));
        setDeliveryTypes(formattedData);
      } catch (error) {
        console.error("Error fetching delivery types:", error);
      }
    };

    fetchDeliveryTypes();
  }, []);
  const selectedType = deliveryTypes.find((obj) => obj.id === selectedTypeId);
  useEffect(() => {
    if (selectedType) {
      onTransportSelect(selectedType);
    }
  }, [selectedTypeId]);
  const selectType = (typeId: number) => {
    setSelectedTypeId(typeId), setIsOpen(false);
    if (selectedType) {
      onTransportSelect(selectedType);
    }
  };

  return (
    <div className="relative">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between cursor-pointer  items-center"
      >
        <img
          className=" max-h-[62px] max-w-[180px]"
          src={selectedType?.image}
          alt=""
        />
        <div className=" flex flex-col gap-[15px]">
          <h5 className=" text-[18px] font-medium">{selectedType?.name}</h5>
          <div className="flex gap-[20px]">
            <div className="flex gap-[4px]">
              <img
                className=" max-w-[24px] h-auto"
                src="images/transports/icons/weight.svg"
                alt=""
              />
              <p>{selectedType?.weight}т</p>
            </div>
            <div className="flex gap-[4px]">
              <img
                className=" max-w-[24px] h-auto"
                src="images/transports/icons/length.svg"
                alt=""
              />
              <p>{selectedType?.length}м</p>
            </div>
            <div className="flex gap-[4px]">
              <img
                className=" max-w-[24px] h-auto"
                src="images/transports/icons/height.svg"
                alt=""
              />
              <p>{selectedType?.height.toFixed(1)}м</p>
            </div>
          </div>
        </div>
        <span className=" cursor-pointer">
          <svg
            onClick={() => setIsOpen(!isOpen)}
            className={`${isOpen ? " rotate-180" : ""} transition-transform`}
            width="23"
            height="13"
            viewBox="0 0 23 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.5 13L0.67468 0.249998L22.3253 0.249998L11.5 13Z"
              fill="white"
            />
          </svg>
        </span>
      </div>
      {isOpen && (
        <div className=" z-20 absolute top-0 mt-[100px] bg-white w-full max-h-[250px]  rounded-[10px] flex flex-col p-[5px] gap-[20px]">
          <div className=" overflow-y-scroll p-[10px] flex flex-col  gap-[15px]">
            {deliveryTypes.map((type) => (
              <div
                onClick={() => selectType(type.id)}
                className={` ${
                  selectedTypeId == type.id
                    ? "bg-neutral-300"
                    : " bg-transparent"
                } flex p-[10px] hover:bg-neutral-300 rounded-[10px] border border-neutral-300 transition justify-between  text-black items-center`}
              >
                <img className=" max-w-[150px]" src={type?.image} alt="" />
                <div className=" flex flex-col gap-[5px]">
                  <h5 className=" text-[16px] font-medium">{type?.name}</h5>
                  <div className="flex gap-[20px]">
                    <div className="flex gap-[4px]">
                      <img
                        className=" max-w-[24px] h-auto"
                        src="images/transports/icons/weight.svg"
                        alt=""
                      />
                      <p>{type?.weight}т</p>
                    </div>
                    <div className="flex gap-[4px]">
                      <img
                        className=" max-w-[24px] h-auto"
                        src="images/transports/icons/length.svg"
                        alt=""
                      />
                      <p>{type?.length}м</p>
                    </div>
                    <div className="flex gap-[4px]">
                      <img
                        className=" max-w-[24px] h-auto"
                        src="images/transports/icons/height.svg"
                        alt=""
                      />
                      <p>{type?.height}м</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DeliveryTypeList;
