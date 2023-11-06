import { MoviesType } from "@/typings ";
import React from "react";
import SideBar from "./SideBar";
import Logo from "@/public/Images/Logo.png";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { IoTicketOutline } from "react-icons/io5";
import SmallImg from "@/public/Images/small.jpeg";
import Image from "next/image";
import LikedIt from "./LikedIt";
import Starred from "./Starred";

type PageProps = {
  params: {
    movieId: string;
  };
};

const fetchMovie = async (movieId: string) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=b7a4a649482ae6b85f96f25cfb20fdf5`
  );
  const data: MoviesType = await response.json();

  return data;
};

const MovieDetails = async ({ params: { movieId } }: PageProps) => {
  const movie = await fetchMovie(movieId);
  console.log(movie);

  const apiImage = "https://image.tmdb.org/t/p/w500/";
  const movieImg = apiImage + movie.backdrop_path;
  return (
    <div className="flex">
      <SideBar />
      <div className="sm:p-7 px-2 pt-2 lg:pb-2 text-2xl w-full h-fit font-semibold flex flex-col leading-6">
        <div className="w-full h-[325px] group bg-black relative rounded-[20px] ">
          <div className="absolute inset-0">
            <Image
              src={movieImg}
              width={10000}
              height={10000}
              alt={movie.title}
              className="w-full h-[325px] object-contain rounded-[20px]"
            />
          </div>
          <a href="/">
            <Image
              src={Logo}
              alt="MovieBox"
              className="absolute top-0 left-0 md:hidden rounded-full hover:scale-110 ease-in-out duration-500"
            />
          </a>
          <div className="absolute top-[50%] text-center place-content-center items-center flex  flex-col left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <a
              href="/"
              className="text-[70px] text-red-700 group-hover:scale-150 ease-in-out duration-500"
            >
              <AiFillYoutube />
            </a>
            <p className="text-gray-300 font-light text-[15px]">
              Watch Trailer
            </p>
          </div>
        </div>
        <div className="w-full h-full">
          <div className="w-full pt-2 h-fit flex justify-between">
            <div className="flex justify-center items-center place-content-center">
              <p className="text-[12px] lg:text-[18px] font-normal flex gap-3">
                <span data-testid="movie-title">{movie.title}</span>
                <span data-testid="movie-release-date">
                  {movie.release_date}
                </span>
                <span>PG-13</span>{" "}
                <span data-testid="movie-runtime">{movie.adult}</span>
                <span className="text-red-700 text-[10px]">
                  {movie.genre_ids}
                </span>
              </p>
            </div>
            <div className="flex justify-center">
              <div className="flex justify-center items-center place-content-center m-auto">
                <LikedIt />
                <Starred />
              </div>
              <p className="flex text-[12px] m-auto lg:text-[18px] ml-2 text-[#666666] font-normal gap-4 text-center place-content-center">
                <span>{movie.vote_average}/10</span>
                <span>350k</span>
              </p>
            </div>
          </div>
          <div className="w-full h-full bg-white grid grid-cols-2 lg:grid-cols-3">
            <div className="h-fit w-full col-span-2 pt-3 lg:pb-4">
              <p
                className=" leading-[20x] text-[12px] lg:text-[18px] font-normal"
                data-testid="movie-overview"
              >
                {movie.overview}
              </p>
              <p className="mt-4 leading-[20x] text-[12px] lg:text-[18px] font-normal">
                Director: <span className="text-rose-600">Akinro Destined</span>
              </p>
              <p className="mt-4 leading-[20x] text-[12px] lg:text-[18px] font-normal">
                Writers:{" "}
                <span className="text-rose-600">
                  Akinro Destined, Modupe Epps Jr, Spider Craig
                </span>
              </p>
              <p className="mt-4 leading-[20x] text-[12px] lg:text-[18px] font-normal">
                Stars :{" "}
                <span className="text-rose-600">
                  Akinro Destined, Spider Cruise, Earl Connelly, Junior Teller
                </span>
              </p>
              <div className="mt-4 flex">
                <button className="btn border-none outline-none bg-rose-700 text-[13px] hover:scale-110 px-4 py-2 font-normal text-white rounded-l-[10px] ease-in-out duration-300">
                  Top rated movie #30
                </button>
                <button className="btn bg-white border border-[#C7C7C7] text-[13px] hover:scale-110 pl-4 pr-10 py-2 font-normal text-black rounded-r-[10px] ease-in-out duration-300">
                  Awards and nominations
                </button>
              </div>
            </div>

            <div className="h-fit w-full lg:pt-3 flex lg:col-span-1 col-span-3">
              <div className="m-auto p-0">
                <button className="btn border-none outline-none bg-rose-700 text-[13px] hover:scale-110 w-[250px] h-[45px] font-normal text-white flex items-center text-center justify-center place-content-center rounded-[10px] ease-in-out duration-300 gap-2">
                  <IoTicketOutline />
                  See Showtimes
                </button>
                <button className="btn border-1 border-rose-500 outline-none bg-[#f8e7eb] text-[13px] hover:scale-110 font-normal text-black w-[250px] h-[45px] flex items-center text-center justify-center place-content-center rounded-[10px] ease-in-out duration-300 mt-2 gap-2">
                  <AiOutlineUnorderedList />
                  More Watch Options
                </button>
                <div className="w-[250px] h-[180px] lg:mt-2 rounded-[20px] bg-green-700">
                  <Image
                    src={SmallImg}
                    width={1000}
                    height={1000}
                    alt="Spiderman"
                    className="h-full object-cover rounded-[20px] hover:scale-110 ease-in-out duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
