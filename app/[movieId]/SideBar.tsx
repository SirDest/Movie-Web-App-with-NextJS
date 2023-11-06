import React from "react";
import Logo from "@/public/Images/Logo.png";
import HalfLogo from "@/public/Images/Half-Logo.png";
import { GoHome } from "react-icons/go";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { PiMonitorPlay } from "react-icons/pi";
import { LiaNewspaperSolid } from "react-icons/lia";
import { MdOutlineExitToApp } from "react-icons/md";
import Image from "next/image";

const SideBar = () => {
  return (
    <div className="hidden md:flex w-fit h-screen py-[40px] px-[20px] flex-col justify-between gap-3 border border-gray-400 rounded-r-[45px]">
      <a href="/">
        <Image
          src={Logo}
          width={50}
          height={50}
          alt="MovieBox"
          className="block lg:hidden rounded-full hover:scale-110 ease-in-out
        duration-500"
        />
        <Image
          src={HalfLogo}
          width={50}
          height={50}
          alt="MovieBox"
          className="block lg:hidden rounded-full hover:scale-110 ease-in-out duration-500"
        />
      </a>

      <ul>
        <li className="p-4 hover:bg-[#f8e7eb] hover:border-b-rose-500 border-b-2 border-b-[rgba(0,0,0,0)]">
          <a
            href="/"
            className="flex gap-3 text-[20px] font-light items-center text-left"
          >
            <GoHome />
            <span className="hidden lg:block">Home</span>
          </a>
        </li>
        <li className="p-4 hover:bg-[#f8e7eb] hover:border-b-rose-500 border-b-[rgba(0,0,0,0)] border-b-2">
          <a
            href="/"
            className="flex gap-3 text-[20px] font-light items-center  text-left"
          >
            <AiOutlineVideoCamera />
            <span className="hidden lg:block">Movies</span>
          </a>
        </li>
        <li className="p-4 hover:bg-[#f8e7eb] hover:border-b-rose-500 border-b-[rgba(0,0,0,0)] border-b-2">
          <a
            href="/"
            className="flex gap-3 text-[20px] font-light items-center text-left"
          >
            <PiMonitorPlay />
            <span className="hidden lg:block">TV Series</span>
          </a>
        </li>
        <li className="p-4 hover:bg-[#f8e7eb] hover:border-b-rose-500 border-b-[rgba(0,0,0,0)] border-b-2">
          <a
            href="/"
            className="flex gap-3 text-[20px] font-light items-center text-left"
          >
            <LiaNewspaperSolid />
            <span className="hidden lg:block">Upcoming</span>
          </a>
        </li>
      </ul>
      <div className="hidden w-[170px] text-[#333333] border border-rose-500 bg-[#fcf5f7] lg:flex flex-col gap-1 rounded-[20px] p-4 items-center ">
        <p className="text-[15px] leading-[22.5px] font-semibold ">
          Play Movie Quizes and earn free tickets
        </p>
        <p className="text-[12px]leading-[18px] text-[#666666]">
          50k people are playing now
        </p>
        <button className="bg-[#BE123C33] hover:scale-105 text-[12px] px-4 py-2 font-bold m-auto place-content-center items-center text-center text-[#BE123C] rounded-[30px]">
          Start playing
        </button>
      </div>
      <button className="border-none text-black font-bold flex gap-2 m-auto place-content-center items-center text-center ">
        <MdOutlineExitToApp className="text-[20px]" />
        <span className="hidden lg:block">Log out</span>
      </button>
    </div>
  );
};

export default SideBar;
