

import { Helmet } from 'react-helmet';
import Swipper from '../../swipper/Swipper';
import {useLoaderData } from 'react-router-dom';
import Cards from '../../cards/Cards';

const Home = () => {
    const load = useLoaderData()
    return (
        <div className='container mx-auto'>
            <Helmet>
               <title>Dream house</title>
            </Helmet>
            <Swipper></Swipper>
            
            <Cards load={load}></Cards>
            
        </div>
    );
};

export default Home;