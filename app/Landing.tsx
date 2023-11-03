import React from "react";
import Header from "./Header";
import BgImg from "@/public/Images/bg1.jpg";
import Image from "next/image";
import { LiaImdb } from "react-icons/lia";
import { GiTomato } from "react-icons/gi";
import { AiFillPlayCircle } from "react-icons/ai";

const Landing = () => {
  return (
    <div>
      <Header />
      <div>
        <Image
          src={BgImg}
          alt="Landing"
          className="w-full h-screen object-cover z-0"
        />
      </div>
      <div className="absolute w-[404px] h-[285px] bg-none sm:left-[95px] top-[158px] left-[20px]">
        <p className="text-[48px] leading-[56px] text-white">Fast X</p>
        <div className="w-[200px] mt-4 h-[17px] bg-none flex justify-between text-center text-white text-lg">
          <div className="flex text-center justify-center items-center">
            <LiaImdb className="bg-none border-none outline-none text-yellow-600 text-[30px]" />
            <p className="ml-3">8.6/10</p>
          </div>
          <div className="flex text-center justify-center items-center">
            <GiTomato className="bg-none border-none outline-none text-red-600 text-[30px]" />
            <p className="ml-3">97%</p>
          </div>
        </div>
        <div className="text-white mt-4 max-w-[285px] text-[14px] leading-[18px]">
          <p>
            Fast X (also known as Fast & Furious 10) is a 2023 American action
            film directed by Louis Leterrier from a screenplay written by Dan
            Mazeau and Justin Lin, both of whom also co-wrote the story with
            Zach Dean. It is the sequel to F9 (2021), the tenth main
            installment, and the eleventh installment overall in the Fast &
            Furious franchise.
          </p>
        </div>
        <button className="bg-rose-700 mt-4 px-[16px] py-[6px] flex content-center justify-center items-center gap-2 text-white uppercase rounded-[6px] hover:scale-110 hover:bg-rose-500 ease-in-out duration-500">
          <AiFillPlayCircle />
          Watch Trailer
        </button>
      </div>
    </div>
  );
};

export default Landing;
