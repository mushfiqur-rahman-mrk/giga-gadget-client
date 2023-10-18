import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Bcard from './Bcard';

const BrandCategory = () => {
    const [categorys,setCategorys]=useState(null)
    const {id,image,brand_name}=categorys || {}
    console.log(categorys);
    useEffect(()=>{
        fetch('/category.json')
        .then(res=>res.json())
        .then(data=>setCategorys(data))
    },[])
    return (
        <>
            <Link to={'/brand-detail'}>
            <div className='grid grid-cols-3 mx-auto my-10 px-5 justify-center items-center gap-5 max-w-5xl'>
                {
                    categorys?.map(category=><>
                    <div className='border shadow-lg'>
                        <img className='bg-white w-full  h-20 object-contain object-center' src={category.image} alt="" />
                        <h1 className='text-center'>{category.brand_name}</h1>
                    </div>
                    </>)
                     
                }   
            </div> 
            </Link>  

            <Bcard></Bcard>
        </>
    );
};

export default BrandCategory;