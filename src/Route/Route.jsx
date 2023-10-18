 
import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from '../Layout/MainLayout';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
import Signup from "../Components/Signup/Signup";
import Login from "../Components/Login/Login";
import Addproduct from "../Pages/AddProduct/Addproduct";
import Mycart from "../Pages/Mycart/Mycart";
import UpdateProduct from "../Pages/AddProduct/UpdateProduct";
import BrandDetail from "../Components/BrandDetail/BrandDetail";
import ProductDetail from "../Components/ProductDetail/ProductDetail";
   
  const route = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      // errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path:'/add-product',
          element: <Addproduct></Addproduct>
        },
        {
          path:'/my-cart',
          element:<Mycart></Mycart>
        },
        {
          path:'/update-product',
          element:<UpdateProduct></UpdateProduct>
        },
        {
          path: '/brand-detail',
          element: <BrandDetail></BrandDetail>
        },
        {
          path: '/product-detail',
          element: <ProductDetail></ProductDetail>
        },
        {
          path:'/signup',
          element: <Signup></Signup>
        },
        {
          path:'/login',
          element: <Login></Login>
        }
      ]
    },
  ]);


 

export default route;