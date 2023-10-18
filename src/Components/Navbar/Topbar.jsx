import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import logo from '/src/assets/logo.jpg'

const Topbar = () => {
  return (
    <>
      <div className="hidden sm:block">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          {/* <a className="btn btn-ghost normal-case text-xl">GG</a> */}
          <img src={logo} className="h-14 " alt="" />
          {/* <img src="/src/assets/logo.jpg" alt="" /> */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <div>
            <input
              className="border"
              type="text"
              placeholder="Search by category..."
            />
            <button className="btn">Search</button>
          </div>
        </div>
        <div className="navbar-end">
        <ThemeSwitch></ThemeSwitch>
          <div className="dropdown dropdown-bottom dropdown-end">
            <label tabIndex={0} className="btn m-1">
              Click
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
      </div>
    </>
  );
};

export default Topbar;
