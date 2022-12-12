import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import SharedLayout from "./SharedLayout";
import { useEnoch } from "./context";
import { FaTruckLoading } from "react-icons/fa";
import About from "./components/About";
import Contact from "./Contact";
import { spinner } from "../images";

const App = () => {
  const { loading } = useEnoch();
  if (loading) {
    return (
      <div className="flex justify-center h-[100vh] items-center">
        <img src={spinner} className="h-[50px]" alt="spinn" />
      </div>
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
