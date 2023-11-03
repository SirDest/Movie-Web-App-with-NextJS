"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import AllMovies from "./AllMovies";
import { FaBars, FaTimes } from "react-icons/fa";

const MoreMovies = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full h-fit lg:px-[100px] sm:px-[50px] md:px-[50px]">
      <div className="bg-white w-full h-full">
        <div className="w-full flex justify-between pt-[100px] ">
          <p className="text-3xl font-bold">All Top Rated Movies</p>
          <div className="hidden md:flex gap-5">
            <a
              href="/"
              className="text-blue-700 flex items-center justify-center gap-2 hover:text-rose-400 font-semibold text-sm"
            >
              Home
              <AiOutlineRight />
            </a>
            <a
              href="/popular"
              className="text-rose-700 flex items-center justify-center gap-2 hover:text-rose-400 font-semibold text-sm"
            >
              Popular Movies
              <AiOutlineRight />
            </a>
            <a
              href="/upcoming"
              className="text-rose-700 flex items-center justify-center gap-2 hover:text-rose-400 font-semibold text-sm"
            >
              Upcoming
              <AiOutlineRight />
            </a>
          </div>
          <div
            onClick={handleClick}
            className="md:hidden text-center flex items-center"
          >
            {!nav ? <FaBars /> : <FaTimes />}
          </div>
          <div
            className={
              !nav
                ? "hidden"
                : "absolute md:hidden z-20 top-20 right-7 sm:right-20 w-fit h-fit bg-white border border-black flex-col flex gap-5  px-7 py-4 justify-center items-center"
            }
          >
            <a
              href="/"
              className="text-blue-700 flex items-center justify-center gap-2 hover:text-rose-400 font-semibold text-sm"
            >
              Home
              <AiOutlineRight />
            </a>
            <a
              href="/popular"
              className="text-rose-700 flex items-center justify-center gap-2 hover:text-rose-400 font-semibold text-sm"
            >
              Popular Movies
              <AiOutlineRight />
            </a>
            <a
              href="/upcoming"
              className="text-rose-700 flex items-center justify-center gap-2 hover:text-rose-400 font-semibold text-sm"
            >
              Upcoming
              <AiOutlineRight />
            </a>
          </div>
        </div>
        <div className="px-7 sm:px-o">
          <AllMovies />
        </div>
      </div>
    </div>
  );
};

export default MoreMovies;
