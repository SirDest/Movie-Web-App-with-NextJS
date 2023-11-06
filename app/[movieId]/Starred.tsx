"use client";
import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const Starred = () => {
  const [stared, setStar] = useState(false);
  const staredIt = () => {
    setStar(!stared);
  };
  return (
    <div
      onClick={staredIt}
      style={{
        color: stared ? "gold" : "gray",
        transition: "all 0.3s ease-in-out",
      }}
      className="text-[18px] m-auto"
    >
      <AiFillStar />
    </div>
  );
};

export default Starred;
