import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Loader from "./components/organisms/loader";
import Router from "./router";

function App() {
  // Hooks
  const [loader, setLoader] = useState(true);
  // Variable
  const loading = useSelector((state) => state?.Auth?.settings?.loader);
  // Effect
  useEffect(() => {
    setLoader(loading);
  }, [loading]);
  return (
    <BrowserRouter>
      {loader && <Loader />}
      <Router />
    </BrowserRouter>
  );
}

export default App;
