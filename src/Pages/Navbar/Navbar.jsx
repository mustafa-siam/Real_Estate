import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { authcontext } from "../../authprovider/Authprovider";
import 'animate.css';

const Navbar = () => {
  const {user,logout}=useContext(authcontext)
  const handlelogout=()=>{
    logout()
  }
    const navlinks=<>
    <li><NavLink to={'/'}>Home</NavLink></li>
    <li><NavLink to={'/about'}>About</NavLink></li>
    <li><NavLink to={'/blog'}>Blog</NavLink></li>
    {
      user&&<li><NavLink to={'/userprofile'}>User Profile</NavLink></li>
    }
    {
      user&&<li><NavLink to={'/editprofile'}>Update Profile</NavLink></li>
    }
    </>
    return (
<div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu font-bold menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {navlinks}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl animate__heartBeat"><Link to={'/'}>HomeNest</Link></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu  menu-horizontal px-1">
      {navlinks}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user? (<div className="navbar-end"><img className=" mr-5 border-2 border-b-gray-950 md:w-12 w-16 h-12 rounded-[45%]" src={user.photoURL} alt="" /><button className="btn" onClick={handlelogout}>LogOut</button></div>): (<div className="navbar-end"><img className=" pr-5" src="/src/assets/user.png" alt="" /><Link to={'/login'}><button className="btn">Login</button></Link></div>)
    }
  </div>
  </div>
    );
};

export default Navbar;