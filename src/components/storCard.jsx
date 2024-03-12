import React, { useState } from "react";

export const StoreCard = ({ image, title, description, price, id }) => {
    const [quantity, setQuantity] = useState(0);

    const handleDecrease = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };


    // Umumiy narxni hisoblash
    const totalPrice = (price * quantity).toFixed(2);

    return (
        <div key={id} className="store-card flex gap-[300px] mt-[50px] h-[400px] rounded-[20px] border-[2px] border-[red]">
            <div>
                <img className="w-[300px] h-[380px] ml-[50px]" src={image} alt="img" />
            </div>
            <div>
                <h3 className="mt-[50px] text-[40px] w-[800px]">{title}</h3>
                <p className="w-[800px] mt-[10px] text-[20px]">{description.length > 50 ? description.slice(0, 200) + "..." : description}</p>
                <span className="text-[40px] font-thin mt-[10px]">${totalPrice} USD</span>
                <div className=" flex gap-[10px]">
                    <button className="w-[50px] bg-[#fff] border-[red] border-[2px] h-[50px] text-[30px] rounded-[5px] font-sans" onClick={handleDecrease}>-</button>
                    <strong className="w-[50px] bg-[#fff] border-[red] border-[2px] h-[50px] text-[30px] rounded-[5px] flex justify-center pt-[2px] font-mono ">{quantity}</strong>
                    <button className="w-[50px] bg-[#fff] border-[red] border-[2px] h-[50px] text-[30px] rounded-[5px] font-sans" onClick={handleIncrease}>+</button>
                </div>
            </div>
        </div>
    );
};
