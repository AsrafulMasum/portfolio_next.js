import React from "react";
import Button from "./Button";
import Image from "next/image";
import profile from "./../public/profile.png";
import Link from "next/link";

function Hero() {
  return (
    <div className="lg:h-screen bg-primary py-20 text-white">
      <div className="h-full max-w-screen-xl mx-4 md:mx-10 xl:mx-auto flex flex-col-reverse lg:flex-row justify-between items-center gap-16 lg:gap-0">
        <div className="h-full lg:w-1/2 flex flex-col justify-center gap-10">
          <h4 className="text-3xl lg:text-5xl font-medium tracking-wide">
            MOHAMMAD ASRAFUL ISLAM MASUM
          </h4>
          <div>
            <h2 className="text-5xl lg:text-7xl font-semibold mb-2">
              WEB DEVELOPER
            </h2>
            <p>
              I&#39;m a skilled MERN stack web developer with expertise in
              building dynamic and responsive web applications using MongoDB,
              Express.js, React, and Node.js. I excel in creating seamless user
              experiences and efficient back-end solutions.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row justify-start lg:items-center gap-4">
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
          </div>
        </div>
        {/* <div className='w-1/2 hidden xl:block'>
          <ShowReel />
        </div> */}
        <div className="h-full lg:w-1/3 lg:mt-60 ">
          <Image
            className="lg:h-4/6 object-cover rounded-full border-2"
            src={profile}
            alt="Profile Image"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
