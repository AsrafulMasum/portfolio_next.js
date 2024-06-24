import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

function page() {
  return (
    <main className="overflow-hidden bg-white">
      <Navbar />
      <div className="mt-24 max-w-screen-xl mx-4 md:mx-10 xl:mx-auto lg:h-screen flex flex-col md:flex-row">
        <div className="flex flex-col gap-12 text-dark_black font-medium flex-1">
          <h2 className="text-7xl font-semibold text-text_color">
            Let’s <span className="text-primary">work</span> <br /> together
          </h2>
          <p>
            Email <br /> h.m.asrafulmasum@gmail.com
          </p>
          <p>
            Address <br /> Dhaka, Bangladesh
          </p>
          <p>
            Phone <br /> +880 1687 177 481
          </p>
        </div>

        <div className="flex-1">
          <form className="lg:w-3/4 mx-auto my-20">
            <input
              className="w-full h-11 outline-none px-5 bg-white border border-primary rounded text-dark_black placeholder:text-dark_black"
              type="text"
              placeholder="Name"
              required
            />

            <input
              className="w-full h-11 outline-none px-5 mt-4 bg-white border border-primary rounded text-dark_black placeholder:text-dark_black"
              type="text"
              placeholder="Email"
              required
            />

            <textarea
              className="w-full h-40 outline-none px-5 mt-4 bg-white border border-primary rounded pt-[9px] text-dark_black placeholder:text-dark_black"
              placeholder="Message"
              required
            />
            <div className="mt-4">
              <Button
                text="Contact Me"
                styles="bg-transparent text-dark_black border border-primary"
                spanStyle="bg-primary text-white"
              />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default page;
