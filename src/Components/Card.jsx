import React from "react";
import { motion } from "framer-motion";

function Card({ width, start, para, hover = "none" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`bg-gray-800 p-5 rounded-xl ${width} min-h-88 flex flex-col justify-between hover:${hover} transition-all duration-300`}
    >
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3 className="font-light text-lg sm:text-base">heading</h3>
        </div>
        <h1 className="text-2xl sm:text-3xl font-normal mt-5">text</h1>
      </div>
      <div className="w-full">
        {start === "true" && (
          <>
            <p className="text-sm sm:text-base text-zinc-400 mb-4">
              Ready to bring your vision to life? Let’s collaborate on your next
              big idea and create something extraordinary together.
            </p>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-none">
              Launch Your Dream Project
            </h1>
            <button className="rounded-full mt-5 border border-zinc-50 py-3 px-6 sm:py-2 sm:px-5 font-semibold text-sm sm:text-base hover:bg-zinc-50 hover:text-black transition-colors duration-200">
              Contact Us
            </button>
          </>
        )}
        {para === "true" && (
          <p className="text-xs sm:text-sm text-zinc-500 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
