"use client";
import React, { useRef, useState } from "react";
import Button from "./Button";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const formVariants = {
  initial: { y: 200, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 1, staggerChildren: 0.1 } },
};

function ContactForm() {
  // Ensure environment variables are properly set
  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID || "";
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID || "";
  const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY || "";

  // Debugging logs
  console.log("Service ID:", process.env.NEXT_PUBLIC_SERVICE_ID);
  console.log("Template ID:", process.env.NEXT_PUBLIC_TEMPLATE_ID);
  console.log("Public Key:", process.env.NEXT_PUBLIC_PUBLIC_KEY);  

  // Refs and state
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);

    // Check if environment variables are set before sending
    if (!serviceId || !templateId || !publicKey) {
      console.error("Missing EmailJS environment variables.");
      setError(true);
      setLoading(false);
      return;
    }

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
        setSuccess(true);
        e.target.reset();
        setLoading(false);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setError(true);
        setLoading(false);
      });
  };

  return (
    <motion.form
      variants={formVariants}
      initial="initial"
      whileInView="animate"
      ref={formRef}
      onSubmit={handleSubmit}
      className="lg:w-3/4 ml-auto my-20"
    >
      {/* Full Name */}
      <motion.div variants={formVariants}>
        <label className="text-[#141414] text-xl font-medium">Full Name</label>
        <input
          className="w-full h-11 mt-5 mb-10 outline-none bg-white border-b-2 border-[#141414] text-lg placeholder-opacity-60"
          type="text"
          placeholder="Mohammad Asraful Islam Masum"
          required
          name="name"
        />
      </motion.div>

      {/* Email */}
      <motion.div variants={formVariants}>
        <label className="text-[#141414] text-xl font-medium">Email</label>
        <input
          className="w-full h-11 mt-5 mb-10 outline-none bg-white border-b-2 border-[#141414] text-lg placeholder-opacity-60"
          type="email"
          placeholder="h.m.asrafulmasum@gmail.com"
          required
          name="email"
        />
      </motion.div>

      {/* Message */}
      <motion.div variants={formVariants}>
        <label className="text-[#141414] text-xl font-medium">Message</label>
        <textarea
          className="w-full h-11 mt-5 mb-10 outline-none bg-white border-b-2 border-[#141414] text-lg placeholder-opacity-60"
          placeholder="Tell us more about your idea"
          required
          name="message"
        />
      </motion.div>

      {/* Submit Button */}
      <motion.div variants={formVariants} className="mt-4">
        <Button
          isLoading={loading}
          text="Send Message"
          styles="bg-transparent text-dark_black border border-primary"
          spanStyle="bg-primary text-white"
        />
      </motion.div>

      {/* Error and Success Messages */}
      {error && <p className="text-red-500 mt-4">Failed to send the message, please try again.</p>}
      {success && <p className="text-green-500 mt-4">Message sent successfully!</p>}
    </motion.form>
  );
}

export default ContactForm;
