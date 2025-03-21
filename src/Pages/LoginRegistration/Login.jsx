import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../footer/Footer";
import { useContext } from "react";
import { authcontext } from "../../authprovider/Authprovider";
import { toast,ToastContainer } from "react-toastify";
const Login = () => {
    const location=useLocation();
    const navigate=useNavigate();
    const {signIn,loginwithgoogle,loginwithgithub}=useContext(authcontext)
    const handlelogin=(e)=>{
        e.preventDefault();
        const form=new FormData(e.currentTarget);
        const email=form.get('email');
        const password=form.get('password')
        signIn(email,password)
        .then(result=>{
             toast.success('You login successfully');
        setTimeout(() => navigate(location?.state ? location.state : '/'), 2000); 
            console.log(result.user);
            e.target.reset();
        })
        .catch(error=>{
            toast.error('Incorrect UserName')
            console.error(error)
        })
    }
    const handlegoogle=()=>{
        loginwithgoogle()
        .then(result=>{
            toast.success('You login successfully')
            setTimeout(() => navigate(location?.state ? location.state : '/'), 2000); 
            console.log(result.user);
        })
        .catch(error=>{
            toast.error('Incorrect UserName')
            console.error(error)
        })
    }
    const handlegithub=()=>{
        loginwithgithub()
        .then(result=>{
            toast.success('You login successfully')
            setTimeout(() => navigate(location?.state ? location.state : '/'), 2000); 
            console.log(result.user);
        })
        .catch(error=>{
            toast.error('Incorrect UserName')
            console.error(error)
        })
    }
    return (
        <>
        <Navbar></Navbar>
          <div  className="h-screen flex items-center flex-col justify-center">
          <h1 className="text-3xl font-bold my-10 text-center ">please Login</h1>
            <div className="md:w-3/4 lg:w-1/2 w-3/4 mx-auto shadow-2xl p-6">
      <form onSubmit={handlelogin}>
      <fieldset className="fieldset">
          <label className="fieldset-label">Email</label>
          <input type="email" name="email" className="input w-full" placeholder="Email" />
          <label className="fieldset-label">Password</label>
          <input type="password" name="password" className="input w-full" placeholder="Password" />
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
      <div className="my-4 flex md:flex-row flex-col justify-between gap-4">
        <button onClick={handlegoogle} className="btn  btn-outline btn-success">Login with google</button>
        <button onClick={handlegithub} className="btn  btn-outline btn-success">Login with github</button>
        </div>
        <p className="text-center my-4">Don't have an Account? <Link className="text-blue-600" to={'/register'}>Register</Link></p>
    </div>
        </div>
        <Footer></Footer>
        <ToastContainer />
        </>
    );
};

export default Login;