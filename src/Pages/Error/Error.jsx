import { Link } from 'react-router-dom';
import errorImg from '/src/assets/error.jpg' 
 

const Error = () => {
    return (
        <>
              <div className="h-screen flex flex-col justify-center items-center">
                    <div className='h-[70vh] w-[80vh]'>
                    <img src={errorImg} className='object-cover object-center' alt="" />
                    
                    <Link to={'/'}>
                        <div className='flex justify-center'>
                        <button className='btn'>Go To Home</button>
                        </div>
                    </Link>
                    </div>
              </div>
        </>
    );
};

export default Error;