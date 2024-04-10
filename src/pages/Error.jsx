import { Helmet } from 'react-helmet';
import { FaSadCry } from "react-icons/fa";

const Error = () => {
    return (
        <div>
            <Helmet>
               <title>Error page</title>
            </Helmet>
            <h2 className="text-3xl text-center mt-20 flex items-center justify-center">  <FaSadCry className='text-7xl'></FaSadCry> opps page 404 not found sorry!!!!!</h2>
            
        </div>
    );
};

export default Error;