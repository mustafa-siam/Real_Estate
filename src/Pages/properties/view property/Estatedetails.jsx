import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../footer/Footer";
import { FaLocationDot } from "react-icons/fa6";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Estatedetails = () => {
    const estates = useLoaderData();
    const { id } = useParams();
    const idint = parseInt(id);
    const estate = estates.find((estate) => estate.id === idint);

    const { image, estate_title, location, segment_name, description, price, status, area, facilities } = estate;

    const [position, setPosition] = useState([23.8103, 90.4125]); // Default to Dhaka

    useEffect(() => {
        fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${location}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.length > 0) {
                    setPosition([parseFloat(data[0].lat), parseFloat(data[0].lon)]);
                }
            });
    }, [location]);

    return (
        <div>
            <Navbar />
            <div className="space-y-8">
                <div className="w-full flex flex-col items-end">
                    <img src={image} className="w-full md:h-[500px] h-96" alt={estate_title} />
                    <div className="w-full p-4 flex flex-col justify-end bg-black/30">
                        <h2 className="text-[#ee2d67] uppercase text-4xl sm:text-5xl font-normal">{estate_title}</h2>
                        <p className="text-xl sm:text-2xl flex items-center gap-2 text-white">
                            <FaLocationDot /> {location}
                        </p>
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
                <p className="text-[#ee2d67] text-xl font-bold">Location</p>
                <p>{location}</p>
                </div>

                <div>
                    <p className="text-[#ee2d67] text-xl font-bold">Project Status</p>
                    <p>On-Going</p>
                </div>
                    <div>
                        <p className="text-[#ee2d67] text-xl font-bold">Price</p>
                        <p>{price}</p>
                    </div>
                </div>

                <div>
                    <h2 className="text-3xl font-bold pb-3">Facilities</h2>
                    <ul className="list-disc pl-6">
                        {facilities.map((facility, idx) => (
                            <li key={idx} className="text-lg font-medium pb-2">{facility}</li>
                        ))}
                    </ul>
                </div>
                <div className="py-4">
                    <h2 className="text-3xl font-bold pb-3">Location</h2>
                    <MapContainer center={position} zoom={13} style={{ height: "300px", width: "60%" }}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; OpenStreetMap contributors' />
                        <Marker position={position}>
                            <Popup>{location}</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Estatedetails;
