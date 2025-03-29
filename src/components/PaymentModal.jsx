import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { clearSelectedItems } from "../control/cardSlice";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Ad soyad zorunludur"),
  cardNumber: yup
    .string()
    .matches(/^\d{16}$/, "Kart numarası 16 haneli olmalıdır")
    .required("Kart numarası zorunludur"),
  expiry: yup
    .string()
    .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Geçerli bir tarih girin (AA/YY)")
    .required("Tarih zorunludur"),
  cvv: yup
    .string()
    .matches(/^\d{3,4}$/, "CVV 3 veya 4 haneli olmalıdır")
    .required("CVV zorunludur"),
});

const PaymentModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  if (!isOpen) return null;
  const onSubmit = (e) => {
    toast.success("Ödeme başarıyla tamamlandı ✅", {
      position: "top-right",
      autoClose: 3000,
    });

    dispatch(clearSelectedItems());
    navigate("/");
    onClose();
  };
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

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Kart Üzerindeki İsim
            </label>
            <input
              type="text"
              placeholder="Ad Soyad"
              {...register("name")}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#009688]"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Kart Numarası
            </label>
            <input
              type="text"
              placeholder="•••• •••• •••• ••••"
              maxLength={16}
              {...register("cardNumber")}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#009688]"
            />
            {errors.cardNumber && (
              <p className="text-red-500 text-sm mt-1">
                {errors.cardNumber.message}
              </p>
            )}
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
                {...register("expiry")}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#009688]"
              />
              {errors.expiry && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.expiry.message}
                </p>
              )}
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                CVV
              </label>
              <input
                type="password"
                placeholder="•••"
                maxLength={4}
                {...register("cvv")}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#009688]"
              />
              {errors.cvv && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.cvv.message}
                </p>
              )}
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
