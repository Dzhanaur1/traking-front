"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/libs/authSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { RootState } from "../store/store";
import { fetchProfile } from "@/utils/getProfileData";

const Page = () => {
  const [profile, setProfile] = useState<any>(null);
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
    const loadProfile = async () => {
      const data = await fetchProfile();
      setProfile(data);
    };
    loadProfile();
  }, [userRole, router]);
  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };
  console.log(profile);

  if (userRole === "user") {
    return (
      <div className="container pt-[100px]">
        <div className="profile-info">
          <h2>Профиль пользователя</h2>

          <p>Имя: {profile?.name}</p>
          <p>Логин: {profile?.login}</p>
          <p>Роль: {profile?.role}</p>
        </div>
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
