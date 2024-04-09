<div className="card-body">
    <h2 className="card-title mt-9"><span className='flex mb-7 lg:mb-0 md:mb-0'>{id}</span> {estate_title}</h2>
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
    
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button> 
    </div>
  </div>