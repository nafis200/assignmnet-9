
import {  useLoaderData, useParams } from "react-router";

import Detail from "./Detail";
import { Helmet } from 'react-helmet';

const Carddetail = () => {
    const details = useLoaderData();
    const {id} = useParams()
    const idINt = parseInt(id)
    const books = details.filter(book => book.id === idINt )
    
    return (
        <div>
            <Helmet>
                <title>details{id}</title>
            </Helmet>
            {
                books.map(book=> <Detail key={book.id} book={book}></Detail> )
            }
        </div>
    );
};

export default Carddetail;