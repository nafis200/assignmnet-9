
import { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { AuthContext } from '../provider/Authprovider';

const User = () => {
    const {users} = useContext(AuthContext)
    let name = ""
    let emails = ""
    let verified = ""
    let images = ""
    let id = ""
    if(users){
        const {displayName,email,emailVerified,photoURL,uid} = users
        name = displayName
        emails = email 
        verified = emailVerified
        images = photoURL 
        id = uid
        
    }
    return (
        <div>
            <Helmet>
               <title>User page</title>
            </Helmet>
           <div className='container mx-auto'>
             
             <img src={images} className='md:ml-[250px] lg:ml-[700px] ml-[50px] mt-10 rounded-full' alt="" />
             <h2 className="lg:text-3xl md:text-2xl text-xl font-bold md:ml-[200px] lg:ml-[620px] ml-[20px] mt-5 text-blue-400">
               <span>Name:</span>  {name}</h2>
             <h2 className="lg:text-3xl md:text-2xl text-xl font-bold md:ml-[200px] lg:ml-[620px] ml-[20px] mt-5 text-red-600">
               <span>Email:</span> {emails}</h2>
               <h2 className="lg:text-3xl md:text-2xl text-xl font-bold md:ml-[200px] lg:ml-[620px] ml-[20px] mt-5 text-purple-400">
               <span>Verified:</span>  {verified ? <span>true</span> : <span>false</span> }</h2>
               <h2 className="lg:text-3xl md:text-2xl text-xl font-bold md:ml-[200px] lg:ml-[620px] ml-5 mt-5 ">
               <span>Id:</span>  {id}</h2>

            </div> 
        </div>
    );
};

export default User; 