import React, { useState } from "react";
import { FormGenerator } from "components/organisms";
import { Button } from "components/atoms";
import { TagsFields } from "../data/index";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProducts } from "../store/action";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AddProduct() {
  // Hooks
  const methods = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  // Functions
  //   const onAddProducts = (data) => {
  //     setLoader(true);
  //     return dispatch(addProducts(data))
  //       .then(() => {
  //         setLoader(false);
  //         toast.success("Product added Scuccefully!");
  //         navigate(-1);
  //       })
  //       .catch((e) => {
  //         setLoader(false);
  //         toast.error("Can't add Product");
  //       });
  //   };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit()} className="w-full">
        <FormGenerator title="Basic Info" inputs={TagsFields} />
        <div className="flex justify-end pt-6">
          <Button
            loader={loader}
            value="submit"
            className="w-56"
            type="submit"
          />
        </div>
      </form>
    </FormProvider>
  );
}

export default AddProduct;
