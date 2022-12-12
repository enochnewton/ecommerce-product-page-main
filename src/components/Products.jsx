import React, { useEffect } from "react";
import Links from "./Links";
import { styles, layout } from "../styles";
import CartItem from "./cart/CartItem";
import { useEnoch } from "../context";

const Products = () => {
  const { cart, checkout, setCheckout } = useEnoch();
  useEffect(() => {
    setTimeout(() => {
      setCheckout(false);
    }, 3000);
    return () => {
      clearTimeout(() => setCheckout(false));
    };
  });
  if (checkout) {
    document.body.style.overflow = "hidden";
  }
  if (!checkout) {
    document.body.style.overflow = "auto";
  }

  const Purchase = () => {
    return (
      <div className="h-[30vh] w-[50vh] absolute left-0 z-10 top-[20vh] right-0 mx-auto bg-white rounded-2xl shadow-2xl text-center text-very-dark-blue py-auto">
        <p className="my-auto font-bold pt-[60px]">
          Items successfully purchased
        </p>
      </div>
    );
  };

  return (
    <section className={`${styles.marginY}  relative ${layout.section} `}>
      {checkout && <Purchase />}
      <div className={`${checkout && "blur-lg"}`}>
        <div className={`${styles.flexCenter}  flex-col`}>
          <h1 className={`${styles.price} text-orange`}>Categories</h1>
          <Links />
        </div>
        {/* items */}
        <div className={`flex flex-wrap gap-10 justify-around mt-4`}>
          {cart.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
