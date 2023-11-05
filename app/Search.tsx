import React from "react";
import { FaSistrix } from "react-icons/fa";

const Search = () => {
  return (
    <form className="bg-none flex justify-between w-[300px] lg:w-[525px]  h-[36px] text-black border-[#D1D5DB] text-sm mt-[22px] border-[2px]">
      <input
        className="text-lg px-3 py-1 rounded-none outline-none w-[500px] "
        type="search"
        placeholder="What do you want to watch?"
      />
      <button
        className="mx-3 m-auto text-white text-lg hover:scale-150 ease-in-out duration-100"
        type="submit"
      >
        <FaSistrix />
      </button>
    </form>
  );
};

export default Search;
