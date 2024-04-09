
import {  useLoaderData, useParams } from "react-router";
import { NavLink } from "react-router-dom"

const Carddetail = () => {
    const details = useLoaderData();
    const {id} = useParams()
    const idINt = parseInt(id)
    
    const books = details.filter(book => book.bookId === idINt )
    return (
        <div>
            <h2 className="text-2xl">{idINt}</h2>
        </div>
    );
};

export default Carddetail;