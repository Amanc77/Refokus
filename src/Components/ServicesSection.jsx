import React from "react";
import { motion } from "framer-motion";
import { FaPaintBrush, FaCode, FaBullhorn } from "react-icons/fa";

const ServicesSection = () => {
  const services = [
    {
      icon: <FaPaintBrush className="text-4xl text-blue-400" />,
      title: "Web Design",
      description:
        "Crafting visually stunning and user-friendly designs tailored to your brand.",
    },
    {
      icon: <FaCode className="text-4xl text-blue-400" />,
      title: "Development",
      description:
        "Building robust and scalable web applications with the latest technologies.",
    },
    {
      icon: <FaBullhorn className="text-4xl text-blue-400" />,
      title: "Branding",
      description:
        "Creating a strong brand identity that resonates with your audience.",
    },
  ];

  return (
    <div className="w-full py-16 sm:py-24 bg-gray-900 text-white overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl font-semibold text-center mb-12"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              className="bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-zinc-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
