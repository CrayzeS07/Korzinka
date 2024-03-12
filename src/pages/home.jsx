import React from "react";
import { Cards } from "../components/cards";
import { Link } from "react-router-dom";

export const Card1 = () => {
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((A) => A.json())
            .then((data) => {
                setData(data);
            });
    }, [])
    return (
        <>
            <div className="container">
                <Link to="/card">
                    <div className=" ml-[1300px] mt-[50px] w-[50px] h-[50px] flex justify-center rounded-full border-[3px] border-[red] bg-[#ffffffed]">
                        <img className="w-[30px] h-[30px] mt-[9px]" src="https://api.korzinka.uz/upload/iblock/f41/ztu31imjpc4m8igoot30pu9awrlhd9d8.png" alt="" />
                    </div>
                </Link>
                <div className='grid grid-cols-2 gap-[20px] mt-[50px]'>
                    {data.map((items) => <Cards key={items.id} image={items.image} title={items.title} description={items.description} price={items.price} />)}
                </div>
            </div>
        </>
    )
}