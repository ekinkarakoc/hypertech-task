import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import PaymentModal from "../components/PaymentModal";

const MyProducts = () => {
  const cardItems = useSelector((state) => state.card.cardItems);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const selectedItems = useMemo(
    () => cardItems.filter((item) => item.selected),
    [cardItems]
  );
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 flex flex-col h-[80vh]">
      <h2 className="text-2xl font-bold mb-6 text-center">🛒 Sepetim</h2>

      {selectedItems.length === 0 ? (
        <p className="text-gray-500 text-center flex-1">Sepetiniz boş.</p>
      ) : (
        <>
          <div className="min-h-116 overflow-y-auto  space-y-4 border-1 rounded-2xl p-6">
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

          <div className="mt-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-[#009688] text-white font-semibold py-3 rounded-xl hover:bg-[#00796b] transition"
            >
              Ödeme Yap
            </button>
          </div>
        </>
      )}
      <PaymentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default MyProducts;
