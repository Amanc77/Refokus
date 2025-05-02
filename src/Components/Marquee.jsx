import React from "react";
import { motion } from "framer-motion";

const Marquee = ({ imagesUrl, direction }) => {
  const totalImages = imagesUrl.length;
  const imageWidth = 8;
  const gap = 5;
  const totalWidthPerSet = totalImages * (imageWidth + gap);

  return (
    <div className="w-full overflow-hidden">
      <div className="flex">
        <motion.div
          initial={{ x: direction === "left" ? 0 : -totalWidthPerSet + "vw" }}
          animate={{ x: direction === "left" ? -totalWidthPerSet + "vw" : 0 }}
          transition={{ ease: "linear", duration: 15, repeat: Infinity }}
          className="flex flex-shrink-0 gap-10 sm:gap-20 py-8"
          style={{ width: `${totalWidthPerSet}vw` }}
        >
          {imagesUrl.map((url, index) => (
            <motion.img
              key={`first-${index}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              src={url}
              className="w-[6vw] sm:w-[8vw] h-auto object-contain"
              alt={`marquee-${index}`}
            />
          ))}
        </motion.div>
        <motion.div
          initial={{ x: direction === "left" ? 0 : -totalWidthPerSet + "vw" }}
          animate={{ x: direction === "left" ? -totalWidthPerSet + "vw" : 0 }}
          transition={{ ease: "linear", duration: 15, repeat: Infinity }}
          className="flex flex-shrink-0 gap-10 sm:gap-20 py-8"
          style={{ width: `${totalWidthPerSet}vw` }}
        >
          {imagesUrl.map((url, index) => (
            <motion.img
              key={`second-${index}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              src={url}
              className="w-[6vw] sm:w-[8vw] h-auto object-contain"
              alt={`marquee-${index}`}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
