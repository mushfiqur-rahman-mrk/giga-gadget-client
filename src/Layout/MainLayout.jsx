 
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../Authentication/Auth';
import { MutatingDots } from 'react-loader-spinner';

const MainLayout = () => {
    const {loading }=useContext(AuthContext)
    if (loading) {
        return <div className="w-full h-screen flex justify-center items-center">
            <MutatingDots 
            height="100"
            width="100"
            color="#43c6ac"
            secondaryColor= '#43c6ac'
            radius='12.5'
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            />
        </div>
      }
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>  
        </>
    );
};

export default MainLayout;