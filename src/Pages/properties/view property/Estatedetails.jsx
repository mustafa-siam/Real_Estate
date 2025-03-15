import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../footer/Footer";
import { FaLocationDot } from "react-icons/fa6";
import Facility from "./Facility/Facility";

const Estatedetails = () => {
    const estates=useLoaderData()
    const {id}=useParams()
    const idint=parseInt(id);
    const estate=estates.find(estate=>estate.id==idint)
    const {image,estate_title,location,segment_name,description,price,status,area,facilities}=estate;
    console.log(estate)
    return (
        <div>
            <Navbar></Navbar>
            <div className="space-y-8">
              <div className="h-screen flex items-end w-full bg- bg-cover bg-center bg-no-repeat"style={{ backgroundImage: `url(${image})`}}>
                <div className="flex-col justify-end pl-4  ">
                    <h2 className="text-[#ee2d67] uppercase text-5xl font-normal">{estate_title}</h2>
                    <p className="text-2xl flex items-center gap-2 my-3 text-white"><FaLocationDot />{location}</p>
                </div>           
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">{segment_name}</h2>
                <p className="text-lg">{description}</p>
              </div>
              <div className="grid grid-cols-2 gap-8 p-3">
                <div>
                    <p className="text-[#ee2d67] text-xl font-bold">Area</p>
                    <p>{area}</p>
                </div>
                <div>
                    <p className="text-[#ee2d67] text-xl font-bold">Status</p>
                    <p>{status}</p>
                </div>
                <div>
                    <p className="text-[#ee2d67] text-xl font-bold">Project type</p>
                    <p>Residential</p>
                </div>
                <div>
                    <p className="text-[#ee2d67] text-xl font-bold">Price</p>
                    <p>{price}</p>
                </div>
                <div>
                    <p className="text-[#ee2d67] text-xl font-bold">Project Status</p>
                    <p>On-Going</p>
                </div>
                <div>
                    <p className="text-[#ee2d67] text-xl font-bold">Location</p>
                    <p>{location}</p>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold pb-3">Facility</h2>
                <div>
                <ul className="list-disc pl-6">
                        {facilities.map((facility, idx) => (
                            <li key={idx} className="text-lg font-medium pb-2">{facility}</li>
                        ))}
                    </ul>
                </div>
              </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Estatedetails;