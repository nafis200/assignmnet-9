import { FaHouse } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa6";
import { FaLandmark } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import Facilitiesdetails from "./Facilitiesdetails";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Detail = ({book}) => {
    const {id,estate_title,segment_name,description,price,area,location,image,facilities,status,position} = book
    return (
        <div className="mt-20">
          
        <section className="lg:flex lg:gap-4">

          <div className="lg:flex-1">
             <img src={image} className="lg:w-[300px] lg:h-[300px] w-[200px] h-[200px] ml-10 lg:ml-20" alt="" />
          </div>   

          <div className=" space-y-2 flex-1">
            <p className="lg:text-3xl mt-5 lg:mt-0 ml-10 lg:ml-0 flex items-center gap-2"> <span><FaHouse></FaHouse> </span>  {segment_name}</p>
            <p className="font-bold ml-10 lg:ml-0">{estate_title}</p>
            <hr />
            <p className="font-bold flex items-center gap-2 ml-10 lg:ml-0 mt-4"> <span> <FaDollarSign></FaDollarSign> </span> {price} <span className='text-red-500'>{status}</span></p>
            <hr />
            <p> <span className="lg:text-2xl grid grid-cols-1 lg:ml-0 ml-10 lg:text-3xl md:text-2xl">{description}</span></p>
            <p className=""><span className="text-2xl font-bold mr-5 mt-4 mb-5 ml-10 lg:ml-0">Facilities: </span> <span className=" font-extralight gap-5 items-center mt-1 space-y-4">
                
                {
                   facilities.map(data=> <Facilitiesdetails data={data}></Facilitiesdetails> )
                }
                
               </span></p>
               
              <div className=" space-y-3">
               <p className="mt-5 flex justify-start ml-10 lg:ml-0"> <h2 className='font-bold flex items-center gap-2'> <span> <IoLocationOutline className='text-3xl'></IoLocationOutline> </span> {location} </h2> </p>
               <p className="flex justify-start ml-10 lg:ml-0"> <h2 className='font-bold flex items-center gap-2'> <span> <FaLandmark className="text-3xl"></FaLandmark> </span> {area} </h2> </p>                              

              </div>
             

          </div>
            
        </section>  

        <div className="md:h-[250px] h-[200px] lg:h-[400px] w-full mt-10">
      <MapContainer
        center={[23.8925, 90.4056]}
        zoom={13}
        className="h-full w-full"
        scrollWheelZoom={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[51.505, -0.09]}>
          <Popup></Popup>
        </Marker>
      </MapContainer>
      
    </div>
        
        

       </div>
    );
};

export default Detail;