import React from "react";

const CardItem = ({ title, price }) => {
  return (
    <div className="bg-white shadow-md  rounded-lg p-4 m-2 w-full max-w-sm">
      <h2 className="text-lg font-semibold">{title}</h2>
      <button className="flex items-center px-2 py-2 border-1 gap-2 rounded-2xl hover:cursor-pointer border-gray-400">
        <p className="text-green-600 font-bold text-md ">{price} ₺</p>{" "}
        <p>Sepete Ekle</p>
      </button>
    </div>
  );
};

export default CardItem;
