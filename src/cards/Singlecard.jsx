
import React from 'react';
import { FaHouse } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa6";
import { FaLandmark } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import Facilities from './Facilities';
import { NavLink } from "react-router-dom";
const Singlecard = ({data}) => {
    const {id,estate_title,segment_name,description,price,area,location,image,facilities,status} = data
    return (
        <div className="card w-96 bg-base-100 shadow-xl ml-4">
        <figure><img className='' src={image} alt="Shoes" /></figure>
        <div className="card-body">
    <h2 className="card-title mt-9"><span className='flex mb-7 lg:mb-7 md:mb-7'>{id}</span> {estate_title}</h2>
    <h2 className='font-bold flex items-center gap-2'> <span> <FaHouse></FaHouse> </span> {segment_name}</h2>
    <p className='font-extralight'>{description}</p>
    <h2 className='font-bold flex items-center gap-2'> <span> <FaDollarSign></FaDollarSign> </span> {price} <span className='text-red-500'>{status}</span> </h2>
    <h2 className='font-bold flex items-center gap-2'> <span> <FaLandmark></FaLandmark> </span> {area} </h2>

    <h2 className='font-bold flex items-center gap-2'> <span> <IoLocationOutline className=''></IoLocationOutline> </span> {location} </h2>
     
     <span className=''> <span className='font-bold ml-1'>facilities:</span> <p className='grid grid-cols-1'>
         {
            facilities.map(data=> <Facilities data={data}></Facilities> )
         }
    </p> </span>
    
    <div className="card-actions mt-2">
      <NavLink to={`/detail/${id}`}> <button className='btn btn-primary'>View details</button> </NavLink>
    </div>
  </div>
      </div>
    );
};

export default Singlecard;