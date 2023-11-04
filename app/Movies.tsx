import React, { useEffect, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import MovieCard from "./MovieCard";

const Movies = async () => {
  return (
    <div className="w-full h-fit lg:px-[100px] sm:px-[50px] md:px-[50px]">
      <div className="bg-white w-full h-full">
        <div className="w-full flex flex-col md:flex-row justify-between pt-[100px] px-5">
          <div>
            <p className="text-3xl font-bold">Featured Movie</p>
          </div>
          <div className="flex gap-5 py-3 md:py-0 justify-between">
            <a
              href="/upcoming"
              className="text-rose-700 flex items-center justify-center gap-2 hover:text-rose-400 font-semibold text-sm"
            >
              Upcoming
              <AiOutlineRight />
            </a>
            <a
              href="/popular"
              className="text-rose-700 flex items-center justify-center gap-2 hover:text-rose-400 font-semibold text-sm"
            >
              Popular
              <AiOutlineRight />
            </a>
            <a
              href="/toprated"
              className="text-rose-700 flex items-center justify-center gap-2 hover:text-rose-400 font-semibold text-sm"
            >
              Top Rated
              <AiOutlineRight />
            </a>
          </div>
        </div>
        <div className="px-7 sm:px-o">
          <MovieCard />
        </div>
      </div>
    </div>
  );
};

export default Movies;
