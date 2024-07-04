'use client'
import Image from "next/image";
import React from "react";
import coding from "./../public/bg.jpg";
import stroke from "./../public/dev_stroke.png";
import Button from "./Button";
import Link from "next/link";
import { motion } from "framer-motion";

const textVariants = {
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

const serviceVariants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const strokeVariants = {
  initial: {
    x: 100,
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

function DevInfo() {
  return (
    <div className="flex flex-col lg:flex-row bg-white">
      <div className="lg:w-1/2 xl:w-2/5 relative overflow-hidden">
        <Image className="h-full object-cover lg:object-fill " src={coding} alt="" />
        <motion.div
          variants={serviceVariants}
          initial="initial"
          whileInView="animate"
          className="absolute right-0 bottom-0 bg-primary text-white py-16 px-8 text-center uppercase font-semibold">
          <span className="text-7xl">2</span> <br /> years experience
        </motion.div>
      </div>
      <div className="lg:w-1/2 xl:w-3/5 relative overflow-hidden">
        <motion.div
          variants={textVariants}
          initial="initial"
          whileInView="animate"
          className="w-2/3 mt-16 md:mt-20 xl:mt-28 ml-8 md:ml-20 xl:ml-28 text-dark_black">
          <h4 className="text-3xl md:text-6xl font-semibold mb-12 text-text_color">
            Elevate{" "}
            <span className="text-primary italic">
              Your <br /> Online
            </span>{" "}
            Presence
          </h4>
          <p>
            Elevate your brand with my top-notch web development services. From
            design to deployment, I create visually stunning, high-performing
            websites tailored to your needs. I ensure your site is fast, secure,
            and optimized for user experience.
          </p>
          <p className="mb-12 mt-2">
            Make a lasting impression with advanced SEO techniques and analytics
            to reach a wider audience. Partner with me to achieve your business
            goals and stand out in the digital landscape.
          </p>
          <Link href="/contact" className="inline-block">
            <Button
              text="Contact Me"
              styles="bg-transparent text-dark_black border border-primary"
              spanStyle="bg-primary text-white"
            />
          </Link>
        </motion.div>
        <motion.div
          variants={serviceVariants}
          initial="initial"
          whileInView="animate"
          className="mt-28 flex items-center">
          <div className="border text-center font-semibold text-dark_black capitalize flex-1 py-12">
            <span className="text-4xl text-primary">5+</span> <br /> website
            Development
          </div>
          <div className="border-y text-center font-semibold text-dark_black capitalize flex-1 py-12">
            <span className="text-4xl text-primary">10+</span> <br /> frontend
            Development
          </div>
          <div className="border text-center font-semibold text-dark_black capitalize flex-1 py-12">
            <span className="text-4xl text-primary">5+</span> <br /> Api <br className="md:hidden" />
            Development
          </div>
        </motion.div>
        <motion.div
          variants={strokeVariants}
          initial="initial"
          whileInView="animate"
        >
          <Image
            className="w-40 absolute right-0 bottom-16"
            src={stroke}
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
}

export default DevInfo;
