//import { batch } from "react-redux";
import { toast } from "react-toastify";
import { useFetch } from "utilities/usefetch";

// Constant
export const TOGGLE_LOADER = "TOGGLE LOADER";
export const GET_PRODUCT = "GET PRODUCT";
// Action
export const toggleLoader = () => ({
  type: TOGGLE_LOADER,
});
export const getProduct = (products) => ({
  type: GET_PRODUCT,
  payload: products,
});
export const loadProduct = () => {
  return async (dispatch) => {
    await useFetch.get(`products`).then((response) => {
      dispatch(getProduct(response?.data));
    });
  };
};

export const deleteProductById = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await useFetch.delete(`products/${id}`);
      dispatch(getProduct());
      return toast.success("Product Deleted!");
    } catch (e) {
      return toast.error(`Can't Delete Product | ${e?.response?.message}`);
    }
  };
};
export const addProducts = (data) => {
  return async (dispatch) => {
    await useFetch
      .post("products/add", data)
      .then((responce) => {
        dispatch(loadProduct(responce?.data));
      })
      .catch((e) => {
        return toast.error(`Can't update Product | ${e?.responce.message}`);
      });
  };
};

export const updateProductById = (id, data) => {
  return async (dispatch) => {
    try {
      const response = await useFetch.patch(`product/${id}`, data);
      dispatch(getProduct({}));
      return toast("Product Updated!");
    } catch (e) {
      return toast.error(`Can't Update Product | ${e?.response?.message}`);
    }
  };
};
