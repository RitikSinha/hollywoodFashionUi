import React from "react";
import Image from "next/image";
const Card = () => {
  return (
    <div className="w-[200px] m-5">
      <Image src="/hoody.webp" alt="hoody" width="200" height="400" />
      <h6 className=" text-xs">Hoody</h6>
      <div className="flex justify-between">
        <h1 className=" font-semibold text-lg">Rage</h1>
        <div>
          <div className="font-bold text-lg">Rs. 2000</div>
          <div className=" text-xs">MRP .inc of taxes</div>
        </div>
      </div>
      <div className=" flex items-center justify-center w-5 h-5 bg-slate-300">
        s
      </div>
      <div className="flex justify-between px-3 py-2 bg-black text-white my-3">
        <div className="font-semibold text-lg">view product</div>
        <div>+</div>
      </div>
    </div>
  );
};

export default Card;
