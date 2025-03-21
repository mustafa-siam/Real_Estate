import React, { useContext } from 'react';
import { authcontext } from '../../authprovider/Authprovider';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/Footer';
import { Helmet } from 'react-helmet-async';

const Userprofile = () => {
    const {user}=useContext(authcontext)
    console.log(user.photoURL)
    return (
      <div>
        <Helmet>
          <title>HomeNest | Userprofile</title>
        </Helmet>
        <Navbar></Navbar>
        <div className='flex h-screen justify-center items-center w-2/3 w-auto'>
<div className="card bg-base-100  shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={user.photoURL}
      alt="profile pic"
      className="rounded-xl w-96" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{user.displayName}</h2>
    <p>Email: {user.email}</p>
    <div className="card-actions">
        <Link to={'/editprofile'}><button className="btn btn-primary">Edit profile</button></Link>    
    </div>
  </div>
</div>
</div>
        <Footer></Footer>
      </div>
    );
};

export default Userprofile;