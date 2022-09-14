import Login from "../../pages/authentication/login";
import Auth from "../../pages/authentication";
import { Navigate } from "react-router";
export const PublicRoute = [
  {
    path: "/auth",
    Component: <Auth />,
    children: [
      {
        path: "login",
        Component: <Login />,
      },
      {
        path: "*",
        Component: <Navigate to="/auth/login" />,
      },
    ],
  },
  {
    path: "*",
    Component: <Navigate to="/auth/login" />,
  },
];
