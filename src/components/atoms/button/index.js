import React from "react";
import { twMerge } from "tailwind-merge";

function Button({ value, className, ...props }) {
  return (
    <button
      {...props}
      disabled={props?.disabled || props?.loader}
      className={twMerge(
        `w-full bg-primary-original text-sm items-center justify-center flex px-4 py-3 rounded-lg text-white font-semibold ${className}`
      )}
    >
      {props?.loader ? <>Loading...</> : value}
    </button>
  );
}

export default Button;
