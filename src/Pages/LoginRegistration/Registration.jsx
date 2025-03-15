import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import { useContext } from "react";
import { authcontext } from "../../authprovider/Authprovider";

const Registration = () => {
    const {creatuser}=useContext(authcontext)
    const handleregister=(e)=>{
        e.preventDefault();
        const form=new FormData(e.currentTarget);
        const name=form.get('name');
        const photourl=form.get('photourl');
        const email=form.get('email');
        const password=form.get('password');
        creatuser(email,password)
        .then(result=>{
            console.log(result.user)
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
          <input type="password" name="password" className="input w-full" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p className="text-center my-4">Already have an Account? <Link className="text-blue-600" to={'/login'}>Login</Link></p>
      </form>
    </div>
    <Footer></Footer>
        </div>
    );
};

export default Registration;