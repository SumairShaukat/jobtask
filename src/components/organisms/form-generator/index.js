import React from "react";
import PropTypes from "prop-types";
import { Input } from "components/atoms";
import Select from "components/atoms/select";

function FormGenerator(props) {
  return (
    <>
      <div
        className={`w-full grid grid-cols-2 gap-x-10 gap-y-4 items-center shadow-sm rounded-xl py-5 px-6`}
      >
        <h1 className="text-black text-opacity-50 text-xl pb-2 col-span-2">
          {props.title}
        </h1>
        {props?.inputs?.map((v, k) => {
          return v?.select ? (
            <Select
              key={k}
              name={v?.name}
              label={v?.label}
              type={v?.type}
              rules={v?.rules}
              id={v?.id}
              options={v?.options}
              loading={v?.loading}
              placeholder={v?.placeholder}
              labelClass="text-xs font-medium"
              inputClass="placeholder-black placeholder-opacity-25 font-light text-xs py-1 border-0 border-b"
            />
          ) : (
            <Input
              key={k}
              name={v?.name}
              label={v?.label}
              type={v?.type}
              rules={v?.rules}
              id={v?.id}
              placeholder={v?.placeholder}
              labelClass="mb-0 text-xs font-medium"
              inputClass="placeholder-black placeholder-opacity-25 font-light text-xs py-4"
            />
          );
        })}
      </div>
    </>
  );
}
FormGenerator.propTypes = {
  title: PropTypes.string,
  inputs: PropTypes.array,
};
export default FormGenerator;
