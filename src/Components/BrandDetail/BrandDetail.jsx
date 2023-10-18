import React from "react";
// import Card from "../BrandCategory/Card";
import { Link } from "react-router-dom";

const BrandDetail = () => {
  return (
    <>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
           
          <div className="bg-cyan-500 w-full h-[30vh]"></div>
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="/images/stock/photo-1414694762283-acccc27bca85.jpg"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>

      <div>
        <h1 className="text-center font-extrabold text-2xl">Brand Name</h1>
        <hr className="w-20 h-1 bg-black mx-auto mt-2 rounded-full"></hr>

        <div className="my-10">
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <p className="">Product type</p>
              <h2 className="card-title">Product Name</h2>
              <p>Rateing</p>
              <p>Price</p>
              <div className="card-actions justify-center">
                <Link to={'/product-detail'}>
                    <button className="btn btn-primary">Show Detail</button>
                </Link>
                <Link to={'/update-product'}>
                    <button className="btn btn-error">Update</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandDetail;
