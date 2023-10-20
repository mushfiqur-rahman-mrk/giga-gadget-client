import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Login from '../../Components/Login/Login';
import OurApp from '../../Components/OurApp/OurApp';
import Banner from '../../Components/Banner/Banner';
import Special from '../../Components/Special/Special';
import BrandCategory from '../../Components/BrandCategory/BrandCategory';
import Featured from '../../Components/Featured/Featured';
import Slider from '../../Components/Banner/Slider';
import Rough from '../../Components/BrandCategory/Rough';

const Home = () => {
    return (
        <>
            <div className='dark:bg-[#141b2f]'>
            {/* <Slider></Slider> */}
            <Banner></Banner>
            <Special></Special>
            <BrandCategory></BrandCategory>
            <Featured></Featured>
            <Rough></Rough>
            <OurApp></OurApp>    
                
            </div> 
               
            
        </>
    );
};

export default Home;