import { Route } from "react-router-dom";
import { PublicRoute } from "./public";
import { ProtectedRoute } from "./protected";

export const AllRouter = [...PublicRoute, ...ProtectedRoute];
// Recursive Router
export const RecursiveRoute = ({ path, Component, children, key, index }) => {
  return (
    <Route path={path} index={index} key={key} element={Component}>
      {children &&
        children?.map((v, k) => {
          return RecursiveRoute({
            key: k,
            Component: v?.Component,
            path: v?.path,
            children: v?.children,
          });
        })}
    </Route>
  );
};
