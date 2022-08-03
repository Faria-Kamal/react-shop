import React from "react";

import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import Category from "../components/Category";
import AllProducts from "../components/AllProducts";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Category />
      <Categories />
      <AllProducts />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Homepage;
