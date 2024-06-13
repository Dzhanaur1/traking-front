"use client";
import React, { useState } from "react";
import axios from "axios";
import { TextField } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { loginAction } from "../store/libs/authSlice";

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const handleRegister = async (e: React.FormEvent) => {
    if (
      name === "" ||
      login === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      return alert("Заполните все поля");
    }
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Пароли не совпадают");
      return;
    }
    setLoading(true);
    console.log(name, password, login);

    try {
      const response = await axios.post(
        "http://localhost/truking-back/public/api/registration",
        {
          name,
          login,
          password,
        }
      );
      const token = response.data.token;
      const role = response.data.user_role;
      console.log(response, token, role);

      dispatch(loginAction({ token, role }));

      alert("Вы успешно зарегистрированы !");
      setLoading(false);
      if (typeof window !== "undefined") {
        router.push("/profile");
      }
      // Additional actions on success (e.g., redirect to login)
    } catch (error: any) {
      setLoading(false);
      alert(error.response.data.message);
    }
  };

  return (
    <div className="relative flex w-full min-h-[600px]  h-full pt-[70px] justify-center items-center">
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="w-16 h-16 border-4 border-blue-500 border-solid border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <form
        className="items-center  my-[100px] rounded-[15px] min-w-[600px] gap-[25px] bg-white flex flex-col p-[75px]"
        onSubmit={handleRegister}
      >
        <h2 className="md:mb-[20px] text-black font-bold text-[32px]">
          Регистрация
        </h2>
        <TextField
          focused={false}
          id="name"
          label="Имя"
          variant="standard"
          value={name}
          onChange={(value) => setName(value.target.value)}
          className="w-full text-[20px]"
        />
        <TextField
          focused={false}
          id="login"
          label="Логин"
          variant="standard"
          value={login}
          onChange={(value) => setLogin(value.target.value)}
          className="w-full text-[20px]"
        />
        <TextField
          type="password"
          focused={false}
          id="password"
          label="Пароль"
          variant="standard"
          className="w-full text-[20px] placeholder:text-[20px]"
          value={password}
          onChange={(value) => setPassword(value.target.value)}
        />
        <TextField
          type="password"
          focused={false}
          id="confirm_password"
          label="Подтвердите пароль"
          variant="standard"
          className="w-full text-[20px] placeholder:text-[20px]"
          value={confirmPassword}
          onChange={(value) => setConfirmPassword(value.target.value)}
        />
        <Link href="" className="">
          <button
            onClick={(event) => handleRegister(event)}
            className=" font-bold md:min-w-[190px] button border border-red"
          >
            Войти
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Register;
