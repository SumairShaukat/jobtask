import React from "react";
import { Link, Outlet } from "react-router-dom";
import { ProtectedRoutes } from "router/protected";

function App() {
  return (
    <div className="w-full grid grid-cols-6">
      <div className="w-full bg-gray-300 h-screen p-6">
        {ProtectedRoutes?.map((v, k) => {
          return <Menu {...v} />;
        })}
      </div>
      {/* <div className="col-span-5 bg-gray-400 p-6">
        <Outlet />
      </div> */}
    </div>
  );
}

export default App;
function Menu(props) {
  return (
    <>
      {!props?.isNotAllowed && (
        <Link to={`/${props?.parent}/${props?.path}`}>
          <div className="bg-indigo-400 rounded-md p-2.5 px-3 my-2 w-full">
            {props?.name}
          </div>
        </Link>
      )}
      {props?.children?.map((v, k) => {
        return <Menu parent={props?.name} {...v} />;
      })}
    </>
  );
}
