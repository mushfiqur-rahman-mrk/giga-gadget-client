import  { useContext } from "react";
import ThemeSwitch from "./ThemeSwitch";
import logo from '/src/assets/logo.jpg'
import { Link} from "react-router-dom";
import { AuthContext } from "../../Authentication/Auth";
import swal from "sweetalert";

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
      <div className="hidden sm:block">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
           
          {/* <a className="btn btn-ghost normal-case text-xl">GG</a> */}
          <img src={logo} className="h-14 " alt="" />
          {/* <img src="/src/assets/logo.jpg" alt="" /> */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <div>
            <input
              className="border"
              type="text"
              placeholder="Search by category..."
            />
            <button className="btn">Search</button>
          </div>
        </div>
        <div className="navbar-end">
        <ThemeSwitch></ThemeSwitch>
          <div className="dropdown dropdown-bottom dropdown-end">
            {
              user ? <div onClick={handleLogout}>
              <button className="btn ml-2">Log out</button>
            </div>
            :
            <Link to={'/signup'}>
              <button className="btn ml-2">Log in</button>
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
