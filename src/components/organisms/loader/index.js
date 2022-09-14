import { gif } from "../../../constants/images";
import React from "react";
import { memo } from "react";

function Loaders() {
  return (
    <div className="w-full h-screen fixed top-0 left-0 bg-white flex items-center justify-center z-50">
      <img src={gif.loader} className="object-contain w-36" alt="" />
    </div>
  );
}

export default memo(Loaders);
