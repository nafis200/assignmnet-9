import Singlecard from "./Singlecard";



const Cards = ({load}) => {
    return (
        <div className="">
            {
                load.map(data=> <Singlecard key={data.id} data={data} ></Singlecard> )
            }
        </div>
    );
};

export default Cards;