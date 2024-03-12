// Cards.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { add } from "../redux/reducer/card";
import { useDispatch } from "react-redux";

export const Cards = ({ title, image, price, description }) => {
    const dispatch = useDispatch();
    const [addedToCart, setAddedToCart] = useState(false);

    const addStore = (id) => {
        dispatch(add({ id, title, image, price, description }));
    }

    const handleAddToCart = () => {
        if (!addedToCart) {
            setAddedToCart(true);
            const newId = Date.now();
            addStore(newId);
        }
    };

    return (
        <>
            <div className="product12 border-[2px] border-[#ff4242] p-[20px] text-center rounded-[20px]">
                <div className="w-[350px] h-[450px] ml-[80px]">
                    <img className="w-full h-full object-contain" src={image} alt="img" />
                </div>
                <h3 className="text-[18px] font-medium font-sans">{title.length > 50 ? title.slice(0, 50) + "..." : title}</h3>
                <p className="text-[18px] mt-[10px] font-thin">{description.length > 50 ? description.slice(0, 50) + "..." : description}</p>
                <h2 className="text-[20px] font-semibold font-sans">{price} $</h2>
                <button className={`btn12 mt-[20px] ease-in duration-300 ${addedToCart ? "added" : ""}`} onClick={handleAddToCart}>
                    {addedToCart ? <Link to="/card">Korzinkaga o'tish</Link> : "Korzinkaga qo'shish"}
                </button>
            </div>
        </>
    );
};
