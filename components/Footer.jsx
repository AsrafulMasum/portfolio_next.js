import React from "react";
import logo from "./../public/logoPrimary.png";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ShowReel from "./ShowReel";

function Footer() {
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
    <div className="bg-dark_black pt-16 pb-8">
      <div className="max-w-screen-xl mx-4 md:mx-10 xl:mx-auto flex flex-col md:flex-row justify-between gap-8 md:gap-0">
        <div className="md:w-1/3 lg:w-1/2">
          <Image src={logo} alt="Logo" />
          <div className="mt-10 space-y-8 text-white">
            <p>
              As a MERN stack developer, I specialize in building robust web
              applications with MongoDB, Express.js, React.js, and Node.js
              technologies.
            </p>
            <div>
              <p className="text-lg">Mohammad Asraful Islam Masum</p>
              <p>h.m.asrafulmasum@gmail.com</p>
              <p>+880 1687 177481</p>
            </div>
            <div className="inline-block">
              <Link href="/contact">
                <Button
                  text="Contact Me"
                  styles="bg-btn_color text-white"
                  spanStyle="bg-primary text-white"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="md:w-1/5">
          <p className="text-2xl text-white">Quick Links</p>
          <ul className="flex md:flex-col gap-4 mt-4 text-primary">
            {navLinks}
          </ul>
        </div>

        <div>
          <p className="text-2xl text-white">Follow Me</p>
          <div className="flex gap-6 text-2xl mt-4">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/asrafulislam.masum.3"
            >
              <FaFacebook className="text-primary" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/asrafulislam.masum.3"
            >
              <FaXTwitter className="text-primary" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/asrafulislam.masum.3"
            >
              <FaInstagram className="text-primary" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/hossain-mohammad-asraful-islam-masum-4b5847200"
            >
              <FaLinkedin className="text-primary" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/AsrafulMasum"
            >
              <FaGithub className="text-primary" />
            </a>
          </div>
          <div className="-ml-8"><ShowReel /></div>
        </div>
      </div>
      <hr className="max-w-screen-xl mx-4 md:mx-10 xl:mx-auto my-8" />
      <p className="max-w-screen-xl mx-4 md:mx-10 xl:mx-auto text-white font-medium text-center">
        All Rights Reserved by @ Mohammad Asraful Islam Masum.
      </p>
    </div>
  );
}

export default Footer;
