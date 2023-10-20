import Swal from "sweetalert2";

const Mcard = ({ cartItem }) => {
  const { _id, brand,image, price, productName, rating, productType } =
    cartItem || {};
 
    const handleDelete=(id)=>{

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://giga-gadget-server.vercel.app/cart-item/${id}`,{
                    method: 'DELETE',
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                })
              Swal.fire(
                'Deleted!',
                `${productName} has been removed from my cart.`,
                'success'
              )
            }
          })


    
    }

  return (
    <div>
      <div className="md:flex shadow-lg mt-10 items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50 border">
        <div className="md:w-4/12 2xl:w-1/4 w-full">
          <img
            src={image}
            alt="Black Leather Bag"
            className="h-60 object-center object-contain md:block hidden"
          />
          <img
            src={image}
            alt="Black Leather Bag"
            className="md:hidden w-full h-60 object-center object-contain"
          />
        </div>

        <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
          <p className="text-xs leading-3 text-gray-800 dark:text-white md:pt-0 pt-4">
            {productType}
          </p>
          <div className="flex items-center justify-between w-full pt-1">
            <p className="text-base font-black leading-none text-gray-800 dark:text-white">
              {productName}
            </p>
            <select
              aria-label="Select quantity"
              className="py-2 px-1 border border-gray-200 mr-6 focus:outline-none dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
            >
              <option>01</option>
              <option>02</option>
              <option>03</option>
            </select>
          </div>

          <p>Price: ${price}</p>
          <p>Brand: {brand}</p>

          <div className="pt-5">
            <p onClick={()=>handleDelete(_id)} className="text-xs leading-3 underline text-red-500  cursor-pointer">
              Remove
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mcard;
