"use client";
import Image from "next/image";
import React, { useState } from "react";
import arrow from "./../public/btn_arrow.png";

function ProjectsCard({ img, title, desc, code, live }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <div className="relative overflow-hidden">
        <Image className="h-96 object-cover" src={img} alt="projects1" />
        <a target="_blank"
          href={live}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          className="cursor-pointer h-28 lg:h-36 w-28 lg:w-36 bg-white/30 rounded-full backdrop-blur-lg absolute -bottom-20 group-hover:bottom-10 lg:group-hover:bottom-5 xl:group-hover:bottom-10 duration-700 left-1/2 p-4 group"
          style={{
            transform: "translate(-50%)",
          }}
        >
          <div className="h-20 lg:h-28 w-20 lg:w-28 rounded-full border border-white/30 p-4 lg:p-8">
            <Image
              style={{
                transition: "transform 0.7s",
                transform: isHovered
                  ? "rotate(45deg) scale(1.5)"
                  : "rotate(0deg) scale(1)",
              }}
              className="group-hover:scale-110"
              src={arrow}
              alt=""
            />
          </div>
        </a>
        <a target="_blank"
          href={code}
          className="bg-btn_color rounded-full py-2 px-4 absolute top-5 right-5 text-white"
        >
          See Code
        </a>
      </div>
      <h4 className="text-primary text-2xl md:text-3xl font-bold mt-8 capitalize">
        {title}
      </h4>
      <p className="text-[#14141499] text-lg font-medium mt-2 mb-5">{desc}</p>
    </div>
  );
}

export default ProjectsCard;
