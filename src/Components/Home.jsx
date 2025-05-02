import React from "react";
import Nav from "./Nav";
import Work from "./Work";
import Stripes from "./Stripes";
import Products from "./Products";
import Marquees from "./Marquees";
import Cards from "./Cards";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Nav />
      <Work />
      <Stripes />
      <Products />
      <Marquees />
      <Cards />
      <Footer />
    </div>
  );
}

export default Home;
