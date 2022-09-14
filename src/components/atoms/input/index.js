import React from "react";
import { useFormContext } from "react-hook-form";
import { twMerge } from "tailwind-merge";

function Input(props) {
  const {
    name,
    placeholder,
    type,
    rules,
    label,
    id,
    icon,
    labelClass,
    inputClass,
  } = props;
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="w-full flex flex-col transition-all">
      <label
        className={twMerge(
          `text-sm text-black text-opacity-50 mb-1 ${labelClass}`
        )}
        htmlFor={id}
      >
        {label}
      </label>
      <div
        className={`border-b flex items-center ${
          errors[name] ? "border-red-500" : "border-gray-25"
        }`}
      >
        {icon}
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          {...register(name, rules)}
          className={twMerge(
            `focus:ml-2 transition-all text-sm w-full focus:shadow-none py-2 placeholder:tracking-wider text-opacity-50 focus:outline-none ${inputClass}`
          )}
        />
      </div>
      <p className="text-red-500 text-xs tracking-wide my-3">
        {errors[name] ? errors[name]?.message : null}
      </p>
    </div>
  );
}

export default Input;
