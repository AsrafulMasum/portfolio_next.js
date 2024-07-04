'use client'
import React from "react";
import Button from "./Button";
import Image from "next/image";
import profile from "./../public/profile.png";
import Link from "next/link";
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

const imgVariants = {
  initial: {
    y: -200,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

function Hero() {
  return (
    <div className="lg:h-screen bg-primary py-20 text-white">
      <div className="h-full max-w-screen-xl mx-4 md:mx-10 xl:mx-auto flex flex-col-reverse lg:flex-row justify-between items-center gap-16 lg:gap-0">
        <motion.div
          variants={textVariants}
          initial="initial"
          whileInView="animate"
          className="h-full lg:w-1/2 flex flex-col justify-center gap-10"
        >
          <motion.h4 variants={textVariants} className="text-3xl lg:text-5xl font-medium tracking-wide">
            MOHAMMAD ASRAFUL ISLAM MASUM
          </motion.h4>
          <motion.h2 variants={textVariants} className="text-5xl lg:text-7xl font-semibold mb-4 tracking-wider">
            WEB DEVELOPER
          </motion.h2>
          <motion.p variants={textVariants}>
            I&#39;m a skilled <span className="text-dark_black font-bold text-lg">MERN</span> stack web developer with expertise in
            building dynamic and responsive web applications using <span className="text-dark_black font-bold text-lg">MongoDB,
              Express.js, React, and Node.js.</span> I excel in creating seamless user
            experiences and efficient back-end solutions.
          </motion.p>
          <motion.div variants={textVariants} className="flex flex-col lg:flex-row justify-start lg:items-center gap-4">
            <a href="/resume.pdf" download="Resume">
              <Button
                text="Download Resume"
                styles="bg-btn_color text-white"
                spanStyle="bg-primary text-white"
              />
            </a>

            <Link href="/contact">
              <Button
                text="Contact Me"
                styles="bg-transparent text-white border"
                spanStyle="bg-white text-primary"
              />
            </Link>
          </motion.div>
        </motion.div>
        {/* <div className='w-1/2 hidden xl:block'>
          <ShowReel />
        </div> */}
        <motion.div variants={imgVariants}
          initial="initial"
          whileInView="animate" className="h-full lg:w-1/3 lg:mt-60 ">
          <Image
            className="lg:h-4/6 object-cover rounded-full border-2"
            src={profile}
            alt="Profile Image"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
