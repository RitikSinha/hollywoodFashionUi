import React from "react";
import Image from "next/image";
import NextLink from "next/link";
import { urlForThumbnail } from "../utills/image";
const Card = ({
  name,
  brand,
  category,
  description,
  numReviews,
  price,
  rating,
  slug,
  image,
}) => {
  return (
    <NextLink href={`product/${slug?.current}`} passHref>
      <div className="w-[300px] m-5">
        <Image
          src={image ? urlForThumbnail(image) : ""}
          alt="hoody"
          width="300"
          height="400"
          className="rounded-sm"
        />
        <h6 className=" text-xs">{name}</h6>
        <div className="flex justify-between">
          <h1 className=" font-semibold text-lg">{category}</h1>
          <div>
            <div className="font-bold text-lg">Rs. {price}</div>
            <div className=" text-xs">MRP .inc of taxes</div>
          </div>
        </div>
        <div className=" flex items-center justify-center w-5 h-5 bg-slate-300">
          s
        </div>
        <NextLink href={`product/${slug?.current}`} passHref>
          <div className="flex justify-between px-3 py-2 bg-black text-white my-3 rounded-sm">
            <div className="font-semibold text-lg">view product</div>
            <div>+</div>
          </div>
        </NextLink>
      </div>
    </NextLink>
  );
};

export default Card;
