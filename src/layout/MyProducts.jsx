import React from "react";
import { useSelector } from "react-redux";

const MyProducts = () => {
  const selectedItems = useSelector((state) =>
    state.card.cardItems.filter((item) => item.selected)
  );
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h2 className="text-2xl font-bold mb-6 text-center">🛒 Sepetim</h2>
      {selectedItems.length === 0 ? (
        <p className="text-gray-500 text-center">Sepetiniz boş.</p>
      ) : (
        <div className="space-y-4">
          {selectedItems.map((item) => (
            <div
              key={item.productID}
              className="flex items-center justify-between border rounded-2xl shadow p-4 hover:shadow-md transition"
            >
              <img
                src={item.productData.productMainImage}
                alt={item.productName}
                className="w-24 h-24 object-cover rounded-lg"
              />

              <div className="flex-1 px-4">
                <h3 className="text-lg font-semibold">{item.productName}</h3>
              </div>

              <div className="text-right min-w-[80px]">
                <p className="text-gray-700 font-bold">{item.salePrice}₺</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyProducts;
