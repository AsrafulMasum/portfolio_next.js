"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "./../public/logo.png";
import { IoIosClose, IoIosMenu } from "react-icons/io";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/projects">Projects</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </>
  );

  return (
    <div className="relative text-white">
      <div className="fixed w-full bg-black bg-opacity-70 backdrop-blur-md py-2">
        <nav className="max-w-screen-xl mx-4 xl:mx-auto flex justify-between items-center">
          <Image src={logo} alt="Logo" width={40} height={40} />
          <div className="flex justify-center items-center gap-8">
            <ul className="hidden md:flex justify-center items-center gap-4">
              {navLinks}
            </ul>
            <div className="flex gap-4">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/asrafulislam.masum.3"
              >
                <FaFacebook />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/hossain-mohammad-asraful-islam-masum-4b5847200"
              >
                <FaLinkedin />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/AsrafulMasum"
              >
                <FaGithub />
              </a>
            </div>
            <div className="md:hidden" onClick={() => setOpen((prev) => !prev)}>
              {open ? (
                <IoIosClose className="text-3xl cursor-pointer" />
              ) : (
                <IoIosMenu className="text-2xl cursor-pointer" />
              )}
            </div>
          </div>
        </nav>
      </div>
      <aside
        className={`md:hidden absolute top-[52px] bg-[#999] w-60 p-8 rounded-l-lg duration-500 ${
          open ? "right-0" : "-right-60"
        }`}
      >
        <ul className="flex-col justify-center items-center space-y-4">
          {navLinks}
        </ul>
      </aside>
    </div>
  );
}

export default Navbar;
