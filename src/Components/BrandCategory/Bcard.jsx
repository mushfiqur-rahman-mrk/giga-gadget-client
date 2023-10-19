import React from "react";
import { Link } from "react-router-dom";

const Bcard = ({ category }) => {
  console.log(category);
  const { id, image, brand_name } = category || {};
  return (
    <>
     
      <div className="lg:w-1/3 sm:w-1/2 p-4 border">
        <Link to={`/brand-detail/${brand_name}`}>
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={image}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
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
