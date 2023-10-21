 
 
import img from '/src/assets/z590 auras.jpg';

const Banner = () => {
  return (
    <>
       <div>
          <div>
          <div className='grid grid-cols-2 w-full'>
            <div className="flex flex-col justify-center pl-10">
                <h1 className='font-bold text-lg lg:text-4xl text-black dark:text-white'>Letest <br /> <span className="font-extrabold text-cyan-500 dark:text-blue-500">TECH GADGET</span><br /> At best price </h1>
                <button className='px-2 dark:text-white bg-cyan-500 dark:bg-blue-500 py-1 mt-10 rounded-lg text-black w-2/4'>Buy now</button>
            </div>
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-bl-[200px]">
          <img
            src={img}
           
            className="mx-auto"
          />
          </div>
            </div>
          </div>
       </div>
    </>
  );
};

export default Banner;
