import { FaHouse } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa6";
import { FaLandmark } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";

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
            <p className="lg:flex"><span className="text-2xl font-bold mr-5 mt-2 mb-5 ml-10 lg:ml-0">Facilities: </span> <span className="lg:flex font-extralight gap-5 items-center mt-1 space-y-4">
                
                {/* {
                   tags.map(data=> <Booktags data={data}></Booktags>)
                } */}
                
               </span></p>
               
              <div className=" space-y-3">
               <p className="mt-5 flex justify-start ml-10 lg:ml-0"> <h2 className='font-bold flex items-center gap-2'> <span> <IoLocationOutline className='text-3xl'></IoLocationOutline> </span> {location} </h2> </p>
               <p className="flex justify-start ml-10 lg:ml-0"> <h2 className='font-bold flex items-center gap-2'> <span> <FaLandmark className="text-3xl"></FaLandmark> </span> {area} </h2> </p>                
               <p className="flex justify-start ml-10 lg:ml-0"> <span className="font-extralight">Year of Publishing: </span> <span>  {id}</span> </p>                
               <p className="flex justify-start"> <span className="font-extralight ml-10 lg:ml-0">Rating: </span> <span>  {id}</span> </p>                

              </div>
             

          </div>
            
        </section>  
        
       </div>
    );
};

export default Detail;