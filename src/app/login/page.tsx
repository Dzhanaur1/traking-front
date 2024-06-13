"use client";
import { getToken } from "@/utils/getToken";
import { TextField } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../store/libs/authSlice";
import { RootState } from "../store/store";

const LoginPage = () => {
  const [inputLogin, setLogin] = useState<string>("");
  const [inputPassword, setPassword] = useState<string>("");
  const router = useRouter();
  const token = useSelector((state: RootState) => state.authSlice.user?.token);

  useEffect(() => {
    if (token) {
      if (typeof window !== "undefined") {
        router.push("/");
      }
    }
  }, []);

  const dispatch = useDispatch();
  const onClickLoginBtn = async (event: ChangeEvent<EventTarget>) => {
    event.preventDefault();
    const data = await getToken(inputLogin, inputPassword);
    if (data.status == 401) {
      alert("Введены неверные данные");
    }
    const token = data.token;
    const role = data.role;

    dispatch(loginAction({ token, role }));
    if (data.role == "admin") {
      if (typeof window !== "undefined") {
        router.push("/admin");
      }
    }
    if (data.role == "user") {
      if (typeof window !== "undefined") {
        router.push("/profile");
      }
    }
  };
  return (
    <div className="flex w-full min-h-[600px]  h-full pt-[70px] justify-center items-center">
      <form
        action=""
        className=" items-center rounded-[15px] gap-[25px] bg-white flex flex-col p-[75px]"
      >
        <h2 className=" md:mb-[20px] text-black font-bold text-[32px]">
          Войдите в систему
        </h2>
        <TextField
          focused={false}
          id="standard-basic"
          label="Логин"
          variant="standard"
          value={inputLogin}
          onChange={(vlaue) => setLogin(vlaue.target.value)}
          className="md:min-w-[500px]  text-[20px]"
        />
        <TextField
          type="password"
          focused={false}
          id="standard-basic"
          label="Пароль"
          variant="standard"
          className="md:min-w-[500px] text-[20px] placeholder:text-[20px]"
          value={inputPassword}
          onChange={(vlaue) => setPassword(vlaue.target.value)}
        />
        <Link href="" className="">
          <button
            onClick={(event) => onClickLoginBtn(event)}
            className=" font-bold md:min-w-[190px] button border border-red"
          >
            Войти
          </button>
        </Link>
        <p className="text-black">
          Нет аккаунта?{" "}
          <Link href="registration" className=" underline">
            Зарегистрироваться
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
