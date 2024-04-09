
import { Helmet } from 'react-helmet';

const User = () => {
    return (
        <div>
            <Helmet>
               <title>User page</title>
            </Helmet>
           <h2 className="text-2xl">users</h2> 
        </div>
    );
};

export default User;