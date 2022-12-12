import {
  avatar,
  close,
  cart,
  del,
  menu,
  minus,
  next,
  plus,
  previous,
} from "../images";
export const links = [
  {
    id: "",
    title: "Home",
  },
  {
    id: "products",
    title: "Products",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const api = "https://fakestoreapi.com/products";
const categories = [
  {
    id: "all",
    path: "all",
    title: "All",
  },
  {
    id: "electronics",
    path: "electronics",
    title: "Electronics",
  },
  {
    id: "jewelery",
    path: "jewelery",
    title: "Jewelery",
  },
  {
    id: "men's clothing",
    path: "mens",
    title: "Men",
  },
  {
    id: "women's clothing",
    path: "womens",
    title: "Women",
  },
];

const homeImage =
  "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60";

export {
  avatar,
  api,
  close,
  cart,
  del,
  menu,
  minus,
  next,
  plus,
  previous,
  homeImage,
  categories,
};
