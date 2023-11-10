"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import AllMovies from "./AllMovies";

const MoreMovies = () => {
  return (
    <div className="w-full h-fit lg:px-[100px] sm:px-[50px] md:px-[50px]">
      <div className="bg-white w-full h-full">
        <div className="w-full flex flex-col md:flex-row justify-between pt-10 px-5">
          <p className="text-3xl font-bold">All Top Rated Movies</p>
          <div className="flex gap-5 py-3 md:py-0 justify-between">
            <a
              href="/"
              className="text-blue-700 flex items-center justify-center gap-2 hover:text-rose-400 font-semibold text-sm"
            >
              Home
              <AiOutlineRight />
            </a>
            <a
              href="/allmovies/popular"
              className="text-rose-700 flex items-center justify-center gap-2 hover:text-rose-400 font-semibold text-sm"
            >
              Popular
              <AiOutlineRight />
            </a>
            <a
              href="/allmovies/upcoming"
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
