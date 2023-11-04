import React from "react";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full h-[145px] content-center mt-[150px] mb-6 items-center">
      <div className="w-[240px] h-[28px] flex m-auto justify-between text-[26px]">
        <a href="/">
          <AiFillFacebook className="hover:scale-150 ease-in-out duration-300" />
        </a>
        <a href="/">
          <AiFillInstagram className="hover:scale-150 ease-in-out duration-300" />
        </a>
        <a href="/">
          <AiOutlineTwitter className="hover:scale-150 ease-in-out duration-300" />
        </a>
        <a href="/">
          <AiFillYoutube className="hover:scale-150 ease-in-out duration-300" />
        </a>
      </div>
      <div className="w-fit mt-6 m-auto gap-[48px] flex text-[13px] md:text-lg font-semibold justify-between text-center items-center">
        <p className="cursor-pointer hover:text-blue-600">Conditions of use</p>
        <p className="cursor-pointer hover:text-blue-600">Privacy & Policy</p>
        <p className="cursor-pointer hover:text-blue-600">Press Room</p>
      </div>
      <div className="w-[370px] text-gray-500 m-auto mt-4 text-sm text-center items-center">
        <p>© 2021 MovieBox by Akinro Destined Modupe </p>
      </div>
    </div>
  );
};

export default Footer;
