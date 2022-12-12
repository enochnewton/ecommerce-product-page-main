import React from "react";
import { del, product } from "../../../images";
import { useEnoch } from "../../context";

const CartItemSelected = ({ title, id, image, price, quantity }) => {
  const { clear } = useEnoch();
  const newTitle = title.substring(0, 15);

  return (
    <div className="p-4 border-b-[1px] border-Grayish-blue ">
      <div className="flex">
        <img src={image} className="h-[45px] rounded-md" alt="" />
        <div className="ml-3 text-[13px] w-full relative">
          <p className=" capitalize">{newTitle}</p>
          <div className="flex gap-2">
            <span>${price}</span>
            <span>x</span>
            <span>{quantity}</span>
            <span className="text-very-dark-blue font-bold">
              ${(price * quantity).toFixed(2)}
            </span>
            <img
              src={del}
              className="h-[12px] absolute right-0 cursor-pointer "
              alt="del"
              onClick={() => clear(id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemSelected;
