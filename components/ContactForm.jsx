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
        "service_jp81xr9",
        "template_4m45u1j",
        formRef.current,
        "GKyL1Z6arBu3aR7qW"
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
      <input
        className="w-full h-11 outline-none px-5 bg-white border border-primary rounded text-dark_black placeholder:text-dark_black"
        type="text"
        placeholder="Name"
        required
        name="name"
      />

      <input
        className="w-full h-11 outline-none px-5 mt-4 bg-white border border-primary rounded text-dark_black placeholder:text-dark_black"
        type="email"
        placeholder="Email"
        required
        name="email"
      />

      <textarea
        className="w-full h-40 outline-none px-5 mt-4 bg-white border border-primary rounded pt-[9px] text-dark_black placeholder:text-dark_black"
        placeholder="Message"
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
