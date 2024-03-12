import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { StoreCard } from "../components/storCard";

export const Cards12 = () => {
    const { prodacts } = useSelector((states) => states.card);
    return (
        <>
            <div className="container">
                <Link to="/card">
                    <div className=" ml-[1294px] mt-[50px] w-[50px] h-[50px] flex justify-center rounded-full border-[3px] border-[red] bg-[#ffffffed]">
                        <img className="w-[30px] h-[30px] mt-[9px]" src="https://api.korzinka.uz/upload/iblock/f41/ztu31imjpc4m8igoot30pu9awrlhd9d8.png" alt="" />
                    </div>
                </Link>
                <Link to="/">
                    <div className=" ml-[1294px] mt-[50px] w-[50px] h-[50px] flex justify-center rounded-full border-[3px] border-[red] bg-[#ffffffed]">
                        <img className="w-[30px] h-[30px] mt-[9px]" src="data:image/png;base64,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" alt="" />
                    </div>
                </Link>
            </div>
            <div>
                {prodacts.map((items) => (
                    <StoreCard key={items.id} image={items.image} title={items.title} description={items.description} price={items.price} />
                ))}
            </div>
        </>
    );
};
