

import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
               <title>Dream house</title>
            </Helmet>
            <h2 className="text">This is home</h2>
        </div>
    );
};

export default Home;