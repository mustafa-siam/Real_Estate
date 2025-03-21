import { useLoaderData } from "react-router-dom";
import Banner from "./banner/Banner";
import Footer from "./footer/Footer";
import Navbar from "./Navbar/Navbar";
import Properties from "./properties/properties";
import Service from "./service/Service";
import { Helmet } from "react-helmet-async";

const Home = () => {
    const estates=useLoaderData();
    return (
        <div className="space-y-16">
            <Helmet>
                <title>HomeNest | Home</title>
            </Helmet>
            <Navbar></Navbar>
            <Banner></Banner>
            <Service></Service>
            <Properties estates={estates}></Properties>
            <Footer></Footer>
        </div>
    );
};

export default Home;