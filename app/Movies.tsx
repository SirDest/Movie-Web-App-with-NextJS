import React, { useEffect, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import MovieCard from "./MovieCard";

const Movies = async () => {
  return (
    <div className="w-full h-fit lg:px-[100px] sm:px-[50px] md:px-[50px]">
      <div className="bg-white w-full h-full">
        <div className="w-full flex justify-between pt-[100px] ">
          <p className="text-3xl font-bold">Featured Movie</p>
          <a
            href="/popular"
            className="text-rose-700 flex items-center justify-center gap-2 hover:text-rose-400 font-semibold text-sm"
          >
            See more <AiOutlineRight />
          </a>
        </div>
        <div className="px-7 sm:px-o">
          <MovieCard />
        </div>
      </div>
    </div>
  );
};

export default Movies;
