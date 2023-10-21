import React from 'react';
// import logo from '/src/assets/logo.jpg'
import logo from '/src/assets/footer-logo.png'
import { AiFillTwitterCircle} from "react-icons/ai";
import { BsFacebook,BsYoutube } from "react-icons/bs";

const Footer = () => {
    return (
        <>
            <div className='dark:bg-[#141b2f]'>
            <footer className='grid grid-cols-1 lg:grid-cols-3 dark:text-white justify-center items-center  max-w-6xl mx-auto pt-20 pb-5'>
                <div>
                    <img src={logo} className='w-60 mx-auto' alt="" />
                    <p className='pl-10 text-center dark:text-white'>Lorem, ipsum dolor.</p>
                    <div className='flex flex-wrap px-2 ml-8 gap-3 items-center justify-center'>
                    <AiFillTwitterCircle className='text-2xl text-blue-500'></AiFillTwitterCircle>
                    <BsFacebook className='text-xl text-blue-800'></BsFacebook>
                    <BsYoutube className='text-2xl text-red-600'></BsYoutube>
                    </div>
                </div>
                <div className='grid grid-cols-2 justify-center items-center text-center pt-5'>
                    <div>
                        <h1 className='font-semibold text-lg'>Get to Know Us</h1>
                        <hr className='h-1 w-10 border-none rounded-full bg-black mt-2 dark:bg-blue-500 mb-2 mx-auto'></hr>
                        <ul className='text-md'>
                            <li>About Giga Gadget</li>
                            <li>Blog</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className='font-semibold text-lg'>Legal</h1>
                        <hr className='h-1 w-10 rounded-full bg-black border-none mt-2 dark:bg-blue-500 mb-2 mx-auto'></hr>
                        <ul className='text-md'>
                            <li>Tearms & condition</li>
                            <li>Return policy</li>
                            <li>Cookie policy</li>
                        </ul>
                    </div>
                </div>
                <div className='space-y-2 pt-5 flex flex-col justify-center items-center'>
                     <h1 className='text-xl font-semibold text-center'>Subcribe to our Newsletter</h1>
                     <div className=''>
                     <p className='text-center sm:text-left'>Your email</p>
                     <input type="text" name="" placeholder='abc@email.com' className='border w-60 py-1 px-3 rounded-xl ' id="" />
                     <button className='px-2 dark:text-white text-black py-2 ml-2 bg-cyan-500 dark:bg-blue-500 rounded-xl'>Subcribe</button>
                     </div>
                </div>

            </footer>

            <div className="bg-white dark:bg-[#141b2f]">
    <div className="container mx-auto py-4 px-5 flex flex-wrap justify-center flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">© 2023 Giga Gadget™ is a registered trademark. All Rights Reserved.
      </p>
       
    </div>
  </div>
            </div>
            
        </>
    );
};

export default Footer;