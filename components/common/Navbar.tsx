"use client";
import Image from "next/image";
import logo from "../../public/logo.webp";
import useAuthStore from "../../store/authstore";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";

const NavigationBar = () => {
  const [menu, setMenu] = useState(false);
  const [userData, setUserData] = useState<{
    user: { username: string; email: string };
  } | null>(null);

  const { user, clearAuth } = useAuthStore();

  useEffect(() => {
    setUserData(user);
  }, [user]);

  const LogHangler = () => {
    if (userData) {
      clearAuth();
    } else {
      window.location.href = "/auth";
    }
  };
  return (
    <div className="z-10 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 border-2 rounded-xl border-[#79233f46] border-t-0 bg-[#86182a2d]">
      <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <Image
          src={logo}
          className="h-8 w-8 overflow-hidden rounded-xl"
          alt="Proactinet Logo"
        />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Proactinet
        </span>
      </a>

      <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        {menu && (
          <div
            className="z-50 absolute right-5 top-10 my-4 text-base list-none bg-[#1f1212c4] border-2 border-[#a00c223b] divide-y divide-gray-100 shadow-sm rounded-xl"
            id="user-dropdown"
          >
            <div className="px-4 py-3">
              <span className="block text-sm text-white">
                {userData ? userData.user.username : ""}
              </span>
              <span className="block text-sm text-gray-400">
                {userData ? userData.user.email : ""}
              </span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <a
                  href="/dashboard"
                  className="block px-4 py-2 text-sm hover:bg-[#8b312a5e] dark:text-gray-200 dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <button
                className="hover:bg-[#8b312a5e] w-full text-left"
                onClick={LogHangler}
              >
                <div className="block px-4 py-2 text-sm text-gray-200 hover:text-white">
                  {userData ? "Logout" : "Login"}
                </div>
              </button>
            </ul>
          </div>
        )}

        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 md:hidden focus:bg-[#8128285e] focus:ring-2 focus:ring-[#ac4161c7] rounded-xl"
          aria-controls="navbar-user"
          aria-expanded={menu}
          onClick={() => setMenu(!menu)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>

      <Button
        className="hidden w-full md:flex absolute xl:relative ml-[78%] right-10 md:w-auto md:order-1"
        id="navbar-user"
        onClick={LogHangler}
      >
        <div className="block px-4 py-2 text-sm text-gray-200 hover:text-white">
          {userData ? "Logout" : "Login"}
        </div>

        {/* ...links */}
      </Button>
    </div>
  );
};

export default NavigationBar;
