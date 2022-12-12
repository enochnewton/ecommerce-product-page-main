import React from "react";
import CartItemSelected from "./CartItemSelected";
import { styles } from "../../styles";
import { useEnoch } from "../../context";

const Cart = () => {
  const { selectedCart, buy, isCartOpen, setIsCartOpen } = useEnoch();
  const noItems = selectedCart.length;
  if (isCartOpen) {
    document.addEventListener("scroll", function () {
      setIsCartOpen(false);
    });
  }

  return (
    <article
      className={`${styles.cartContainer} max-h-[357px] z-40 overflow-auto flex flex-col sidebar`}
    >
      <h1 className={`${styles.cart}`}>Cart</h1>
      {noItems === 0 && (
        <div className="h-[150px] flex justify-center items-center">
          <p className="font-bold text-very-dark-blue">Your cart is empty</p>
        </div>
      )}
      {noItems !== 0 && (
        <>
          {selectedCart.map((item) => (
            <CartItemSelected key={item.id} {...item} />
          ))}
          <button
            onClick={buy}
            className="w-[90%] mt-3 mx-auto mb-3 p-3 rounded-2xl bg-orange font-bold text-white"
          >
            Checkout
          </button>
        </>
      )}
    </article>
  );
};

export default Cart;
