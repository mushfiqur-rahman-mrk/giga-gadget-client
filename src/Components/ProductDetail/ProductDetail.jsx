import React from 'react';
import Rating from "react-rating";
import { useLoaderData } from 'react-router-dom';
import swal from 'sweetalert';

const ProductDetail = () => {

  const data=useLoaderData()
  const {_id,brand,detail,image,price,productName,rating}=data || {}
  console.log(brand);

  const addtoCart=()=>{
      // send data to server
      fetch('https://giga-gadget-server.vercel.app/cart-item',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body: JSON.stringify(data)
      })
      swal("", `${productName} added to your cart`, "success");
  }




    return (
        <div>
            <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto object-cover object-center rounded" src={image}/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">product type</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{productName}</h1>
        <div className="flex flex-col mb-4">
           <Rating 
                    emptySymbol={
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="gray"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                      }
                    fullSymbol={<svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="orange"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>}
                    initialRating={rating} readonly
                    
                    />
           <p>Brand: {brand}</p>
        </div>

        <p className="leading-relaxed">{detail}</p>
        <p className="title-font font-medium text-2xl text-gray-900">$ {price}</p>
        <div className="flex">
          
          <button onClick={addtoCart} className="w-full text-center text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    );
};

export default ProductDetail;