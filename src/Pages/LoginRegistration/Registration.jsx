import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import { useContext, useState } from "react";
import { authcontext } from "../../authprovider/Authprovider";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { toast,ToastContainer } from "react-toastify";
const Registration = () => {
    const {creatuser}=useContext(authcontext)
    const [showpass,setshowpass]=useState(false);
    const navigate=useNavigate();
    const handleregister=(e)=>{
        e.preventDefault();
        const form=new FormData(e.currentTarget);
        const name=form.get('name');
        const photourl=form.get('photourl');
        const email=form.get('email');
        const password=form.get('password');
        const regex=/^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if(!regex.test(password)){
            toast.error("Password must have an uppercase, lowercase, and at least 6 characters.");
            return;
        }
        creatuser(email,password)
        .then(result=>{
            console.log(result.user)
            toast.success("Registration successful!");
            setTimeout(() =>navigate('/login') , 2000);
        })
        .catch(error=>{
            console.error(error)
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="h-screen flex items-center flex-col justify-center">
            <h1 className="text-3xl font-bold my-10 text-center ">please Register</h1>
      <form onSubmit={handleregister} className="md:w-3/4 lg:w-1/2 w-3/4 mx-auto shadow-2xl p-6">
      <fieldset className="fieldset">
      <label className="fieldset-label">Your Name</label>
      <input type="text" name="name" className="input w-full" placeholder="username" />
      <label className="fieldset-label">Your Photo</label>
      <input type="text" name="photourl" className="input w-full" placeholder="Photo Url" />
          <label className="fieldset-label">Email</label>
          <input type="email" name="email" className="input w-full" placeholder="Email" />
          <label className="fieldset-label">Password</label>
          <div className="flex items-center relative">
          <input type={showpass?'text':'password'} name="password" className="input w-full" placeholder="Password" />
          <span onClick={()=>setshowpass(!showpass)} className="text-2xl absolute right-2">{showpass?<IoEye />:<IoEyeOff />}</span>
          </div>
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        <p className="text-center my-4">Already have an Account? <Link className="text-blue-600" to={'/login'}>Login</Link></p>
      </form>
    </div>
    <Footer></Footer>
    <ToastContainer />
        </div>
    );
};

export default Registration;