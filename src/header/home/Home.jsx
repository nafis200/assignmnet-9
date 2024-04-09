

import { Helmet } from 'react-helmet';
import Swipper from '../../swipper/Swipper';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Helmet>
               <title>Dream house</title>
            </Helmet>
            <Swipper></Swipper>
        </div>
    );
};

export default Home;