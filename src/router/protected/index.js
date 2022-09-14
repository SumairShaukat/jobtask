import Dashboard from "pages/app/home";
import Products from "pages/app/products";
import App from "pages/app/template";

import { AiFillDashboard } from "react-icons/ai";

import { BsBagFill, BsStack } from "react-icons/bs";

import { ProductsRoutes } from "pages/app/products/router";

export const ProtectedRoute = [
  {
    path: "/app",
    Component: <App />,
    isNotAllowed: true,
    access: "*",
    name: "app",
    children: [
      {
        path: "dashboard",
        Component: <Dashboard />,
        icon: AiFillDashboard,
        name: "Dashboard",
        access: "User",
      },

      {
        path: "products",
        Component: <Products />,
        icon: BsBagFill,
        BsStack,
        name: "Products",
        access: "Product",
        children: ProductsRoutes,
      },
    ],
  },
];
