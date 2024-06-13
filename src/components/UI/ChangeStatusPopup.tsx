"use client";
import { updateOrderStatus } from "@/utils/updateStatus";
import React, { FC, ReactNode, useEffect, useState } from "react";

const ChangeStatus = ({ id, status }: { id: number; status: string }) => {
  const [newStatus, setNewStatus] = useState<string>("");
  const handleChangeStatus = async () => {
    const message = await updateOrderStatus(id, newStatus);
    alert(message);
    
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  return (
    <div className="flex ml-3 flex-col p-[35px] rounded-[15px]  bg-dark_gray container">
      <h2 className=" font-bold text-[20px] text-white">
        Изменить статус заказа
      </h2>
      <p>Текущий статус: {status}</p>
      <select
        value={newStatus}
        onChange={(e) => setNewStatus(e.target.value)}
        className="mt-4 mb-4 p-2 border rounded"
      >
        <option value="" disabled>
          Выберите статус
        </option>
        <option value="Новый">Новый</option>
        <option value="В процессе">В процессе</option>
        <option value="Завершен">Завершен</option>
        <option value="Отменен">Отменен</option>
      </select>
      <div>
        <button onClick={() => handleChangeStatus()} className="button  ">
          Сохранить
        </button>
      </div>
    </div>
  );
};

export default ChangeStatus;
