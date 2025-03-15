import { FaLocationDot } from "react-icons/fa6";
import { TbCoinTaka } from "react-icons/tb";
import { Link } from "react-router-dom";
const Estate = ({estate}) => {
  const {image,details,location,status,price,area,id}=estate
    return (
             <div className="card bg-base-100  shadow-2xl">
  <figure>
    <img
      src={image} className="h-60 w-full"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title font-bold">{estate.estate_title}</h2>
    <p>{details}</p>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-xl flex items-center gap-2 my-3"><FaLocationDot />{location}</p>
        <p className="text-xl flex items-center gap-2"><TbCoinTaka /> {price}</p>
      </div>
      <div>
        <p className="text-lg border-b-2 border-teal-500 px-2 my-3 rounded-lg ">For {status}</p>
        <p className="text-lg border-b-2 border-teal-500 px-2 rounded-lg ">{area}</p>
      </div>
    </div>
    <div className="card-actions justify-end my-3">
      <Link to={`/estatedetails/${id}`}><button className="btn btn-primary w-full text-lg">View Property</button></Link>
    </div>
  </div>
</div>
    );
};

export default Estate;