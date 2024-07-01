import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { ImSpinner9 } from "react-icons/im";

function Button({ text, styles, spanStyle, isLoading }) {
  return (
    <button
      className={`flex justify-center items-center gap-4 text-xl rounded-full py-4 px-6 group overflow-hidden ${styles} uppercase`}
    >
      {isLoading ? <ImSpinner9 className="animate-spin text-primary mx-20" /> : text}
      {!isLoading && <span
        className={`relative w-6 h-6 rounded-full overflow-hidden ${spanStyle}`}
      >
        <IoIosArrowRoundForward className="absolute text-2xl group-hover:translate-x-10 duration-700" />
        <IoIosArrowRoundForward className="absolute -left-10 text-2xl group-hover:translate-x-0 group-hover:left-0 duration-700" />
      </span>}
    </button>
  );
}

export default Button;
