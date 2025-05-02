import React from "react";
import Nav from "./Nav";
import WorkSection from "./WorkSection";
import Footer from "./Footer";

const WorkPage = () => {
  return (
    <div className="w-full min-h-screen bg-gray-950 text-white overflow-x-hidden">
      <Nav />
      <WorkSection />
      <Footer />
    </div>
  );
};

export default WorkPage;
