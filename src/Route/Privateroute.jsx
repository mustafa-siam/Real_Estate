import { useContext } from "react";
import { authcontext } from "../authprovider/Authprovider";
import { Navigate, useLocation } from "react-router-dom";

const Privateroute = ({children}) => {
    const location=useLocation();
    const {user,loader}=useContext(authcontext);
    if(loader){
        return <span className="loading loading-spinner loading-xl"></span>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default Privateroute;