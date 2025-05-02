import React from "react";
import { BsArrowReturnRight } from "react-icons/bs";

function Button({ title = "Get Started" }) {
  return (
    <div className="w-full flex justify-center sm:justify-start">
      <button className="w-40 bg-white rounded-full px-4 py-2 sm:px-3 sm:py-1 flex justify-between items-center text-black text-sm sm:text-base hover:bg-zinc-200 transition-colors duration-200">
        <p className="font-medium">{title}</p>
        <BsArrowReturnRight className="text-lg sm:text-base" />
      </button>
    </div>
  );
}

export default Button;
