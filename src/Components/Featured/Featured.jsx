import React, { useEffect, useState } from 'react';
import FeaturedCard from './FeaturedCard';

const Featured = () => {
    const [products,setProdcts]=useState([])

    useEffect(()=>{
        fetch('https://giga-gadget-server.vercel.app/products')
        .then(res=>res.json())
        .then(data=>setProdcts(data))
    },[])
    return (
        <>
            <h1 className="text-center font-extrabold text-3xl dark:text-white text-black">Featured Products</h1>
            <hr className="w-20 h-1.5 bg-black dark:bg-blue-500 border-none  mx-auto mt-2 mb-10 rounded-full"></hr>
            <div className='grid grid-cols-1 lg:grid-cols-4 max-w-6xl mx-auto px-5 mb-20 gap-5'>
                {
                    products.slice(0,8).map(product=><FeaturedCard key={product._id} product={product}></FeaturedCard>)
                }
            </div>
        </>
    );
};

export default Featured;