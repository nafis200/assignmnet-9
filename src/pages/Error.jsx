

import { Helmet } from 'react-helmet';

const Error = () => {
    return (
        <div>
            <Helmet>
               <title>Error page</title>
            </Helmet>
            <h2 className="text-3xl text-center">opps page 404 not found</h2>
        </div>
    );
};

export default Error;