import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import logo from '/src/assets/logo.jpg'
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <>
      <div className="hidden sm:block">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
           
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
            <Link to={'/signup'}>
              <button className="btn">Sign up</button>
            </Link>
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
