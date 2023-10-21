import { useContext, useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "/src/assets/footer-logo.png";
import { AuthContext } from "../../Authentication/Auth";
import swal from "sweetalert";

import userimg from "/public/user.png";

const Mobilenav = () => {
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("logged out successfully");
        swal("Logged out successfully", "", "success");
      })
      .catch((error) => console.log(error));
  };

  const navLinks = (
    <>
      <li className="font-semibold text-md dark:text-white">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500 underline " : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="font-semibold text-md dark:text-white">
        <NavLink
          to="/add-product"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500 underline " : ""
          }
        >
          Add product
        </NavLink>
      </li>
      <li className="font-semibold text-md dark:text-white">
        <NavLink
          to="/my-cart"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-500 underline" : ""
          }
        >
          My cart
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      <nav className="flex justify-between shadow-lg  items-center p-4 dark:bg-slate-700">
        <div>
          {/* <h1 className='sm:hidden'>logo</h1> */}
          <img src={logo} className="h-14 sm:hidden " alt="" />
        </div>
        <div className="hidden sm:block">
          <ul className="flex gap-5">{navLinks}</ul>
        </div>
        <div className="flex items-center gap-5">
          <div className="sm:hidden">
            <ThemeSwitch></ThemeSwitch>
          </div>

          <div className="sm:hidden">
            {user ? (
              <>
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="">
                    {user?.photoURL ? (
                      <img
                        className="rounded-full w-10 h-10"
                        src={user.photoURL}
                        alt=""
                      />
                    ) : (
                      <img
                        src={userimg}
                        className="w-10 h-10 rounded-full"
                        alt=""
                      />
                    )}
                  </label>
                  {/* <img src="/public/user.png" className="w-10 h-10" alt="" /> */}
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li className="">
                      {user.displayName ? user.displayName : "no name found"}
                    </li>
                    <li>{user.email}</li>
                  </ul>
                </div>
              </>
            ) : (
              ""
            )}
          </div>

          <div className="md:hidden text-xl" onClick={() => setOpen(!open)}>
            {open === true ? (
              <FaTimes className="dark:text-white"></FaTimes>
            ) : (
              <FaBars className="dark:text-white"></FaBars>
            )}
          </div>
        </div>
      </nav>

      <div className=" w-full text-center">
        <ul
          className={`bg-gradient-to-r from-cyan-500 to-blue-500 z-30 space-y-4 pt-5 border absolute w-full h-full ${
            open ? "top-18 transition delay-1000" : "hidden"
          }`}
        >
          {navLinks}

          {user ? (
            <div onClick={handleLogout}>
              <button className="px-2  w-full bg-cyan-800 py-3 text-white rounded-lg">
                Log out
              </button>
            </div>
          ) : (
            <Link to={"/signup"}>
              <button className="w-full bg-cyan-800 py-3 text-white">
                Login
              </button>
            </Link>
          )}
        </ul>
      </div>
    </>
  );
};

export default Mobilenav;
