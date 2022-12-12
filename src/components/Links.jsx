import React from "react";
import { categories } from "../data";
import { styles } from "../styles";
import { useEnoch } from "../context";

const Links = () => {
  const { itemCategories } = useEnoch();

  return (
    <article className="flex ss:gap-20 flex-wrap justify-center gap-1 mt-5">
      {categories.map((category) => (
        <h1
          key={category.id}
          className="rounded-2xl py-1 px-2 bg- font-light cursor-pointer text-[#000] border-b-2 border-[#585123]"
          onClick={() => itemCategories(category.id)}
        >
          {category.title}
        </h1>
      ))}
    </article>
  );
};

export default Links;
