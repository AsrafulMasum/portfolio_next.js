"use client";
import Image from "next/image";
import React from "react";
import reelText from "./../public/reelText.png";
import reel from "./../public/reel.png";
import innerReel from "./../public/innerReel.png";

function ShowReel() {
  return (
    <div className="hidden md:block w-72 h-72 mt-8">
      <div className="relative">
        <Image className="absolute top-0 w-72" src={reel} alt="" />
        <Image className="absolute top-9 left-11 w-52 z-10 spin-clockwise" src={reelText} alt="" />
        <Image className="absolute top-20 left-20 w-32 z-20 spin-counterclockwise" src={innerReel} alt="" />
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes spin-clockwise {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-counterclockwise {
          0% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(-150deg) scale(0.8);
          }
          100% {
            transform: rotate(-300deg) scale(1);
          }
        }

        .spin-clockwise {
          animation: spin-clockwise 5s linear infinite;
          will-change: transform;
        }

        .spin-counterclockwise {
          animation: spin-counterclockwise 5s linear infinite alternate-reverse;
          will-change: transform;
        }
      `}</style>
    </div>
  );
}

export default ShowReel;
