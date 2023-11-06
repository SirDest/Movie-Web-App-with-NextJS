"use client";
import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";

const LikedIt = () => {
  const [liked, setLiked] = useState(false);
  const likedIt = () => {
    setLiked(!liked);
  };

  return (
    <div
      onClick={likedIt}
      style={{
        color: liked ? "red" : "gray",
        transition: "all 0.3s ease-in-out",
      }}
      className="p-2 text-[18px] group rounded-full"
    >
      <AiFillHeart className="text-lg border-none outline-none" />
    </div>
  );
};

export default LikedIt;
