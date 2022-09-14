import { gif } from "../../../constants/images";
import React from "react";
import { memo } from "react";

function TableLoader() {
  return (
    <div className="w-full h-full bg-white flex flex-col items-center justify-center z-50">
      <img src={gif.loader} className="object-contain w-24" alt="" />
    </div>
  );
}

export default memo(TableLoader);
