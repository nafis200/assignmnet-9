import Singlecard from "./Singlecard";



const Cards = ({load}) => {
    return (
        <div className="mt-20 grid lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 lg:space-y-10 space-y-5 lg:ml-4 md:ml-[200px]">
            {
                load.map(data=> <Singlecard key={data.id} data={data} ></Singlecard> )
            }
        </div>
    );
};

export default Cards;