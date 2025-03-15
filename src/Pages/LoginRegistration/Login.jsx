import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import { useContext } from "react";
import { authcontext } from "../../authprovider/Authprovider";

const Login = () => {
    const location=useLocation();
    const navigate=useNavigate();
    const {signIn}=useContext(authcontext)
    const handlelogin=(e)=>{
        e.preventDefault();
        const form=new FormData(e.currentTarget);
        const email=form.get('email');
        const password=form.get('password')
        signIn(email,password)
        .then(result=>{
            navigate(location?.state&&location.state)
            console.log(result.user);
        })
        .catch(error=>{
            console.error(error)
        })
    }
    return (
        <>
        <Navbar></Navbar>
          <div>
            <div className="h-screen flex items-center flex-col justify-center">
            <h1 className="text-3xl font-bold my-10 text-center ">please Login</h1>
      <form onSubmit={handlelogin} className="md:w-3/4 lg:w-1/2 w-3/4 mx-auto shadow-2xl p-6">
      <fieldset className="fieldset">
          <label className="fieldset-label">Email</label>
          <input type="email" name="email" className="input w-full" placeholder="Email" />
          <label className="fieldset-label">Password</label>
          <input type="password" name="password" className="input w-full" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p className="text-center my-4">Don't have an Account? <Link className="text-blue-600" to={'/register'}>Register</Link></p>
      </form>
    </div>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Login;