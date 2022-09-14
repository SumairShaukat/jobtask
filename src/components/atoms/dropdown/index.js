import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { twMerge } from "tailwind-merge";
// const userNavigation = [{ name: "Sign out", to: "auth/login" }];
function DropDown({ className, children, userNavigation }) {
  return (
    <Menu as="div" className="relative w-auto">
      <Menu.Button className="flex items-center focus:outline-none">
        {children}
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={twMerge(
            `origin-top-right absolute right-0 z-40 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${className}`
          )}
        >
          {userNavigation.map((item) => (
            <Menu.Item key={item.name}>
              <div
                onClick={item?.action}
                className="px-4 py-2 text-sm text-gray-700 cursor-pointer"
              >
                {item.name}
              </div>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default DropDown;
