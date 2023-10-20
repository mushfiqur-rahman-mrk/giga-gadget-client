import React, { useEffect, useState } from "react";
// import Card from "../BrandCategory/Card";
import { Link, useLoaderData, useParams } from "react-router-dom";
import BrandDetailcard from "./BrandDetailcard";

const BrandDetail = () => {
  const [category,setCategory]=useState();
  const [data,setData]=useState([])
  const params= useParams()
  // const brands=params.brand
  const allData=useLoaderData()
  console.log(allData);
  // const filteredItems = items.filter(item => item.category === filterCategory);
  console.log(data);
  useEffect(()=>{
    const brandData=allData.filter(item=> item.brand === params.brand )
    setData(brandData)
  },[allData,params.brand])
// console.log(brandData);
  return (
    <>
    <div>
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
    </div>



      <div>
        <h1 className="text-center font-extrabold text-2xl mt-10">Brand Name</h1>
        <hr className="w-20 h-1 bg-black mx-auto mt-2 rounded-full"></hr>

        <div>
        {
          data.length >0 ? <>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-5 max-w-6xl px-5 mx-auto">
                  {
                    data?.map(item=><BrandDetailcard key={item._id} brandss={item}></BrandDetailcard>)
                  }
              </div>
          </> 
          :
          <h1 className="h-[50vh] w-full flex justify-center items-center text-2xl font-extrabold">No Product Available</h1>
        }
        </div>



      </div>
    </>
  );
};

export default BrandDetail;
