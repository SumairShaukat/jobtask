import React from "react";
import { Outlet } from "react-router";
import { ProtectedRoute } from "router/protected";
import { Header } from "components/organisms";
import { Menu } from "components/molecules";

function App() {
  return (
    <div className="w-full grid grid-cols-6 bg-primary-original h-screen">
      <div className="w-full p-8">
        <div className="flex justify-center text-3xl text-white">Logo</div>
        <div className="py-10">
          {ProtectedRoute?.map((v, k) => {
            return <Menu {...v} key={k} activeClass="text-primary-original" />;
          })}
        </div>
      </div>
      <div className="col-span-5 bg-white rounded-l-5xl px-10 py-8 relative space-y-4 max-h-screen">
        <Header />
        <div className="overflow-hidden h-[85vh] px-1.5 -mx-1.5 pb-7">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
