import React from "react";
import { NavLink } from "react-router-dom";
import { avatar, cart, logo, menu, close } from "../../images";
import { links } from "../data";
import { useEnoch } from "../context";
import Cart from "./cart/Cart";

const Navbar = () => {
  const {
    isMenuOpen,
    openMenu,
    closeMenu,
    showCartItems,
    isCartOpen,
    selectedCart,
  } = useEnoch();
  if (isMenuOpen) {
    document.addEventListener("scroll", function () {
      closeMenu();
    });
  }
  return (
    <nav
      className={`h-[80px] w-full sm:w-[85%] relative mx-auto flex items-center text-Grayish-blue border-Grayish-blue border-b-[1px]`}
    >
      <div
        className={`flex-[0.8] flex-row-reverse ss:flex-row flex justify-around`}
      >
        <div className="">
          <img src={logo} alt="logo" />
        </div>
        <div className="ss:hidden cursor-pointer" onClick={openMenu}>
          <img src={isMenuOpen ? close : menu} alt="menu" />
        </div>
      </div>

      <div className={`ss:flex gap-9 hidden items-center flex-[2]`}>
        {links.map((link) => (
          <NavLink
            to={`${link.id}`}
            key={link.id}
            style={{ position: "relative" }}
            className={({ isActive }) => (isActive ? "ss:active" : "ss:link")}
          >
            {link.title}
          </NavLink>
        ))}
      </div>
      {isMenuOpen && (
        <div
          className={`flex flex-col sidebar bg-blue-gradient absolute top-[80px] z-10 h-[40vh] w-[40vw] items-center justify-around rounded-3xl left-4`}
        >
          {links.map((link) => (
            <NavLink
              to={`${link.id}`}
              onClick={openMenu}
              key={link.id}
              className="text-white"
            >
              {link.title}
            </NavLink>
          ))}
        </div>
      )}
      <div className={`flex-[0.5] flex gap-[30px] justify-center items-center`}>
        <div className="relative ">
          <img
            src={cart}
            alt="cart"
            className="cursor-pointer p-2"
            onClick={showCartItems}
          />
          <span className="bottom-5 left-5 absolute text-white bg-orange rounded-2xl px-2 text-[11px]">
            {selectedCart.length}
          </span>
        </div>
        <div className=" ">
          <img src={avatar} className="h-[40px] object-cover" alt="avatar" />
        </div>
      </div>
      {isCartOpen && <Cart />}
    </nav>
  );
};

export default Navbar;
