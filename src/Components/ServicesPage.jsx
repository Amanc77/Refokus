import React from "react";
import Nav from "./Nav";
import ServicesSection from "./ServicesSection";
import Footer from "./Footer";

const ServicesPage = () => {
  return (
    <div className="w-full min-h-screen bg-gray-950 text-white overflow-x-hidden">
      <Nav />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default ServicesPage;
