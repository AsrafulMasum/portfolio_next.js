"use client";
import React, { useState } from "react";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import Button from "./Button";

function Courses() {
  const [isOpen, setIsOpen] = useState(false);

  // const openPDFModal = () => {
  //   setIsOpenPDF(true);
  // };

  // const closePDFModal = () => {
  //   setIsOpenPDF(false);
  // };

  return (
    <>
      <h4 className="border-b border-dark_black inline-block mt-4 text-xl font-medium text-dark_black">
        MERN Stack Developer | | 6 Months
      </h4>
      <p className="my-10 text-text_color">
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
      </p>
      <div onClick={() => setIsOpen(true)} className="inline-block">
        <Button
          text="See Certificate"
          styles="bg-transparent text-dark_black border border-primary"
          spanStyle="bg-primary text-white"
        />
      </div>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 z-50 overflow-y-auto"
      >
        <div className="fixed inset-0 flex w-screen min-h-screen items-center justify-center p-4">
          <DialogPanel className="w-full space-y-4 border bg-white p-12">
            <DialogTitle className="text-lg font-medium leading-6 text-dark_black">Certificate</DialogTitle>
            <embed
              src="/PHcertificate.pdf#toolbar=0"
              type="application/pdf"
              width="100%"
              height="500px"
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
    </>
  );
}

export default Courses;
