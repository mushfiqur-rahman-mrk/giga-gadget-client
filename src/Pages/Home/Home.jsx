import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Login from '../../Components/Login/Login';
import OurApp from '../../Components/OurApp/OurApp';
import Banner from '../../Components/Banner/Banner';
import Special from '../../Components/Special/Special';
import BrandCategory from '../../Components/BrandCategory/BrandCategory';

const Home = () => {
    return (
        <>
             
               
            <Banner></Banner>
            <Special></Special>
            <BrandCategory></BrandCategory>
            <OurApp></OurApp>
        </>
    );
};

export default Home;