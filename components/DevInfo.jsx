import Image from "next/image";
import React from "react";
import coding from "./../public/coding.jpg";
import stroke from "./../public/dev_stroke.png";
import Button from "./Button";

function DevInfo() {
  return (
    <div className="flex flex-col lg:flex-row bg-white">
      <div className="lg:w-2/5 relative">
        <Image className="h-full object-cover" src={coding} alt="" />
        <div className="absolute right-0 bottom-0 bg-primary text-white py-8 px-4 text-center uppercase font-semibold">
          <span className="text-7xl">2</span> <br /> years experience
        </div>
      </div>
      <div className="lg:w-3/5 relative">
        <div className="w-2/3 mt-10 ml-16 text-dark_black">
          <h4 className="text-3xl md:text-6xl font-semibold mb-4 text-text_color">
            Elevate{" "}
            <span className="text-primary italic">
              Your <br /> Online
            </span>{" "}
            Presence
          </h4>
          <p>
            Elevate your brand with my top-notch web development services. From
            design to deployment, I create visually stunning, high-performing
            websites tailored to your needs. I ensure your site is fast, secure,
            and optimized for user experience.
          </p>
          <p className="mb-4 mt-2">
            Make a lasting impression with advanced SEO techniques and analytics
            to reach a wider audience. Partner with me to achieve your business
            goals and stand out in the digital landscape.
          </p>
          <Button
            text="Contact Me"
            styles="bg-transparent text-dark_black border border-primary"
            spanStyle="bg-primary text-white"
          />
        </div>
        <div className="mt-10 flex items-center">
          <div className="border text-center font-semibold text-dark_black capitalize flex-1 py-5"><span className="text-4xl text-primary">5+</span> <br /> website Development</div>
          <div className="border text-center font-semibold text-dark_black capitalize flex-1 py-5"><span className="text-4xl text-primary">5+</span> <br /> website Development</div>
          <div className="border text-center font-semibold text-dark_black capitalize flex-1 py-5"><span className="text-4xl text-primary">5+</span> <br /> website Development</div>
        </div>
        <Image className="w-40 absolute right-0 bottom-16" src={stroke} alt="" />
      </div>
    </div>
  );
}

export default DevInfo;
