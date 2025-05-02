import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import WorkPage from "./Components/WorkPage";
import ServicesPage from "./Components/ServicesPage";
import ContactPage from "./Components/ContactPage";

function App() {
  return (
    <Router>
      <div className="bg-gray-950 min-h-screen text-white overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="*"
            element={
              <div className="p-5 text-center">404 - Page Not Found</div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
