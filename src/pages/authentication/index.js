import React from "react";
import { Outlet } from "react-router";
// import { AuthRBAC } from "utilities/RBAC";

function Auth() {
  return (
    <div className="w-full h-[100vh] flex items-center bg-gray-100">
      <div className="max-w-lg w-full mx-auto shadow-lg p-12 rounded-xl bg-white">
        <Outlet />
      </div>
    </div>
  );
}

export default Auth;
