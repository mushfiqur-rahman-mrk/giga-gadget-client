import React from "react";
import { useLoaderData } from "react-router-dom";
import Mcard from "./Mcard";

const Mycart = () => {
  const cartItems=useLoaderData()

  return (
    <div className="max-w-6xl mx-auto px-8 ">
       {
        cartItems.length > 0 ? cartItems?.map(cartItem=><Mcard cartItem={cartItem} key={cartItem._id}></Mcard>)
        :
        <h1 className="h-screen w-full flex justify-center items-center text-2xl font-extrabold">Please Add Some Products</h1>
       }     
    </div>
  );
};

export default Mycart;
