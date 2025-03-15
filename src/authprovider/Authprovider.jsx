import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase_config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, } from "firebase/auth";
export const authcontext=createContext();
const Authprovider = ({children}) => {
    const [user,setuser]=useState(null);
    const [loader,setloader]=useState(true);
    const auth=getAuth(app);
    const creatuser=(email,password)=>{
        setloader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn=(email,password)=>{
        setloader(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout=()=>{
        setloader(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentuser=>{
             setuser(currentuser);
             setloader(false)
        })
        return ()=>{
            unsubscribe();
        }
    },[])
    const authinfo={
        creatuser,
        signIn,
        logout,
        user,
        loader
    }
    return (
        <authcontext.Provider value={authinfo}>
            {children}
        </authcontext.Provider>
    );
};

export default Authprovider;