"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/libs/authSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { RootState } from "../store/store";

const Page = () => {
  const dispatch = useDispatch();
  const userRole = useSelector(
    (state: RootState) => state.authSlice.user?.role
  );
  const router = useRouter();

  useEffect(() => {
    if (userRole !== "user") {
      alert("Ошибка авторизации. Войдите в систему");
      router.push("/login");
    }
  }, [userRole, router]);

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  if (userRole === "user") {
    return (
      <div className="container pt-[100px]">
        <Link href="/">
          <button className="button" onClick={handleLogout}>
            Выйти
          </button>
        </Link>
      </div>
    );
  }

  return null;
};

export default Page;
