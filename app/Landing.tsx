// "use client";
import React, { Suspense, useEffect, useState } from "react";
import Header from "./Header";
import BgImg from "@/public/Images/bg1.jpg";
import Image from "next/image";
import { LiaImdb } from "react-icons/lia";
import { GiTomato } from "react-icons/gi";
import { AiFillPlayCircle } from "react-icons/ai";
import { MoviesType } from "@/typings ";
import { title } from "process";
import Loading from "./loading";

export const fetchMovies = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=b7a4a649482ae6b85f96f25cfb20fdf5"
  );
  const data = await response.json();
  const movies: MoviesType[] = data.results.slice(0, 10);
  const randomMovie = movies[Math.floor(Math.random() * movies.length)];
  return randomMovie;
};

const Landing = async () => {
  const theMovie = await fetchMovies();
  const apiImage = "https://image.tmdb.org/t/p/w500";

  const thepage = async () => {
    return (
      <div>
        <Header />
        <div>
          <Image
            src={apiImage + theMovie.backdrop_path}
            width={1000000}
            height={1000000}
            alt={theMovie.title}
            quality={100}
            className="w-full h-screen object-cover z-0"
          />
        </div>
        <div className="absolute w-[404px] h-fit bg-none sm:left-[95px] top-[158px] left-[20px]">
          <p className="text-[34px] leading-9 w-[350px] h-fit text-white">
            {theMovie.title}
          </p>
          <div className="w-[200px] mt-4 h-[17px] bg-none flex justify-between text-center text-white text-lg">
            <div className="flex text-center justify-center items-center">
              <LiaImdb className="bg-none border-none outline-none text-yellow-600 text-[30px]" />
              <p className="ml-3">{theMovie.vote_average}/10</p>
            </div>
            <div className="flex text-center justify-center items-center">
              <GiTomato className="bg-none border-none outline-none text-red-600 text-[30px]" />
              <p className="ml-3">97%</p>
            </div>
          </div>
          <div className="text-white mt-4 max-w-[285px] text-[14px] leading-[18px]">
            <p>{theMovie.overview}</p>
          </div>
          <button className="bg-rose-700 mt-4 px-[16px] py-[6px] flex content-center justify-center items-center gap-2 text-white uppercase rounded-[6px] hover:scale-110 hover:bg-rose-500 ease-in-out duration-500">
            <AiFillPlayCircle />
            Watch Trailer
          </button>
        </div>
      </div>
    );
  };

  return thepage();
};

export default Landing;
