import React from "react";

const PaymentModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/20 bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-xl"
        >
          ×
        </button>

        <h3 className="text-xl font-bold mb-4">Ödeme Bilgileri</h3>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Kart Üzerindeki İsim
            </label>
            <input
              type="text"
              placeholder="Ad Soyad"
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#009688]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Kart Numarası
            </label>
            <input
              type="text"
              placeholder="•••• •••• •••• ••••"
              maxLength={19}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#009688]"
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Son Kullanma Tarihi
              </label>
              <input
                type="text"
                placeholder="AA/YY"
                maxLength={5}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#009688]"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                CVV
              </label>
              <input
                type="password"
                placeholder="•••"
                maxLength={4}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#009688]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-[#009688] text-white font-semibold py-2 rounded-lg hover:bg-[#00796b] transition"
          >
            Ödemeyi Tamamla
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentModal;
