import React from "react";
import { homeImage } from "../data";
import Navbar from "./Navbar";
import { styles } from "../styles";

const Home = () => {
  return (
    <section className="h-[calc(100vh-100px)] mt-2 ss:w-[80%] mx-auto w-[98%]">
      <div className="flex flex-col ss:flex-row gap-[8%]">
        {/* left */}
        <div className="flex-1 ">
          <img
            src={homeImage}
            alt=""
            className="object-contain ss:h-[29rem] h-[23rem] m-auto"
          />
        </div>
        {/* right */}
        <div className="flex-1 flex  flex-col justify-center gap-8 ss:gap-10 px-10 my-10 ">
          <h1 className={`font-bold text-orange`}>SNEAKERS COMPANY</h1>
          <h1 className={`${styles.h1}`}>
            Fall limited edition <br /> sneakers
          </h1>
          <p className={`${styles.text}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            assumenda itaque ut animi, recusandae eos? Sunt, velit! Cum,
            exercitationem rerum consectetur reiciendis dicta, corporis numquam,
            expedita laborum quasi vitae magnam.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
