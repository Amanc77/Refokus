import React from "react";
import Nav from "./Nav";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

const ContactPage = () => {
  return (
    <div className="w-full min-h-screen bg-gray-950 text-white overflow-x-hidden">
      <Nav />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default ContactPage;
