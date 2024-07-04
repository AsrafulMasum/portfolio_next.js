"use client";
import ContactForm from "@/components/ContactForm";
import React from "react";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const formVariants = {
  initial: {
    x: 200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

function page() {
  return (
    <main className="overflow-hidden bg-white">
      <div className="mt-20 xl:mt-10 max-w-screen-xl mx-4 md:mx-10 xl:mx-auto lg:h-screen flex flex-col lg:flex-row lg:items-center">
        <motion.div
          variants={textVariants}
          initial="initial"
          whileInView="animate"
          className="flex flex-col gap-12 text-dark_black text-xl font-medium flex-1"
        >
          <motion.h2
            variants={textVariants}
            className="text-6xl md:text-7xl lg:text-8xl font-semibold text-text_color"
          >
            Let’s <span className="text-primary">work</span> <br /> together
          </motion.h2>
          <motion.p variants={textVariants}>
            Email <br /> h.m.asrafulmasum@gmail.com
          </motion.p>
          <motion.p variants={textVariants}>
            Address <br /> Dhaka, Bangladesh
          </motion.p>
          <motion.p variants={textVariants}>
            Phone <br /> +880 1687 177 481
          </motion.p>
        </motion.div>

        <motion.div
          variants={formVariants}
          initial="initial"
          whileInView="animate"
          className="flex-1"
        >
          <ContactForm />
        </motion.div>
      </div>
    </main>
  );
}

export default page;
