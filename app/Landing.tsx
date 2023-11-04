"use client";
import React, { Suspense, useEffect, useState } from "react";
import Header from "./Header";
import BgImg from "@/public/Images/bg1.jpg";
import Image from "next/image";
import { LiaImdb } from "react-icons/lia";
import { GiTomato } from "react-icons/gi";
import { AiFillPlayCircle } from "react-icons/ai";
import { MoviesType } from "@/typings ";
import Loading from "./loading";

const Landing = () => {
  const [landingBg, setLandingBg] = useState("");
  const [title, setTitle] = useState("");
  const [overview, setOverview] = useState("");
  const [voteAverage, setVoteAverage] = useState(0);
  const apiUrl =
    "https://api.themoviedb.org/3/movie/popular?api_key=b7a4a649482ae6b85f96f25cfb20fdf5";

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // const topTen = data.results.slice(0, 10);
        const movies: MoviesType[] = data.results;
        const randomMovie = movies[Math.floor(Math.random() * movies.length)];
        console.log(randomMovie);
        const apiImage = "https://image.tmdb.org/t/p/w500";

        const moviePoster = apiImage + randomMovie.backdrop_path;
        const movieTitle = randomMovie.title;
        const movieOverview = randomMovie.overview;
        const vote = randomMovie.vote_average;
        setLandingBg(moviePoster);
        setTitle(movieTitle);
        setOverview(movieOverview);
        setVoteAverage(vote);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Header />
      <div>
        <Image
          src={landingBg}
          width={100000}
          height={100000}
          alt="Landing"
          className="w-full h-screen object-cover z-0"
        />
      </div>
      <div className="absolute w-[404px] h-fit bg-none sm:left-[95px] top-[158px] left-[20px]">
        <p className="text-[34px] leading-9 w-[350px] h-fit text-white">
          {title}
        </p>
        <div className="w-[200px] mt-4 h-[17px] bg-none flex justify-between text-center text-white text-lg">
          <div className="flex text-center justify-center items-center">
            <LiaImdb className="bg-none border-none outline-none text-yellow-600 text-[30px]" />
            <p className="ml-3">{voteAverage}/10</p>
          </div>
          <div className="flex text-center justify-center items-center">
            <GiTomato className="bg-none border-none outline-none text-red-600 text-[30px]" />
            <p className="ml-3">97%</p>
          </div>
        </div>
        <div className="text-white mt-4 max-w-[285px] text-[14px] leading-[18px]">
          <p>{overview}</p>
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
