import React from 'react';
import ThemeSwitch from './ThemeSwitch';
import { NavLink } from 'react-router-dom';
import logo from '/src/assets/footer-logo.png'
const Mobilenav = () => {

  const navLinks =<>
  <li className="font-semibold text-md"><NavLink to="/" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "bg-orange-500 text-white" : ""}>Home</NavLink></li>
  <li className="font-semibold text-md"><NavLink to="/add-product" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "bg-orange-500 text-white" : ""}>Add product</NavLink></li>
  <li className="font-semibold text-md"><NavLink to="/my-cart" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "bg-orange-500 text-white" : ""}>My cart</NavLink></li>

</>
    return (

        <>
            <div className="navbar bg-base-100 shadow-lg">
  <div className="navbar-start">
    
    {/* <img src={logo} alt="" /> */}
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    <div className='sm:hidden'>
        <ThemeSwitch></ThemeSwitch>
    </div>
    {/* <button className='hidden sm:block'>login</button> */}
    {/* <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
         {navLinks}
      </ul>
    </div> */}
  </div>
</div>   
        </>
    );
};

export default Mobilenav;