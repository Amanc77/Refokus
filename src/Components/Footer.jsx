import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="w-full py-10">
      <div className="max-w-screen-xl mx-auto py-10 flex flex-col sm:flex-row gap-8 sm:gap-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="basis-full sm:basis-1/2 text-center sm:text-left"
        >
          <h1 className="text-[6rem] sm:text-[11.5rem] font-semibold leading-none tracking-tight">
            refokus.
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="basis-full sm:basis-1/2 flex flex-col sm:flex-row gap-4"
        >
          <div className="basis-full sm:basis-1/3 text-center sm:text-left">
            <h4 className="mb-8 text-zinc-300 capitalize text-sm sm:text-base">
              socials
            </h4>
            {["instagram", "twitter", "Linkedin", "Facebook"].map(
              (item, index) => (
                <a
                  href="#"
                  key={index}
                  className="mt-2 capitalize block text-zinc-600 hover:text-blue-400 hover:text-[1.05rem] sm:hover:text-[1.1rem] text-sm sm:text-base transition-all duration-200"
                >
                  {item}
                </a>
              )
            )}
          </div>
          <div className="basis-full sm:basis-1/3 text-center sm:text-left">
            <h4 className="mb-8 text-zinc-300 capitalize text-sm sm:text-base">
              socials
            </h4>
            {["Home", "Work", "Careers", "Contact"].map((item, index) => (
              <a
                href="#"
                key={index}
                className="mt-2 capitalize block text-zinc-400 hover:text-blue-500 text-sm sm:text-base transition-all duration-200"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="basis-full sm:basis-1/2 flex flex-col items-center sm:items-end">
            <p className="text-center sm:text-right text-sm sm:text-base">
              Refokus is a pioneering digital agency driven by design and
              empowered by technology.
            </p>
            <img
              src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63455da11b54556c9d28aa3e_Badge-EnterprisePartner-Blue%201.svg"
              alt="footer"
              className="w-24 sm:w-32 mt-5"
            />
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="max-w-screen-xl mx-auto flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-5"
      >
        {["Privacy Policy", "Cookie Policy", "Impressum", "Terms"].map(
          (item, index) => (
            <a
              href="#"
              key={index}
              className="text-zinc-600 font-normal text-xs sm:text-sm hover:text-blue-400 transition-colors duration-200"
            >
              {item}
            </a>
          )
        )}
      </motion.div>
    </div>
  );
};

export default Footer;
