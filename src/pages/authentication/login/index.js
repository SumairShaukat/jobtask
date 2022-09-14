import React from "react";
import { assets } from "constants/images";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { handleLoginSuccess } from "store/actions";
import { Button, Input } from "components/atoms";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function Login() {
  // Hooks
  const methods = useForm({ mode: "onSubmit" });
  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginHandler = (e) => {
    setLoader(true);
    return dispatch(handleLoginSuccess(e))
      .then(() => {
        setLoader(false);
        toast.success("Login Successfully!");
        navigate("/app/dashboard");
      })
      .catch((e) => {
        setLoader(false);
        methods?.setError("email", {
          message: "Email Maybe Wrong!",
        });
        methods?.setError("password", {
          message: "Password Maybe Wrong!",
        });
      });
  };

  return (
    <div className="flex flex-col w-full mx-auto items-center h-full justify-center">
      <div className="w-full">
        {" "}
        <h1 className="text-2xl pb-5 w-full font-semibold text-center">
          Login
        </h1>
      </div>
      <FormProvider {...methods}>
        <form
          className="w-full space-y-6"
          onSubmit={methods.handleSubmit(loginHandler)}
        >
          <Input
            name="username"
            type="username"
            placeholder="Enter Your Email..."
            label="username"
            id="email"
            rules={{ required: "Email Should not be empty!" }}
            icon={
              <img
                className="w-4 mr-4"
                src={assets?.icon?.mail}
                alt="mail-icon"
              />
            }
          />
          <Input
            name="password"
            type="password"
            placeholder="Enter Your Password..."
            label="Password"
            id="password"
            rules={{ required: "Password Should not be empty!" }}
            icon={
              <img
                className="w-4 mr-4"
                src={assets?.icon?.password}
                alt="mail-icon"
              />
            }
          />
          <Button loader={loader} value="LOGIN" />
        </form>
      </FormProvider>
    </div>
  );
}

export default Login;
