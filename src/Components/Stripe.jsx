import React from "react";
import { motion } from "framer-motion";

function Stripe({ val }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full sm:w-[16.66%] px-5 py-4 flex justify-between items-center border-t-[1.4px] border-b-[1.4px] sm:border-r-[1.4px] border-zinc-600"
    >
      <img className="h-5 sm:h-7" src={val.url} alt="stripe" />
      <span className="font-semibold text-sm sm:text-base">{val.number}</span>
    </motion.div>
  );
}

export default Stripe;
