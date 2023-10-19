 
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
          path:'/update-product/:id',
          element:<UpdateProduct></UpdateProduct>,
          loader: ({params})=>fetch(`http://localhost:5000/products/${params.id}`)
        },
        {
          path: '/brand-detail/:brand',
          element: <BrandDetail></BrandDetail>,
          loader: ({params})=>fetch(`http://localhost:5000/products`)
          
        },
        {
          path: '/product-detail/:id',
          element: <ProductDetail></ProductDetail>,
          loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
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