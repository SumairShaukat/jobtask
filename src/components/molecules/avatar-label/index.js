
import { assets } from "../../../constants/images";
import React from "react";

function AvatarLabel({ src, name, role }) {
  return (
    <div className="flex items-center space-x-3">
      <div className="text-right tracking-wide space-y-0.5">
        <p className="text-sm leading-none text-black font-mont">{name}</p>
        <p className="text-xs leading-none text-secondary-300 font-mont">
          {role}
        </p>
      </div>
      <div className="inline-block relative">
        <div className="bg-secondary-200 rounded-full">
          <img className="h-10 w-10 rounded-full" src={src} alt="" />
        </div>
        <span className="absolute bottom-0.5 right-0.5 block h-2 w-2 rounded-full ring-2 ring-white bg-green-100" />
      </div>
    </div>
  );
}
AvatarLabel.defaultProps = {
  name: "John Doe",
  role: "Admin",
  src: assets?.avatar,
};
export default AvatarLabel;
