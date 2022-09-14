import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

function Menu(props) {
  const State = useSelector((state) => state?.Auth);
  const { pathname } = useLocation();
  const active = pathname?.split("/")[2] === props?.path;
  useEffect(() => {
  }, [State]);
  return (
    <>
      {!props?.isNotAllowed && (
        <div className="py-1">
          <Link
            className={`w-full ${active ? ` ${props.activeClass}` : "text-white"
              }`}
            to={`/${props?.parent}/${props?.path}`}
          >
            <div
              className={twMerge(
                `${active ? `bg-white` : ``
                } px-4 py-3 rounded-md w-full flex items-center space-x-3 ${props.className
                }`
              )}
            >
              <div className={twMerge(`${props.iconMainClass}`)}>
                <props.icon
                  className={twMerge(`text-lg ${props.iconClass}`)}
                  aria-hidden="true"
                />
              </div>
              <span
                className={twMerge(
                  `tracking-wider text-sm ${props.labelClass}`
                )}
              >
                {props?.name}
              </span>
            </div>
          </Link>
        </div>
      )}
      {props?.children?.map((v, k) => {
        return <Menu parent={props?.name} {...v} key={k} />;
      })}
    </>);
}

export default Menu;
