import React from "react";

import AvatarLabel from "components/molecules/avatar-label";
import { DropDown } from "components/atoms";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { handleLogout } from "store/actions";
import { useLocation, useNavigate } from "react-router";
import { ProtectedRoute } from "router/protected";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const logout = () => {
    dispatch(handleLogout());
    navigate("/auth/login");
  };
  const userNavigation = [{ name: "Sign out", action: logout }];
  const back = () => navigate(-1);
  const title = ProtectedRoute[0].children.find((v) =>
    pathname?.includes(v?.path)
  )?.name;
  return (
    <div className="flex items-center w-full justify-between">
      <div className="flex items-center space-x-4">
        <button onClick={back}>
          <BsFillArrowLeftCircleFill className="text-xl text-primary-original" />
        </button>
        <h2 className="text-primary-original text-2xl font-semibold tracking-wide">
          {title}
        </h2>
      </div>
      <div className="flex items-center space-x-3">
        <DropDown userNavigation={userNavigation}>
          <AvatarLabel />
        </DropDown>
      </div>
    </div>
  );
}

export default Header;
