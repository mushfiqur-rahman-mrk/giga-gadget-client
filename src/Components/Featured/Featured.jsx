import React, { useEffect, useState } from 'react';
import FeaturedCard from './FeaturedCard';

const Featured = () => {
    const [products,setProdcts]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setProdcts(data))
    },[])
    return (
        <>
            <h1 className="text-center font-extrabold text-2xl">Featured Products</h1>
            <hr className="w-20 h-1 bg-black mx-auto mt-2 mb-5 rounded-full"></hr>
            <div className='grid grid-cols-1 lg:grid-cols-4 max-w-6xl mx-auto px-5 mb-20 gap-5'>
                {
                    products.slice(0,8).map(product=><FeaturedCard key={product._id} product={product}></FeaturedCard>)
                }
            </div>
        </>
    );
};

export default Featured;