import React, { useRef } from "react";
import { cart, minus, plus, product } from "../../../images";
import { styles } from "../../styles";
import { FaShoppingCart } from "react-icons/fa";
import { useEnoch } from "../../context";

const CartItem = ({ title, id, image, price, rating, category, quantity }) => {
  const { selectedItems, toggleAmount } = useEnoch();
  // console.log(Array.from(new Set([1, 2, 3, 4, 1])));

  return (
    <article
      className={` bg-pale-orange shadow-2xl rounded-2xl ss:w-[30%] w-full`}
    >
      <div className="flex justify-center overflow-hidden">
        <img
          src={image}
          alt="product"
          className="h-[15rem] rounded-xl self-center"
        />
      </div>
      <div className="w-[95%] px-5 mx-auto">
        <h1 className="text-[15px] mt-2 font-bold ">{title}</h1>
        <div className="flex gap-4">
          <p className={`${styles.price}`}>${price}</p>
          <span className="text-[14px] bg-pale-orange text-red-400 font-sans rounded-md h-max p-[2px]">
            {rating.rate}
          </span>
        </div>
        {/* adding,removing into cart */}
        <div className="flex flex-col">
          <div className="flex flex-1 bg-light-grayish-blue rounded-2xl justify-around py-2 my-2">
            <img
              src={minus}
              alt=""
              className="self-center cursor-pointer p-2"
              onClick={() => toggleAmount(id, "dec")}
            />
            <span>{quantity}</span>
            <img
              src={plus}
              alt=""
              className="self-center cursor-pointer p-2"
              onClick={() => toggleAmount(id, "inc")}
            />
          </div>
          <button
            className="flex-1 flex bg-orange text-white mb-4 py-2 rounded-2xl items-center shadow-lg justify-center gap-3"
            onClick={() => selectedItems(id)}
          >
            <FaShoppingCart />
            add to cart
          </button>
        </div>
      </div>
    </article>
  );
};

export default CartItem;
