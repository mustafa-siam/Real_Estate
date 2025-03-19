import React, { useContext } from 'react';
import { authcontext } from '../../authprovider/Authprovider';

const Userprofile = () => {
    const {user}=useContext(authcontext)
    const displayName = user.displayName;
    console.log(displayName)
    return (
        <div>
           
        </div>
    );
};

export default Userprofile;