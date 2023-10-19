import React, { useState } from 'react';
import ThemeSwitch from './ThemeSwitch';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import logo from '/src/assets/footer-logo.png'
const Mobilenav = () => {
  const [open,setOpen]=useState(false)
  const navLinks =<>
  <li className="font-semibold text-md"><NavLink to="/" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "bg-orange-500 text-white" : ""}>Home</NavLink></li>
  <li className="font-semibold text-md"><NavLink to="/add-product" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "bg-orange-500 text-white" : ""}>Add product</NavLink></li>
  <li className="font-semibold text-md"><NavLink to="/my-cart" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "bg-orange-500 text-white" : ""}>My cart</NavLink></li>

</>
    return (

        <>
            <nav className='flex justify-between shadow-lg  items-center p-4'>
              <div>
                  <h1 className='sm:hidden'>logo</h1>
              </div>
              <div className='hidden sm:block'>
                  <ul className='flex gap-5'>
                    {navLinks}
                  </ul>
              </div>
              <div className='flex items-center gap-5'>
                  <div className='sm:hidden'><ThemeSwitch></ThemeSwitch></div>
                  <button className='btn sm:hidden'>Login</button>
                  <div className="md:hidden text-xl" onClick={() => setOpen(!open)}>
                      {open === true ? <FaTimes></FaTimes> : <FaBars></FaBars>}
                  </div>
              </div>
            </nav>

            <div className=' w-full text-center'>
              <ul className={`bg-blue-200 z-30 space-y-4 pt-5 absolute w-full h-full ${open ? 'top-18 transition delay-1000' : 'hidden'}`}>
                 {navLinks} 
              </ul>
            </div>
        </>
    );
};

export default Mobilenav;