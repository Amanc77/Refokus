import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { FaBars, FaTimes } from "react-icons/fa";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="max-w-screen-xl mx-auto bg-gray-900 p-5 rounded-md border-b-[1px] border-zinc-600">
      <div className="flex items-center justify-between">
        <h3 className="text-xl sm:text-2xl text-white font-medium">
          <Link to="/" onClick={closeMenu}>
            Refokus
          </Link>
        </h3>
        <div className="sm:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes className="text-2xl text-white" />
            ) : (
              <FaBars className="text-2xl text-white" />
            )}
          </button>
        </div>
        <div className="hidden sm:flex items-center gap-14">
          {["Home", "Work", "Services", "Contact"].map((elem, index) => (
            <Link
              key={index}
              to={elem === "Home" ? "/" : `/${elem.toLowerCase()}`}
              className="text-sm text-white hover:text-blue-400 transition-colors duration-200"
            >
              {elem}
            </Link>
          ))}
          <Button />
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden flex flex-col items-center gap-4 mt-4 transition-all duration-300">
          {["Home", "Work", "Services", "Contact"].map((elem, index) => (
            <Link
              key={index}
              to={elem === "Home" ? "/" : `/${elem.toLowerCase()}`}
              className="text-sm text-white hover:text-blue-400 transition-colors duration-200"
              onClick={closeMenu}
            >
              {elem}
            </Link>
          ))}
          <Button />
        </div>
      )}
    </div>
  );
}

export default Nav;
