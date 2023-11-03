"use client";
import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";

const Liked = () => {
  const [liked, setLiked] = useState(false);
  const likedImage = () => {
    setLiked(!liked);
  };

  return (
    <div
      onClick={likedImage}
      style={{
        color: liked ? "red" : "white",
        backgroundColor: liked ? "rgba(0,0,0,0)" : "grey",
        transition: "all 0.3s ease-in-out",
      }}
      className="absolute z-10 top-2 right-4 p-2 group rounded-full hover:scale-110"
    >
      <AiFillHeart className="text-lg border-none outline-none" />
    </div>
  );
};

export default Liked;
