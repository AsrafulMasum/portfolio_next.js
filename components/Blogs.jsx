"use client";
import React from "react";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: 200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

function Blogs() {
  return (
    <div className="overflow-hidden">
      <motion.h2
        variants={variants}
        initial="initial"
        whileInView="animate"
        className="h-screen flex justify-center items-center text-5xl md:text-6xl lg:text-8xl text-primary"
      >
        Coming Soon
        <span
          style={{
            animation: "bounce 1s infinite ease-in-out",
            animationDelay: "-0.4s",
          }}
        >
          .
        </span>
        <span
          style={{
            animation: "bounce 1s infinite ease-in-out",
            animationDelay: "-0.2s",
          }}
        >
          .
        </span>
        <span
          style={{
            animation: "bounce 1s infinite ease-in-out",
          }}
        >
          .
        </span>
      </motion.h2>
      <style jsx global>{`
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
      `}</style>
    </div>
  );
}

export default Blogs;
