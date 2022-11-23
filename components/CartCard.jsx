import React from "react";

const CartCard = () => {
  return (
    <div className="flex w-[440px] border-2 p-2 justify-between my-2">
      <div>
        <img
          src="https://cdn.shopify.com/s/files/1/0661/7423/products/earths-energy-2_240x240.jpg?v=1667474421"
          alt="cap"
        />
      </div>
      <div className="w-full flex flex-col justify-between px-2">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">items</h1>
          <p>Delete</p>
        </div>
        <div className="flex  items-center">
          <button className="btn btn-primary btn-sm">+</button>
          <p className="mx-2">1</p>
          <button className="btn btn-primary btn-sm">-</button>
        </div>
        <p>Rs. 1300</p>
      </div>
    </div>
  );
};

export default CartCard;
