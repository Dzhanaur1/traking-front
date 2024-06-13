"use client";
import { logout } from "@/app/store/libs/authSlice";
import { RootState } from "@/app/store/store";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const role = useSelector((state: RootState) => state.authSlice.user?.role);

  return (
    <header className=" fixed w-full py-[6px] z-10 bg-dark_gray">
      <div className="container flex  items-center ">
        <Link href="/" className="flex-1">
          <img src="logo.svg" alt="" />
        </Link>

        <nav className="flex-1 flex justify-center">
          <ul className="flex gap-[30px] items-center  uppercase whitespace-nowrap font-normal ">
            <li>
              <Link href="#services">Услуги</Link>
            </li>
            <li>
              <Link href="#about">О компании</Link>
            </li>

            <li>
              <Link href="#contact">Контакты</Link>
            </li>
          </ul>
        </nav>
        <div className="flex-1 flex justify-end">
          {role === "" && (
            <Link href="login">
              <button className="button">Войти</button>
            </Link>
          )}
          {role === "admin" && (
            <div className="flex gap-[10px]">
              <Link href="/">
                <button onClick={() => dispatch(logout())} className="button">
                  Выйти
                </button>
              </Link>
              <Link href="admin">
                <div className="button">Заказы</div>
              </Link>
            </div>
          )}
          {role === "user" && (
            <Link href="profile">
              <div className="button">Профиль</div>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
