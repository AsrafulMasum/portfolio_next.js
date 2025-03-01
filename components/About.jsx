"use client";
import Image from "next/image";
import React from "react";
import js from "./../public/js.png";
import react from "./../public/react.png";
import mongoDB from "./../public/mongodb.png";
import express from "./../public/express.png";
import node from "./../public/node.png";
import next from "./../public/next.png";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiMongoose,
  SiAxios,
  SiJsonwebtokens,
  SiFramer,
} from "react-icons/si";
import { GrStripe } from "react-icons/gr";
import Education from "./Education";
import Lottie from "lottie-react";
import eduGIF from "./../public/eduAnimation.json";
import Courses from "./Courses";
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

const skillsVariants = {
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

const eduVariants = {
  initial: {
    y: 200,
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

function About() {
  const skillsSet = [
    {
      skill: "HTML",
      icon: <FaHtml5 className="text-5xl text-primary" />,
    },
    {
      skill: "CSS",
      icon: <FaCss3Alt className="text-5xl text-primary" />,
    },
    {
      skill: "JavaScript",
      icon: <IoLogoJavascript className="text-5xl text-primary" />,
    },
    {
      skill: "React",
      icon: <FaReact className="text-5xl text-primary" />,
    },
    {
      skill: "Firebase",
      icon: <IoLogoFirebase className="text-5xl text-primary" />,
    },
    {
      skill: "Node.js",
      icon: <FaNodeJs className="text-5xl text-primary" />,
    },
    {
      skill: "Express.js",
      icon: <SiExpress className="text-5xl text-primary" />,
    },
    {
      skill: "MongoDB",
      icon: <SiMongodb className="text-5xl text-primary" />,
    },
    {
      skill: "Next.js",
      icon: <SiNextdotjs className="text-5xl text-primary" />,
    },
    {
      skill: "Mongoose",
      icon: <SiMongoose className="text-5xl text-primary" />,
    },
    {
      skill: "Axios",
      icon: <SiAxios className="text-5xl text-primary" />,
    },
    {
      skill: "JWT",
      icon: <SiJsonwebtokens className="text-5xl text-primary" />,
    },
    {
      skill: "Stripe.js",
      icon: <GrStripe className="text-5xl text-primary" />,
    },
    {
      skill: "Framer Motion",
      icon: <SiFramer className="text-5xl text-primary" />,
    },
  ];

  return (
    <>
      <section className="max-w-screen-xl mx-4 md:mx-10 xl:mx-auto md:mt-5 lg:mt-0">
        <div className="h-screen flex justify-between items-center lg:mt-10 xl:mt-0">
          <motion.div
            variants={textVariants}
            initial="initial"
            whileInView="animate"
            className="h-full lg:w-1/2 flex flex-col justify-center"
          >
            <motion.h2
              variants={textVariants}
              className="text-primary text-6xl mb-8"
            >
              About Me
            </motion.h2>
            <motion.h3
              variants={textVariants}
              className="text-primary text-3xl font-semibold mb-4"
            >
              Hello!
            </motion.h3>
            <motion.h4
              variants={textVariants}
              className="text-2xl mb-4 text-dark_black font-medium"
            >
              I&#39;m Mohammad Asraful Islam Masum, a passionate, dedicated,
              hard-working{" "}
              <span className="text-primary text-3xl font-semibold">MERN</span>{" "}
              stack developer.
            </motion.h4>
            <motion.p
              variants={textVariants}
              className="text-xl text-dark_black/60 font-medium z-10"
            >
              A passionate web developer experienced in crafting dynamic
              applications using the MERN stack (MongoDB, Express.js, React,
              Node.js). With a keen eye for detail, I specialize in creating
              user-friendly interfaces. My commitment to delivering high-quality
              code is complemented by a constant pursuit of the latest industry
              trends. Excited to contribute my skills and innovation to your
              projects.
            </motion.p>
          </motion.div>
          <motion.div
            variants={imgVariants}
            initial="initial"
            whileInView="animate"
            className="relative hidden lg:block lg:w-1/2 h-full lg:-mt-40 xl:mt-0 2xl:mt-96"
          >
            <Image
              className="absolute top-44 right-0 w-20 animate-pulse hidden lg:block"
              src={mongoDB}
              alt=""
            />
            <Image
              className="absolute top-80 right-36 w-20 animate-bounce"
              src={js}
              alt=""
            />
            <Image
              className="absolute top-64 right-96 w-20 animate-spin"
              src={react}
              alt=""
            />
            <Image
              className="absolute top-[450px] right-72 w-12 animate-ping"
              src={express}
              alt=""
            />
            <Image
              className="absolute top-[550px] right-16 w-20 animate-pulse"
              src={node}
              alt=""
            />
            <Image
              className="absolute top-[500px] right-[400px] xl:right-[450px] w-20 animate-pulse"
              src={next}
              alt=""
            />
          </motion.div>
        </div>
      </section>

      <section className="max-w-screen-xl mx-4 md:mx-10 xl:mx-auto mt-10 mb-20">
        <motion.h2
          variants={textVariants}
          initial="initial"
          whileInView="animate"
          className="text-primary text-6xl mb-8"
        >
          Skills
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-between items-center md:gap-20 lg:gap-40">
          <motion.div
            variants={skillsVariants}
            initial="initial"
            whileInView="animate"
            className="w-full grid grid-cols-1 md:grid-cols-2"
          >
            {skillsSet?.map((skill, idx) => (
              <motion.div
                variants={skillsVariants}
                key={idx}
                className={`flex justify-between items-center p-4 border-b-[1.5px] border-[#D6D6D6] ${
                  idx % 2 === 0
                    ? "mr-0 md:mr-5 lg:mr-10"
                    : "ml-0 md:ml-5 lg:ml-10"
                }`}
              >
                <h2 className="text-2xl text-dark_black">{skill?.skill}</h2>
                <div>{skill?.icon}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="max-w-screen-xl mx-4 md:mx-10 xl:mx-auto mt-10 mb-20">
        <motion.h2
          variants={textVariants}
          initial="initial"
          whileInView="animate"
          className="text-primary text-6xl"
        >
          Education
        </motion.h2>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-20">
          <motion.div
            variants={textVariants}
            initial="initial"
            whileInView="animate"
            className="flex-1"
          >
            <Lottie animationData={eduGIF}></Lottie>
          </motion.div>
          <motion.div
            variants={eduVariants}
            initial="initial"
            whileInView="animate"
            className="flex-1"
          >
            <Education />
          </motion.div>
        </div>
      </section>

      <section className="max-w-screen-xl mx-4 md:mx-10 xl:mx-auto mt-10 mb-20">
        <motion.h2
          variants={skillsVariants}
          initial="initial"
          whileInView="animate"
          className="text-primary text-6xl"
        >
          Professional Courses
        </motion.h2>
        <Courses />
      </section>
    </>
  );
}

export default About;
