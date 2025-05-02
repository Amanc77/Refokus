import React from "react";
import Button from "../Components/Button";
import { motion } from "framer-motion";

const Product = ({ val, mover, count }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full h-auto py-10 sm:py-20 text-white"
    >
      <div
        onMouseEnter={() => mover(count)}
        className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0"
      >
        <h1 className="text-4xl sm:text-5xl font-semibold text-center sm:text-left">
          {val.title}
        </h1>
        <div className="dets w-full sm:w-1/3 text-center sm:text-left">
          <p className="mb-6 sm:mb-10 text-sm sm:text-base">
            {val.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 sm:gap-5">
            {val.live && <Button />}
            {val.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Product;
