import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Button({ text }) {
  return (
    <button
      className={`flex justify-center items-center gap-2 bg-btn_color text-white rounded-full p-4 group overflow-hidden`}
    >
      {text}
      <span className="relative bg-primary w-6 h-6 rounded-full overflow-hidden">
        <IoIosArrowRoundForward className="absolute text-2xl group-hover:translate-x-10 duration-500" />
        <IoIosArrowRoundForward className="absolute -left-10 text-2xl group-hover:translate-x-0 group-hover:left-0 duration-500" />
      </span>
    </button>
  );
}

export default Button;
