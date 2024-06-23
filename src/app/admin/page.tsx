"use client";
import Popup from "@/components/UI/Popup";
import PriceBuiderForm from "@/components/PriceBuilder";
import { getOrders } from "@/utils/getOrders";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useRouter } from "next/navigation";
import { deleteOrder } from "@/utils/geleteOrder";
import { logOut } from "@/utils/getToken";
import { logout } from "../store/libs/authSlice";
import ChangeStatus from "@/components/UI/ChangeStatusPopup";

const AdminPage = () => {
  const userRole = useSelector(
    (state: RootState) => state.authSlice.user?.role
  );
  const router = useRouter();

  const [searchValue, setSearchValue] = useState<string>("");
  const [orders, setOrders] = useState<OrderType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [openAdd, setOpenAdd] = useState<boolean>(false);
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [refresh, setRefresh] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fethOrders = async () => {
      try {
        const orders: OrderType[] = await getOrders();

        setOrders(orders);
        if (searchValue != "") {
          const filteredOrders = orders.filter(
            (order) =>
              order.from_location
                .toLowerCase()
                .includes(searchValue.toLowerCase()) ||
              order.to_location
                .toLowerCase()
                .includes(searchValue.toLowerCase()) ||
              order.type_of_transport
                .toLowerCase()
                .includes(searchValue.toLowerCase()) ||
              order.type_of_cargo
                .toLowerCase()
                .includes(searchValue.toLowerCase()) ||
              order.date.includes(searchValue) ||
              order.time.includes(searchValue) ||
              order.status.toLowerCase().includes(searchValue.toLowerCase()) ||
              order.phone.includes(searchValue) ||
              order.price.toString().includes(searchValue)
          );
          setOrders(filteredOrders);
        }
        if (searchValue == "") {
          setOrders(orders);
        }
      } catch (error: any) {
        alert(error.error.message);
        dispatch(logout());

        router.push("/");
      }
    };
    fethOrders();
    setLoading(true);

    setLoading(false);
  }, [searchValue, refresh]);

  const handleDelete = async (id: number) => {
    alert("Вы точно хотите удалить?");
    if (id !== null) {
      try {
        const message = await deleteOrder(id);
        alert(message);
        setRefresh((prev) => !prev);
      } catch (error: any) {
        alert(`Error: ${error.message}`);
      }
    } else {
      alert("Введите корректный ID");
    }
  };

  if (userRole == "admin") {
    return (
      <div className="flex w-full min-h-[800px]  h-full pt-[70px] justify-center items-center">
        <div className="container h-full">
          <h1 className="text-[32px] font-semibold">
            Добро пожаловать в админ панель
          </h1>
          <div className="flex w-full mt-[50px] mb-[15px] justify-between">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
                className="block w-full p-4 ps-10 text-sm text-gray-900   rounded-lg  dark:text-white outline-none  dark:bg-gray-700 "
                placeholder="Поиск..."
              />
            </div>
            <button
              className="button rounded-md"
              onClick={() => setOpenAdd(true)}
            >
              Добавить
            </button>
          </div>
          <div className=" mb-[100px]  rounded-md overflow-hidden  w-full">
            <div className=" overflow-x-hidden">
              {loading ? (
                <div>Loading...</div>
              ) : (
                <div className="  rounded-md overflow-hidden  w-full">
                  <div className=" overflow-x-hidden">
                    <table className="w-full relative text-sm  text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
                        <tr>
                          <th scope="col" className="px-6 py-3">
                            №
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Путь
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Тип транспорта
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Тип груза
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Дата
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Время
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Цена
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Статус
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Телефон
                          </th>
                          <th scope="col" className="px-2 py-3"></th>
                        </tr>
                      </thead>
                      {orders.length == 0 ? (
                        <tbody className=" overflow-y-hidden">
                          <h3 className=" text-[20px] mt-[20px]">Не найдено</h3>
                        </tbody>
                      ) : (
                        <tbody>
                          {orders.map((order) => (
                            <tr
                              key={order.id}
                              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center"
                            >
                              <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white "
                              >
                                {order.id}
                              </th>
                              <td>
                                {order.from_location} - {order.to_location}
                              </td>
                              <td>{order.type_of_transport}</td>
                              <td>{order.type_of_cargo}</td>
                              <td>{order.date}</td>
                              <td>{order.time}</td>
                              <td>{order.price} руб</td>

                              <td>{order.status}</td>
                              <td>{order.phone}</td>
                              <td className=" btn-hover relative">
                                <div className=" flex">
                                  <span className="">||</span>
                                  <div className=" transition-transform duration-300 orders-buttons translate-x-[100%]  bg-transpatent top-0  absolute flex  overflow-hidden h-full  items-center">
                                    <button
                                      onClick={() => handleDelete(order.id)}
                                      className="flex-1 rounded-l-[10px] py-3 px-3 bg-red h-full  "
                                    >
                                      Удалить
                                    </button>
                                    <button
                                      className="flex-1 h-full  py-3 px-3 bg-dark_gray "
                                      onClick={() => setOpenEdit(true)}
                                    >
                                      Редактировать
                                    </button>
                                  </div>
                                </div>
                              </td>
                              <Popup
                                isOpen={openEdit}
                                onClose={() => setOpenEdit(false)}
                              >
                                <ChangeStatus
                                  id={order.id}
                                  status={order.status}
                                />
                              </Popup>
                            </tr>
                          ))}
                        </tbody>
                      )}
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <Popup isOpen={openAdd} onClose={() => setOpenAdd(false)}>
          <PriceBuiderForm />
        </Popup>
      </div>
    );
  }
};

export default AdminPage;
