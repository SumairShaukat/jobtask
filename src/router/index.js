import React from "react";
import { AllRouter, RecursiveRoute } from "./routers";
import { Routes } from "react-router";
function Router() {
  return (
    <Routes>
      {AllRouter?.map((v, k) =>
        RecursiveRoute({
          key: k,
          Component: v?.Component,
          path: v?.path,
          children: v?.children,
        })
      )}
    </Routes>
  );
}

export default Router;
