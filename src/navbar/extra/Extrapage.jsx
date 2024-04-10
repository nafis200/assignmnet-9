
import React from 'react';
import Marquee from "react-fast-marquee";
import moment from 'moment';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Helmet } from 'react-helmet';
const Extrapage = () => {
    return (
        <div>
            <Helmet>
               <title>Office page</title>
            </Helmet>
            <div className="mt-5">
       <p className="text-center lg:text-2xl md:text-2xl text-xl mb-10">{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
      <div className="flex">
        <button className="btn btn-primary ml-10">Notice</button>
        <Marquee className="text-red-600 font-bold lg:text-3xl md:text-2xl text-xl">
          office is open from 10am to 5pm
        </Marquee>
      </div>
      <div>
        <p className="text-center mt-5 font-bold text-2xl">location of office:</p>
        <p className="text-center text-xl font-extralight mt-5">thana: <span className="text-blue-500 font-bold ml-2">tongi</span> </p>
        <p className="text-center text-xl font-extralight mt-5">village: <span className="text-purple-500 font-bold">gazipura</span> </p>
        <p className="text-center text-xl font-extralight mt-5 ml-2">Address:<span className="text-red-500 ml-2 font-bold">gazipura super market <br />opposite of masco garments <br />Dhaka mymensingh highway </span> </p>

        <div className="md:h-[250px] h-[200px] lg:h-[400px] w-3/4 mt-10 container mx-auto">
        <h2 className="text-2xl text-center font-bold mb-5">See the location</h2>
      <MapContainer
        center={[23.8940,90.4055]}
        zoom={13}
        className="h-full w-full"
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[23.8940,90.4055]}>
          <Popup></Popup>
        </Marker>
      </MapContainer>
       
      </div>
      </div>
      </div>
        </div>
    );
};

export default Extrapage;
