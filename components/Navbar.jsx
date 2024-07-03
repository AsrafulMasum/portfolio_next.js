"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "./../public/logo.png";
import { IoIosClose, IoIosMenu } from "react-icons/io";
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Sidebar from "./Sidebar";

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
      <li>
        <Link href="/blogs">Blogs</Link>
      </li>
    </>
  );

  return (
    <div className="relative text-white z-50">
      <div className="fixed w-full bg-dark_black py-4">
        <nav className="max-w-screen-xl mx-4 md:mx-10 xl:mx-auto flex justify-between items-center">
          <div className="flex justify-center items-center gap-8">
            <Link href='/' className="inline-block">
              <Image src={logo} alt="Logo" width={40} height={40} />
            </Link>
            <ul className="hidden md:flex justify-center items-center gap-8">
              {navLinks}
            </ul>
          </div>
          <div className="flex justify-center items-center gap-4">
            <div className="flex gap-6 text-2xl">
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
                href="https://x.com/MasumKa24921110"
              >
                <FaXTwitter />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/hossainmohammadislam"
              >
                <FaInstagram />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/mohammad-asraful-islam-masum-4b5847200"
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
              {!open &&
                <IoIosMenu className="text-3xl cursor-pointer" />
              }
            </div>
          </div>
        </nav>
      </div>
      <aside
        className={`md:hidden fixed top-0 bg-dark_black w-screen h-screen py-6 duration-500 ${open ? "right-0" : "-right-[1000px]"
          }`}
      >
        <div onClick={() => setOpen((prev) => !prev)} className="flex justify-end mb-4 mr-4">
          <IoIosClose className="text-3xl cursor-pointer" />
        </div>
        <Sidebar setOpen={setOpen} open={open} />
      </aside>
    </div>
  );
}

export default Navbar;
