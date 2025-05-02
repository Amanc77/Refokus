import React from "react";
import { motion } from "framer-motion";

const WorkSection = () => {
  const projects = [
    {
      title: "Project Alpha",
      description: "A modern e-commerce platform with seamless UI/UX.",
      image:
        "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
    },
    {
      title: "Project Beta",
      description: "A creative portfolio website for a design agency.",
      image:
        "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
    },
    {
      title: "Project Gamma",
      description: "An interactive dashboard for data visualization.",
      image:
        "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
    },
  ];

  return (
    <div className="w-full py-16 sm:py-24 bg-gray-950 text-white overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl font-semibold text-center mb-12"
        >
          Our Recent Work
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-zinc-400">{project.description}</p>
                <a
                  href="#"
                  className="mt-4 inline-block text-blue-400 hover:text-blue-500 text-sm font-medium transition-colors duration-200"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block px-6 py-3 bg-blue-500 text-white rounded-full font-semibold text-sm sm:text-base hover:bg-blue-600 transition-colors duration-200"
          >
            View All Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
