import  { useContext } from "react";
import ThemeSwitch from "./ThemeSwitch";
import { Link} from "react-router-dom";
import { AuthContext } from "../../Authentication/Auth";
import swal from "sweetalert";
import logo1 from '/src/assets/footer-logo.png'
import userimg from "/public/user.png"

const Topbar = () => {
  const {user,logOut}=useContext(AuthContext)
  console.log(user);
  
  const handleLogout=()=>{
    logOut()
    .then(()=>{
      console.log('logged out successfully');
      swal("Logged out successfully", "", "success");
    })
    .catch(error=>console.log(error))
  }
  return (
    <>
      <div className="hidden sm:block border-b">
      <div className="navbar bg-base-100  dark:bg-slate-700">
        <div className="navbar-start">
           
          {/* <a className="btn btn-ghost normal-case text-xl">GG</a> */}
          <img src={logo1} className="h-14 " alt="" />
          {/* <img src="/src/assets/logo.jpg" alt="" /> */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <div>
            <input
              className="border focus:border-cyan-500 outline-none py-1 px-3 rounded-lg"
              type="text"
              placeholder="Search by category..."
            />
            <button className="px-2 py-1 bg-cyan-500 dark:bg-blue-500 dark:text-white rounded-lg ml-2">Search</button>
          </div>
        </div>
        <div className="navbar-end">
        <ThemeSwitch></ThemeSwitch>
        <div>

        <div>
        {
          user ? <>
          
          <div className="dropdown dropdown-end">
          <label tabIndex={0} className="m-1 w-10 h-10">
          {/* <img className="rounded-full" src={user.photoURL} alt="" /> */}
            
            {
                user?.photoURL ? <img className="rounded-full w-10 h-10" src={user.photoURL} alt="" />
                :
                <img src={userimg} className="w-10 h-10 rounded-full" alt="" />
              }
             
            </label>
           
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li className="">{user.displayName ? user.displayName : 'no name found'}</li>
              <li>{user.email}</li>
          </ul>
        </div>
          
          </>

          :
          <div></div>
        }
        </div>
        


        </div>
          <div className="dropdown dropdown-bottom dropdown-end">
            {
              user ? <div onClick={handleLogout}>
              <button className="px-2 py-1 bg-cyan-500 dark:bg-blue-500 dark:text-white rounded-lg ml-2">Log out</button>
            </div>
            :
            <Link to={'/signup'}>
              <button className="px-2 py-1 bg-cyan-500 dark:bg-blue-500 dark:text-white rounded-lg ml-2">Log in</button>
            </Link>

            }
          </div>
          
        </div>
      </div>
      </div>
    </>
  );
};

export default Topbar;
