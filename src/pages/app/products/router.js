//import AddProducts from "./add-product";
import ProductsList from "./list";
import AddProduct from "./addProduct";

export const ProductsRoutes = [
  {
    path: "",
    Component: <ProductsList />,
    name: "Products",
    access: "Products",
    isNotAllowed: true,
  },
  {
    path: "add",
    Component: <AddProduct />,
    name: "Add Products",
    access: "Products",
    isNotAllowed: true,
  },
];
