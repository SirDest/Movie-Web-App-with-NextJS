import React, { useState } from "react";
import { LiaImdb } from "react-icons/lia";
import { GiTomato } from "react-icons/gi";
import Image from "next/image";
import { MoviesType } from "@/typings ";
import Liked from "../../Liked";

export const fetchMovies = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=b7a4a649482ae6b85f96f25cfb20fdf5"
  );
  const data = await response.json();
  const movies: MoviesType[] = data.results;
  return movies;
};

const AllMovies = async () => {
  const moviesList = await fetchMovies();
  const apiImage = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="mt-10 gap-[80px] grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2">
      {moviesList.map((movie) => (
        <div data-testid="movie-card" className="relative" key={movie.id}>
          <Liked />
          <a href={`/movies/${movie.id}`}>
            <div className="card bg-none group h-[490px] rounded-[6px]">
              <div className="h-fit w-full text-center">
                <Image
                  alt={movie.title}
                  width={200}
                  height={300}
                  src={apiImage + movie.poster_path}
                  // placeholder="blur"
                  // src={bodyImg}
                  className="w-full h-[370px] object-cover relative group-hover:scale-110 ease-in-out duration-500"
                />
              </div>
              <div className="w-full">
                <p className="text-[12px] mt-4 text-gray-400 leading-[15.62px]">
                  USA,{" "}
                  <span data-testid="movie-release-date">
                    {movie.release_date}
                  </span>
                </p>
                <p
                  data-testid="movie-title"
                  className="text-[18px] mt-2 font-extrabold leading-[23.44px] text-gray-900"
                >
                  {movie.title}
                </p>
                <div className="flex w-full mt-3 justify-between">
                  <div className="flex text-center justify-center items-center">
                    <LiaImdb className="bg-none border-none outline-none text-yellow-600 text-[18px]" />
                    <p className="text-[12px] ml-2">
                      <span>{movie.vote_average}</span>/10
                    </p>
                  </div>
                  <div className="flex text-center justify-center items-center">
                    <GiTomato className="bg-none border-none outline-none text-red-600 text-[18px]" />
                    <p className="text-[12px] ml-2">97%</p>
                  </div>
                </div>
                <p className="text-[12px] mt-3 text-gray-400 leading-[15.62px]">
                  Action, Adventure, Horror
                </p>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default AllMovies;
