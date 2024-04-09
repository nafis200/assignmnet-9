
import React from 'react';
import { FaHouse } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa6";
import { FaLandmark } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
const Singlecard = ({data}) => {
    const {id,estate_title,segment_name,description,price,area,location,image,facilities,status} = data
    return (
        <div className="card card-side bg-base-100 shadow-xl">
  <figure><img className='w-[300px] h-[200px]' src={image} alt="Movie"/></figure>
  <div className="card-body">
  
    <h2 className="card-title"><span className='flex mb-7 lg:mb-0 md:mb-0'>{id}</span> {estate_title}</h2>
    <h2 className='font-bold flex items-center gap-2'> <span> <FaHouse></FaHouse> </span> {segment_name}</h2>
    <p className='font-extralight'>{description}</p>
    <h2 className='font-bold flex items-center gap-2'> <span> <FaDollarSign></FaDollarSign> </span> {price} <span className='text-red-500'>{status}</span> </h2>
    <h2 className='font-bold flex items-center gap-2'> <span> <FaLandmark></FaLandmark> </span> {area} </h2>

    <h2 className='font-bold flex items-center gap-2'> <span> <IoLocationOutline className=''></IoLocationOutline> </span> {location} </h2>
    
    
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button> 
    </div>
  </div>
</div>
    );
};

export default Singlecard;