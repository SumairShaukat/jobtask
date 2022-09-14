import React from "react";
import { memo } from "react";
import { useFormContext, Controller } from "react-hook-form";
import classnames from "classnames";
import Select from "react-select";
import { twMerge } from "tailwind-merge";

function Selects(props) {
  const { multi, name, id, options, loading, rules } = props;
  const {
    formState: { errors },
    control,
  } = useFormContext();

  return (
    <div className="w-full flex flex-col transition-all">
      <label
        className={twMerge(
          `text-sm text-black text-opacity-50 mb-1 ${props.labelClass}`
        )}
      >
        {props.label}
      </label>
      <Controller
        isClearable
        rules={rules}
        render={({ field: { onChange, value, ref, onBlur, ...fields } }) => {
          return (
            <Select
              inputRef={ref}
              options={options}
              placeholder={"Choose..."}
              isMulti={multi}
              isLoading={loading}
              isClearable
              isSearchable
              name={name}
              onChange={(val) => {
                return onChange(
                  Array.isArray(val) ? val : val?.value ? val?.value : val
                );
              }}
              onBlur={onBlur}
              value={
                Array.isArray(value)
                  ? value
                  : options.filter((option) => value?.includes(option.value))
              }
              defaultValue={options.filter((option) =>
                value?.includes(option.value)
              )}
              className={twMerge(
                `transition-all w-full focus:shadow-none py-3 placeholder:tracking-wider text-opacity-50 focus:outline-none ${props.inputClass}`,
                errors[name] ? "border-red-500" : ""
              )}
            />
          );
        }}
        id={id}
        control={control}
        name={name}
      />
      <p className="text-red-500 text-xs tracking-wide my-3">
        {errors[name] ? errors[name]?.message : null}
      </p>
    </div>
  );
}

export default memo(Selects);
