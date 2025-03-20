import { updateProfile } from "firebase/auth";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authcontext } from "../../authprovider/Authprovider";
import { toast } from "react-toastify";

const Editprofile = () => {
    const {user}=useContext(authcontext)
    const navigate=useNavigate();
    const handleupdateProfile=(e)=>{
        e.preventDefault();
        const form=new FormData(e.currentTarget);
        const name=form.get('name');
        const photourl=form.get('photourl');
        updateProfile(user,{
            displayName:name,
            photoURL:photourl,
        })
        toast.success("Profile updated successfully!");
        setTimeout(() =>navigate('/userprofile'), 2000);
    }
    return (
        <div className="flex justify-center h-screen items-center bg-[#f5f5f5]">
                  <form onSubmit={handleupdateProfile} className="md:w-3/4 lg:w-1/2 w-3/4 mx-auto  shadow-2xl p-6">
      <fieldset className="fieldset">
      <label className="fieldset-label">Your Name</label>
      <input type="text" name="name" className="input w-full" placeholder="username" />
      <label className="fieldset-label">Your Photo</label>
      <input type="text" name="photourl" className="input w-full" placeholder="Photo Url" />
          <button className="btn btn-neutral mt-4">save changes</button>
        </fieldset>
      </form>

        </div>
    );
};

export default Editprofile;