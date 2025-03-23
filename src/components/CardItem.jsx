import React from "react";

const CardItem = ({ title, price, image }) => {
  return (
    <div className="bg-white flex flex-col justify-between shadow-md h-70 rounded-lg p-4 m-2 w-full max-w-sm">
      <div className="flex justify-center">
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      <div className="flex justify-center">
        <img src={image} alt="" className="w-70 h-35 rounded-2xl" />
      </div>
      <div className="w-full flex justify-center">
        <button
          className="flex items-center justify-between w-45 px-2 py-2 border gap-2 rounded-2xl hover:cursor-pointer border-gray-400 
                   hover:bg-gray-100 hover:scale-105 transition duration-300"
        >
          <p className="text-green-600 font-bold text-md">{price} ₺</p>
          <p>Sepete Ekle</p>
        </button>
      </div>
    </div>
  );
};

export default CardItem;
