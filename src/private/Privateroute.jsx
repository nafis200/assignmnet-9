import { useContext } from "react";
import { AuthContext } from "../provider/Authprovider";
import { Navigate } from "react-router";





const Privateroute = ({children}) => {
    const {users,loading} = useContext(AuthContext)
    if(loading){
        return <span className="loading loading-spinner text-error lg:text-4xl md:text-3xl text-2xl lg:ml-[700px] md:ml-[400px] ml-[200px] mt-10"></span>
    }
    if(users){
         return children
    }
    return (
        <Navigate to="/login"></Navigate>
    );
};

export default Privateroute;