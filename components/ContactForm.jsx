"use client";
import React, { useRef, useState } from "react";
import Button from "./Button";
import emailjs from "emailjs-com";

function ContactForm() {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.SERVICE_ID,
        process.env.TEMPLETE_ID,
        formRef.current,
        process.env.PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          e.target.reset();
          setLoading(false);
        },
        (error) => {
          setError(true);
          setLoading(false);
          console.log(error);
        }
      );
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="lg:w-3/4 mx-auto my-20"
    >
      <level className="text-[#141414] text-xl font-medium">Full Name</level>
      <input
        className="w-full h-11 mt-5 mb-10 outline-none bg-white border-b-2 border-[#141414] border-opacity-60 text-[#141414] text-opacity-60 font-medium text-lg placeholder:text-[#141414] placeholder:text-opacity-60 placeholder:font-medium placeholder:text-lg"
        type="text"
        placeholder="Mohammad Asraful Islam Masum"
        required
        name="name"
      />

      <level className="text-[#141414] text-xl font-medium">Email</level>
      <input
        className="w-full h-11 mt-5 mb-10 outline-none bg-white border-b-2 border-[#141414] border-opacity-60 text-[#141414] text-opacity-60 font-medium text-lg placeholder:text-[#141414] placeholder:text-opacity-60 placeholder:font-medium placeholder:text-lg"
        type="email"
        placeholder="h.m.asrafulmasum@gmail.com"
        required
        name="email"
      />

      <level className="text-[#141414] text-xl font-medium">Message</level>
      <textarea
        className="w-full h-11 mt-5 mb-10 outline-none bg-white border-b-2 border-[#141414] border-opacity-60 text-[#141414] text-opacity-60 font-medium text-lg placeholder:text-[#141414] placeholder:text-opacity-60 placeholder:font-medium placeholder:text-lg"
        placeholder="Tell us more about your idea"
        required
        name="message"
      />
      <div className="mt-4">
        <Button
          isLoading={loading}
          text="Send Message"
          styles="bg-transparent text-dark_black border border-primary"
          spanStyle="bg-primary text-white"
        />
      </div>
      {error && (
        <p className="text-red-500 mt-4">
          Failed to send the message, please try again.
        </p>
      )}
      {success && (
        <p className="text-green-500 mt-4">Message sent successfully!</p>
      )}
    </form>
  );
}

export default ContactForm;
