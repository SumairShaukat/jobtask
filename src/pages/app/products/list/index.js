//import { Table } from "components/organisms";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete, MdEdit } from "react-icons/md";
import { Button } from "components/atoms";
import {
  loadProduct,
  deleteProductById,
  updateProductById,
} from "../store/action";
import store from "store";
function ProductList() {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(0);
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const State = useSelector((state) => state?.product);

  const productsColumns = [
    {
      name: "id",
      selector: "id",
      sortable: true,
      minWidth: "20px",
      maxWidth: "70px",
    },
    {
      name: "Thumbnail",
      selector: "thumbnail",
      sortable: true,
      maxWidth: "120px",
      cell: (row) => (
        <>
          <img src={row.thumbnail} alt="" className="my-1 h-10 w-10 " />
        </>
      ),
    },
    {
      name: "Title",
      selector: "title",
      sortable: true,
      maxWidth: "200px",
    },

    {
      name: "Description",
      selector: "description",
      sortable: true,
      maxWidth: "400px",
    },
    {
      name: "Category",
      selector: "category",
      sortable: true,
      maxWidth: "150px",
    },

    {
      name: "Action",
      id: "Action",
      width: 50,
      button: true,
      cell: (row) => {
        const id = row.id;
        return (
          <>
            <button>
              <MdDelete
                onClick={() => store.dispatch(deleteProductById(id))}
                className="text-red-500 text-xl"
              />
            </button>
          </>
        );
      },
    },
    {
      name: "Action",
      id: "Action",
      width: 50,
      button: true,
      cell: (row) => {
        return (
          <>
            <button>
              <MdEdit
                onClick={
                  ((e) => navigate("/app/products/add"),
                  () => store.dispatch(updateProductById(row.id)))
                }
                className="text-primary-original text-xl"
              />
            </button>
          </>
        );
      },
    },
  ];

  //effects for products
  useEffect(() => {
    dispatch(loadProduct());
  }, []);
  useEffect(() => {
    setProducts(State?.products);
  }, [State]);

  const addNewProduct = () => navigate("/app/products/add");
  return (
    <div>
      <div className="w-full justify-end flex  rounded-md">
        <Button
          className="w-auto m-4"
          onClick={addNewProduct}
          value="Add new Product"
        />
      </div>
      <div className="w-full h-[75vh]  mt-6 overflow-auto rounded-md">
        <DataTable
          noHeader
          pagination
          highlightOnHover
          dense
          columns={productsColumns}
          paginationPerPage={7}
          className="react-dataTable roles-table"
          data={products}
          paginationDefaultPage={currentPage + 1}
        />
      </div>
    </div>
  );
}

export default ProductList;
