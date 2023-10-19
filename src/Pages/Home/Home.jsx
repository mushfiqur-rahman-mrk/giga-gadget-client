import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Login from '../../Components/Login/Login';
import OurApp from '../../Components/OurApp/OurApp';
import Banner from '../../Components/Banner/Banner';
import Special from '../../Components/Special/Special';
import BrandCategory from '../../Components/BrandCategory/BrandCategory';
import Featured from '../../Components/Featured/Featured';
import Slider from '../../Components/Banner/Slider';

const Home = () => {
    return (
        <>
            <div className='dark:bg-slate-500'>
            <Slider></Slider>
            <Special></Special>
            <BrandCategory></BrandCategory>
            <Featured></Featured>
            <OurApp></OurApp>    
                
            </div> 
               
            
        </>
    );
};

export default Home;