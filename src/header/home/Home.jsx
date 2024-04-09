

import { Helmet } from 'react-helmet';
import Swipper from '../../swipper/Swipper';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Helmet>
               <title>Dream house</title>
            </Helmet>
            <h2 className="text">This is home</h2>
            <Swipper></Swipper>
        </div>
    );
};

export default Home;