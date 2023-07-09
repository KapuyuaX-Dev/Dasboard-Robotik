import React from "react";
import { Menu } from "@headlessui/react";
import { useNavigate } from "react-router-dom";

function TopNav({ username }) {
  const navigate = useNavigate();
  const onLogout = () => {
    localStorage.clear();
    navigate("/admin");
  };
  return (
    <div>
      <div className="z-10 flex items-center justify-between flex-wrap bg-[#00D1FF] p-3 ">
        <div className="flex items-center text-white text-lg">
          <div>
            Dashboard <b>UKRO</b>
          </div>
        </div>
        <Menu as="div">
          <div>
            <Menu.Button className="text-white rounded-lg py-2.5 px-4 bg-black bg-opacity-10 hover:bg-opacity-30 inline-flex items-center justify-center">
              {username}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                width="16"
                height="16"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 13.879L3.561 7.44a1.25 1.25 0 111.768-1.768L10 10.743l4.671-4.071a1.25 1.25 0 011.768 1.768L10 13.879z"
                  clip-rule="evenodd"
                />
              </svg>
            </Menu.Button>
          </div>
          <Menu.Items className=" absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="flex flex-col px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-[#00D1FF] text-white" : "bg-white text-black"
                    } rounded-md text-left px-2.5 py-2`}
                  >
                    Change Password
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-[#00D1FF] text-white" : "bg-white text-black"
                    } rounded-md text-left px-2.5 py-2`}
                    onClick={onLogout}
                  >
                    Logout
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Menu>
      </div>
    </div>
  );
}

export default TopNav;
