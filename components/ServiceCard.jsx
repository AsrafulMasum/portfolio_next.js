"use client";
import React, { useState } from "react";
import Button from "./Button";
import Image from "next/image";
import stroke from "./../public/stroke.png";
import Link from "next/link";

function ServiceCard({ text, desc }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{
        transition: "background-color 0.5s ease",
        position: "relative",
      }}
      className="overflow-hidden"
    >
      <div
        style={{ zIndex: 2 }}
        className="h-full w-full relative py-16 xl:py-48 px-8 md:py-24 md:px-16 "
      >
        <h2
          className={`text-5xl font-semibold mb-10 duration-700 ${
            isHovered ? "text-card_bg" : "text-primary"
          }`}
        >
          {text}
        </h2>
        <p className={`text-dark_black leading-[140%] mb-20 duration-700 ${
            isHovered ? "text-card_bg" : "text-dark_black"
          }`}>{desc}</p>
        <Link href="/projects" className="inline-block">
          <Button
            text="View Projects"
            styles="bg-btn_color text-white"
            spanStyle="bg-primary text-white"
          />
        </Link>
        <div className="absolute bottom-0 -right-5">
          <Image
            className="w-32"
            src={stroke}
            alt="Stroke"
            style={{
              transition: "transform 0.5s",
              transform: isHovered ? "rotate(29deg)" : "rotate(0deg)",
            }}
          />
        </div>
      </div>
      <div
        className={` ${isHovered ? "slide-in" : "slide-out"}`}
        style={{
          position: "absolute",
          top: 0,
          left: -1,
          width: "100%",
          height: "100%",
          backgroundColor: "#F96302",
          zIndex: 1,
        }}
      />
      <style jsx>{`
        @keyframes slide-in {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes slide-out {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .slide-in {
          animation: slide-in 0.7s forwards;
        }

        .slide-out {
          animation: slide-out 0.7s forwards;
        }
      `}</style>
    </div>
  );
}

export default ServiceCard;
