"use client";
import { NextPage } from "next";
import useAuthStore from "../../store/authstore";
import CircularProgressBar from "@/components/molecules/ProgressBar";
import { Skeleton } from "@/components/ui/skeleton";
import {
  FiActivity,
  FiTrendingUp,
  FiShield,
  FiLayers,
  FiUser,
} from "react-icons/fi";
import "./style.css";
import RealtimeDisplay from "@/dynamicData/realtimeLogs";
import RealtimeGraph from "@/dynamicData/realtimeGraph";
import { FiMail } from "react-icons/fi";
import { useState, useEffect } from "react";

const dashboard: NextPage = () => {
  var user;
  try {
    user = useAuthStore((state) => state.user);
    // console.log(user);
  } catch {
    window.location.href = "/auth";
    return <section>Please Login First</section>;
  }

  return (
    <section className="w-full h-[100vh] flex flex-col py-4 items-center">
      <div className="py-16">
        <div className="mx-auto px-6 max-w-6xl text-gray-500">
          <div className="relative">
            <div className="relative z-10 grid gap-3 grid-cols-6">
              <div className="col-span-full lg:col-span-4 overflow-hidden flex relative p-8 rounded-xl bg-gradient-to-b from-[#ffffff10] via-[#ffffff09] to-[#ffff1300] border border-pink-accent ">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    {/* Make sure to install react-icons if not already installed */}
                    <FiActivity className="text-4xl text-yellow-300" />
                    <h2 className="text-3xl font-bold text-white">
                      Welcome to ProActinet
                    </h2>
                  </div>
                  <p className="text-yellow-200">
                    Here you can monitor real-time analytics and system
                    performance as you work.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div className="flex items-center p-4 bg-yellow-900/20 rounded-xl">
                      <FiTrendingUp className="text-2xl text-yellow-300 mr-3" />
                      <span className="text-yellow-300 text-sm">
                        Real-time analytics for informed decision-making
                      </span>
                    </div>
                    <div className="flex items-center p-4 bg-yellow-900/20 rounded-xl">
                      <FiShield className="text-2xl text-yellow-300 mr-3" />
                      <span className="text-yellow-300 text-sm">
                        Robust security protocols to safeguard your data
                      </span>
                    </div>
                    <div className="flex items-center p-4 bg-yellow-900/20 rounded-xl">
                      <FiLayers className="text-2xl text-yellow-300 mr-3" />
                      <span className="text-yellow-300 text-sm">
                        Seamless integrations with your preferred tools
                      </span>
                    </div>
                    <div className="flex items-center p-4 bg-yellow-900/20 rounded-xl">
                      <FiUser className="text-2xl text-yellow-300 mr-3" />
                      <span className="text-yellow-300 text-sm">
                        User-centric design for an intuitive experience
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-yellow-400 mt-2">
                    Stay tuned for continuous updates and additional features
                    designed to enhance your productivity.
                  </p>
                </div>
              </div>

              <div className="col-span-full lg:col-span-2 overflow-hidden flex flex-col relative p-8 rounded-xl bg-gradient-to-b from-[#ffffff10] via-[#ffffff09] to-[#ffff1300] border border-pink-accent ">
                <h3 className="text-2xl font-bold text-white mb-4">Details</h3>
                <div className="flex items-center gap-3 mb-4">
                  <FiUser className="text-3xl text-blue-400" />
                  <span className="text-white text-xl font-semibold">
                    {user?.user?.username || "Username"}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FiMail className="text-3xl text-green-400" />
                  <span className="text-white text-lg font-semibold">
                    {user?.user?.email || "email@example.com"}
                  </span>
                </div>
              </div>

              <div className="col-span-full lg:col-span-3 overflow-hidden relative p-4 sm:p-8 rounded-xl bg-gradient-to-b from-[#ffffff10] via-[#ffffff09] to-[#ffff1300] border-pink-accent border">
                <div>
                  <h2 className="text-3xl font-bold text-white">
                    Get your Logs here
                  </h2>
                </div>
                <div className="w-full min-h-[20rem] max-h-[25rem] overflow-scroll px-2 py-6">
                  {/* repeatable component  */}
                  <RealtimeDisplay />
                </div>
              </div>
              <div className="col-span-full lg:col-span-3 overflow-hidden relative p-8 rounded-xl border border-pink-accent bg-gradient-to-b from-[#ffffff10] via-[#ffffff09] to-[#ffff1300]">
                <div>
                  <h2 className="text-3xl font-bold text-white">
                    Activity Insights
                  </h2>
                </div>
                <div className="w-full min-h-[20rem] max-h-[25rem] overflow-scroll translate-x-[-35px] sm:translate-x-[0px] py-6">
                  {/* repeatable component  */}
                  <RealtimeGraph />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Styling imports */}
      <div className="z-[-1] glow-effect top-0 left-10"></div>
      <div className="z-[-1] glow-effect-xl hidden xl:flex top-20 left-10"></div>
      <div className="z-[-1] glow-effect bottom-10 right-10"></div>
      <div className="z-[-1] glow-effect bottom-0 xl:hidden right-10"></div>
      <div className="z-[-1] glow-effect-xl bottom-0 xl:flex hidden right-10"></div>
      <div className="z-[-1] glow-effect-xl bottom-50 float right-50"></div>
    </section>
  );
};
// <div>
//   <h1>Dashboard</h1>
//   <p>Welcome, {user.user.username}!</p>
// </div>

export default dashboard;
