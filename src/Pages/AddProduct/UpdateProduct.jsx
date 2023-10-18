import React from 'react';

const UpdateProduct = () => {
    const handleSubmit=e=>{

    }

    return (
        <>
            <div className="grid grid-cols-1 my-20 gap-8 px-5 max-w-6xl mx-auto justify-center items-center" data-aos="fade-up"
     data-aos-duration="3000">
         
        <div className="">
          <h2 className="mb-4 sm:text-4xl text-3xl tracking-tight font-extrabold text-center ">
             Update 
          </h2>
          <p className="font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Feel Free To Contact Us NOW! Plan Your Event With Our Premium
            Consultation And It's Free!
          </p>
          <div>
            <div className="bg-gray-200 mt-5 rounded-xl shadow-lg">
              <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <div>
                    <label
                      for="subject"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Product Name
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="Product Name"
                      name='productName'
                      required
                    />
                  </div>

                  <div>
                    <label
                       
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Product Price
                    </label>
                    <input
                      type="text"
                      id="email"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="Brand Name"
                      name='price'
                      required
                    />
                  </div>
                  </div>


                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <div>
                    <label
                      for="subject"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Product type
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="Phone/Tv/Monitor"
                      name='type'
                      required
                    />
                  </div>

                  <div>
                    <label
                      for="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Product image URL
                    </label>
                    <input
                      type="text"
                      id="email"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="Image url"
                      name='image'
                      required
                    />
                  </div>
                  </div>


                  <div className="grid grid-cols-1 gap-10">
                  <div>
                    <label
                      for="subject"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Product Rating
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                      placeholder="product rating"
                      name='rating'
                      required
                    />
                  </div>

                  </div>

 


                  <div className="grid grid-cols-1 gap-10">
                   
                    <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Product Brand
                  </label>
                  <select
                    id="countries"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Choose Your Product Brand</option>
                    <option value="apple">Apple</option>
                    <option value="samsung">Samsung</option>
                    <option value="xiomi">
                      Xiomi
                    </option>
                    <option value="giggabite">
                      Giggabite
                    </option>
                    <option value="asus">Asus</option>
                    <option value="sony">Sony</option>
                     
                     
                  </select>
                    </div>
 
                  </div>


  

                  <div className="sm:col-span-2">
                    <label
                      for="message"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                    >
                      Product Detail
                    </label>
                    <textarea
                      id="message"
                      rows="6"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Enter your product detail . Word limit 200 word "
                    ></textarea>
                  </div>

                 
                  <button  className="px-5 w-full text-white font-semibold bg-gradient-to-r from-orange-500 to-red-600  hover:ease-in py-3 transition duration-150 hover:text-black rounded-xl shadow-lg mx-auto md:w-1/2 ">Submit</button>
                </form>
                
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    );
};

export default UpdateProduct;