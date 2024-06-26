import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import React from "react";

function page() {
  return (
    <main className="overflow-hidden bg-white">
      <Navbar />
      <div className="mt-20 lg:mt-0 max-w-screen-xl mx-4 md:mx-10 xl:mx-auto lg:h-screen flex flex-col md:flex-row md:items-center">
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
          <ContactForm />
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </main>
  );
}

export default page;
