import React from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <div className="w-full py-16 sm:py-24 bg-gray-950 text-white overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl font-semibold text-center mb-12"
        >
          Get in Touch
        </motion.h2>
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="basis-full sm:basis-1/2"
          >
            <h3 className="text-xl font-semibold mb-4">Contact Details</h3>
            <p className="text-sm text-zinc-400 mb-4">
              We’d love to hear from you! Reach out to us with any questions or
              project inquiries.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-zinc-400">
                <span className="font-medium text-white">Email:</span>{" "}
                hello@refokus.com
              </p>
              <p className="text-sm text-zinc-400">
                <span className="font-medium text-white">Phone:</span> +1 (555)
                123-4567
              </p>
              <p className="text-sm text-zinc-400">
                <span className="font-medium text-white">Address:</span> 123
                Design Street, Creativity City, 90210
              </p>
            </div>
          </motion.div>

          {/* Mock Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="basis-full sm:basis-1/2"
          >
            <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-gray-800 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-gray-800 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled
              />
              <textarea
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-gray-800 rounded-lg text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
                disabled
              ></textarea>
              <button
                className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg font-semibold text-sm sm:text-base hover:bg-blue-600 transition-colors duration-200"
                disabled
              >
                Send Message
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
