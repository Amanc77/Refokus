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
        {/* First set of images */}
        <motion.div
          initial={{ x: direction === "left" ? 0 : -totalWidthPerSet + "vw" }}
          animate={{ x: direction === "left" ? -totalWidthPerSet + "vw" : 0 }}
          transition={{ ease: "linear", duration: 15, repeat: Infinity }}
          className="flex flex-shrink-0 gap-20 py-8"
          style={{ width: `${totalWidthPerSet}vw` }}
        >
          {imagesUrl.map((url, index) => (
            <img
              key={`first-${index}`}
              src={url}
              className="w-[8vw] h-auto object-contain"
              alt={`marquee-${index}`}
            />
          ))}
        </motion.div>

        {/* Second set of images for seamless looping */}
        <motion.div
          initial={{ x: direction === "left" ? 0 : -totalWidthPerSet + "vw" }}
          animate={{ x: direction === "left" ? -totalWidthPerSet + "vw" : 0 }}
          transition={{ ease: "linear", duration: 15, repeat: Infinity }}
          className="flex flex-shrink-0 gap-20 py-8"
          style={{ width: `${totalWidthPerSet}vw` }}
        >
          {imagesUrl.map((url, index) => (
            <img
              key={`second-${index}`}
              src={url}
              className="w-[8vw] h-auto object-contain"
              alt={`marquee-${index}`}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
