import React from "react";
import { FaBookOpen } from "react-icons/fa";
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
      staggerChildren: 0.1,
    },
  },
};

function Education() {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView="animate"
      className="space-y-4 min-w-full"
    >
      <motion.div variants={variants} className="flex justify-between items-center gap-10 lg:gap-0 bg-card_bg border border-[#D6D6D6] px-8 py-4 rounded-lg text-dark_black">
        <div>
          <h2 className="font-bold">B.Sc in Computer Science & Engineering</h2>
          <h4 className="font-extralight">Daffodil International University</h4>
          <div className="flex gap-5">
            <p className="font-extralight">Year : 2017 - 2021</p>
            <p>| |</p>
            <p className="font-extralight">CGPA : 3.00</p>
          </div>
          <p>Location : Dhanmondi, Dhaka, Bangladesh</p>
        </div>
        <FaBookOpen className="text-9xl lg:text-7xl xl:text-9xl text-primary hidden md:block" />
      </motion.div>

      <motion.div variants={variants} className="flex justify-between items-center gap-10 lg:gap-0 bg-card_bg border border-[#D6D6D6] px-8 py-4 rounded-lg text-dark_black">
        <div>
          <h2 className="font-bold">Higher Secondary</h2>
          <h4 className="font-extralight">Shaheed Police Smrity College</h4>
          <div className="flex gap-5">
            <p className="font-extralight">Year : 2014 - 2016</p>
            <p>| |</p>
            <p className="font-extralight">GPA : 4.75</p>
          </div>
          <p>Location : Mirpur-14, Dhaka, Bangladesh</p>
        </div>
        <FaBookOpen className="text-9xl lg:text-7xl xl:text-9xl text-primary hidden md:block" />
      </motion.div>

      <motion.div variants={variants} className="flex justify-between items-center gap-10 lg:gap-0 bg-card_bg border border-[#D6D6D6] px-8 py-4 rounded-lg text-dark_black">
        <div>
          <h2 className="font-bold">Secondary</h2>
          <h4 className="font-extralight">Vashantek High School</h4>
          <div className="flex gap-5">
            <p className="font-extralight">Year : 2004 - 2014</p>
            <p>| |</p>
            <p className="font-extralight">GPA : 4.88</p>
          </div>
          <p>Location : Dhaka-Cant., Dhaka, Bangladesh</p>
        </div>
        <FaBookOpen className="text-9xl lg:text-7xl xl:text-9xl text-primary hidden md:block" />
      </motion.div>
    </motion.div>
  );
}

export default Education;
