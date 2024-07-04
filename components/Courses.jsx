"use client";
import React, { useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import Button from "./Button";
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

function Courses() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div variants={variants} initial="initial" whileInView="animate">
      <motion.h4 variants={variants}  className="border-b border-dark_black inline-block mt-4 text-xl font-medium text-dark_black">
        MERN Stack Developer | | 6 Months
      </motion.h4>
      <motion.p variants={variants}  className="my-10 text-text_color">
        I possess comprehensive proficiency in web development using MongoDB,
        Express.js, React.js, and Node.js. With expertise in both front-end and
        back-end technologies & excel in building dynamic and responsive web
        applications. My experience involves leveraging MongoDB for efficient
        data storage, Express.js to create robust server-side applications,
        React.js for building interactive user interfaces, and Node.js to handle
        server-side logic and connections. My responsibilities often encompass
        designing, developing, testing, and deploying full-stack applications
        while ensuring seamless integration between various components of the
        MERN stack, thus contributing to the creation of modern, scalable, and
        feature-rich web solutions.
      </motion.p>
      <motion.div variants={variants}  onClick={() => setIsOpen(true)} className="inline-block">
        <Button
          text="See Certificate"
          styles="bg-transparent text-dark_black border border-primary"
          spanStyle="bg-primary text-white"
        />
      </motion.div>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 z-50 overflow-y-auto"
      >
        <div
          style={{
            zIndex: "50",
            overflowY: "auto",
          }}
          className="fixed inset-0 flex w-screen min-h-screen items-center justify-center p-4"
        >
          <DialogPanel
            style={{
              animation: "slideInFromBottom 0.7s ease-out forwards",
            }}
            className="w-full space-y-4 border bg-white p-8 max-w-screen-lg mx-auto rounded-lg overflow-hidden"
          >
            <DialogTitle className="text-lg font-medium leading-6 text-dark_black">
              Certificate
            </DialogTitle>
            <iframe
              className="w-full min-h-[70vh]"
              title="PDF Viewer"
              src="/PHcertificate.pdf"
            />
            <div className="flex gap-4">
              <div onClick={() => setIsOpen(false)} className="inline-block">
                <Button
                  text="Close"
                  styles="bg-transparent text-dark_black border border-primary"
                  spanStyle="bg-primary text-white"
                />
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
      <style jsx global>{`
        @keyframes slideInFromBottom {
          0% {
            transform: translateY(100%);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </motion.div>
  );
}

export default Courses;
