import React from "react";
import { Link } from "react-router-dom";

const Bcard = ({ category }) => {
  console.log(category);
  const { id, image, brand_name } = category || {};
  return (
    <>
     
      <div className=" border">
        <Link to={`/brand-detail/${brand_name}`}>
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-contain object-center"
            src={image}
          />
          <div className="px-8 py-10 relative z-10 w-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 hover:opacity-100">
            <div>
              <h1 className="text-xl font-bold text-black text-center">
                {brand_name}
              </h1>
            </div>
          </div>
        </div>
        </Link>
      </div>
         
    </>
  );
};

export default Bcard;
