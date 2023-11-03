"use client";
import Image from "next/image";
import NavLogo from "@/public/Images/Logo.png";
import Search from "./Search";
import { FaEquals, FaSistrix } from "react-icons/fa";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [items, setItems] = useState(false);

  const showItems = () => {
    setItems(!items);
  };

  return (
    <div className="w-full text-white flex justify-between text-center m-auto h-fit pl-4 sm:px-[40px] md:px-[95px] md:py-3 absolute top-0 z-40">
      <div className="h-fit flex justify-center text-center items-center py-[15px] cursor-pointer hover:scale-110 ease-in-out duration-500">
        <a href={"/"}>
          <Image src={NavLogo} alt="MovieBox" className="w-[186px] h-[50px] " />
        </a>
      </div>
      <div className="hidden lg:flex ">
        <Search />
      </div>
      <div className="w-[fit] h-[36px] pr-4 gap-3 mt-[22px] flex justify-between leading-6 bold font-[16px] cursor-pointer">
        <p className="md:flex hidden justify-center text-center content-center items-center m-auto">
          Sign in
        </p>

        <button
          className="w-[36px] rounded-full h-[36px] bg-rose-700 hover:bg-rose-500 ease-in-out duration-500 flex lg:hidden justify-center cursor-pointer text-center content-center items-center m-auto"
          onClick={showItems}
        >
          {!items ? <FaSistrix /> : <AiOutlineClose />}
        </button>
      </div>
      <div
        className={
          !items
            ? "hidden"
            : "z-40 absolute top-10 right-3 sm:right-12 md:right-28 md:top-16 w-fit h-fit flex-col flex lg:hidden justify-center items-center text-white"
        }
      >
        <Search />
      </div>
    </div>
  );
};

export default Header;
