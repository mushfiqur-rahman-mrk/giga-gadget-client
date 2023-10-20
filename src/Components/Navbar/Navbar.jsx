import React from 'react';
import Topbar from './Topbar';
import Mobilenav from './Mobilenav';

const Navbar = () => {
    return (
        <>
            
            <div className=''>
            <Topbar></Topbar>  
            </div> 
            <Mobilenav></Mobilenav>
        </>
    );
};

export default Navbar;