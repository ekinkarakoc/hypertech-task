import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCardItem } from "../control/cardSlice";
import { FaStar } from "react-icons/fa";

const CardItem = ({ title, price, image, productID }) => {
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false);

  const selected = useSelector(
    (state) =>
      state.card.cardItems.find((item) => item.productID === productID)
        ?.selected
  );

  const handleToggle = () => {
    dispatch(toggleCardItem(productID));
  };

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(stored.includes(productID));
  }, [productID]);

  const handleToggleFavorite = () => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    let updated;

    if (stored.includes(productID)) {
      updated = stored.filter((id) => id !== productID);
    } else {
      updated = [...stored, productID];
    }

    localStorage.setItem("favorites", JSON.stringify(updated));
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="bg-white flex flex-col justify-between shadow-md h-82 rounded-lg p-4 m-2 w-full max-w-sm">
      <div className="flex justify-center h-30 ">
        <h2 className="text-lg font-semibold text-center w-70">{title}</h2>
      </div>

      <div className="flex justify-center">
        <img src={image} alt={title} className="w-70 h-40 rounded-2xl" />
      </div>

      <div className="w-full flex justify-center gap-4 mt-4">
        <button
          onClick={handleToggle}
          className={`flex flex-col items-center justify-between w-40 px-4 py-2 border rounded-2xl hover:cursor-pointer 
                hover:scale-105 transition duration-300
                ${
                  selected
                    ? "bg-[#e0f2f1] border-green-600"
                    : "border-gray-400 hover:bg-gray-100"
                }
              `}
        >
          <p className="text-[#009688] font-bold text-md">{price} ₺</p>
          <p>{selected ? "Sepetten Çıkar" : "Sepete Ekle"}</p>
        </button>

        <button
          onClick={handleToggleFavorite}
          className="flex flex-col items-center justify-center w-32 px-4 py-2 border rounded-2xl hover:cursor-pointer border-gray-300 hover:bg-gray-100 transition"
        >
          <FaStar
            className={`text-2xl transition duration-200 ${
              isFavorite ? "text-yellow-400" : "text-gray-400"
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default CardItem;
