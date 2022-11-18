import React from "react";
import Image from "next/image";
const Category = ({ title }) => {
  return (
    <div className="w-[300px] h-[350px] flex flex-col items-center justify-center bg-blue-600 rounded-lg m-2">
      <h1 className="text-white font-semibold">{title}</h1>
      <div className="flex items-center justify-center my-5">
        <a className=" bg-black px-3 py-2 rounded-sm text-white">Shop Now</a>
      </div>
    </div>
  );
};

export default Category;
