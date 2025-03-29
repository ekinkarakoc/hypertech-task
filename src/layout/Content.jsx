import React, { useState } from "react";
import CardItem from "../components/CardItem";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCardItems } from "../control/cardSlice";

const Content = () => {
  const dispatch = useDispatch();
  const { cardItems } = useSelector((state) => state.card);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.post(
          "https://api.hyperteknoloji.com.tr/Products/List",
          {},
          {
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
              authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJMb2dpblR5cGUiOiIxIiwiQ3VzdG9tZXJJRCI6IjU1NzI0IiwiRmlyc3ROYW1lIjoiRGVtbyIsIkxhc3ROYW1lIjoiSHlwZXIiLCJFbWFpbCI6ImRlbW9AaHlwZXIuY29tIiwiQ3VzdG9tZXJUeXBlSUQiOiIzMiIsIklzUmVzZWxsZXIiOiIwIiwiSXNBUEkiOiIxIiwiUmVmZXJhbmNlSUQiOiIiLCJSZWdpc3RlckRhdGUiOiIzLzI1LzIwMjUgMTowMDo0OCBQTSIsImV4cCI6MjA1NDIyNzA1MiwiaXNzIjoiaHR0cHM6Ly9oeXBlcnRla25vbG9qaS5jb20iLCJhdWQiOiJodHRwczovL2h5cGVydGVrbm9sb2ppLmNvbSJ9.e_-ZGGQ6yOwKkFvsQuJLwRnWA4IIM4lFMK2w9N6Vz4k",
            },
          }
        );
        const products = response.data.data;
        console.log(products);
        dispatch(setCardItems(products));
      } catch (error) {
        console.error("API Hatası:", error.response?.data || error.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-wrap  justify-center items-start bg-gray-200 p-4 gap-5">
      {cardItems.map((item, index) => (
        <CardItem
          key={index}
          productID={item.productID}
          title={item.productName}
          price={item.salePrice}
          image={item.productData.productMainImage || null}
        />
      ))}
    </div>
  );
};

export default Content;
