import React, { memo } from "react";
import { Outlet } from "react-router";

function Product() {
  return <Outlet />;
}

export default memo(Product);
