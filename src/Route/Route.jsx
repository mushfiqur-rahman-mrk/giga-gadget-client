 
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
import PrivetRoute from "./PrivetRoute";
   
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
          element: <PrivetRoute><Addproduct></Addproduct></PrivetRoute>
        },
        {
          path:'/my-cart',
          element: <PrivetRoute><Mycart></Mycart></PrivetRoute>,
          loader: ()=>fetch('https://giga-gadget-server.vercel.app/cart-item')
        },
        {
          path:'/update-product/:id',
          element: <PrivetRoute><UpdateProduct></UpdateProduct></PrivetRoute>,
          loader: ({params}) => fetch(`https://giga-gadget-server.vercel.app/products/${params.id}`)
        },
        {
          path: '/brand-detail/:brand',
          element: <BrandDetail></BrandDetail>,
          loader: ({params})=>fetch(`https://giga-gadget-server.vercel.app/products`)
          
        },
        {
          path: '/product-detail/:id',
          element: <PrivetRoute><ProductDetail></ProductDetail></PrivetRoute>,
          loader:({params})=>fetch(`https://giga-gadget-server.vercel.app/products/${params.id}`)
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