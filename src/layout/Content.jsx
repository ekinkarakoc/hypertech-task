import React, { useState } from "react";
import CardItem from "../components/CardItem";
import axios from "axios";
import { useEffect } from "react";

const Content = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://api.hyperteknoloji.com.tr/Categories",

          {
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
              authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJMb2dpblR5cGUiOiIxIiwiQ3VzdG9tZXJJRCI6IjE1NTk1MSIsIkZpcnN0TmFtZSI6Ikh5cGVyIiwiTGFzdE5hbWUiOiJ2MiIsIkVtYWlsIjoiZGVtb0BoeXBlci5jb20iLCJDdXN0b21lclR5cGVJRCI6IjIiLCJJc1Jlc2VsbGVyIjoiMSIsIklzQVBJIjoiMSIsIlJlZmVyYW5jZUlEIjoiIiwiUmVnaXN0ZXJEYXRlIjoiMy8yMS8yMDI1IDY6MjI6MjQgUE0iLCJleHAiOjIwNTM4MDE0MzEsImlzcyI6Imh0dHBzOi8vaHlwZXJ0ZWtub2xvamkuY29tLnRyIiwiYXVkIjoiaHR0cHM6Ly9oeXBlcnRla25vbG9qaS5jb20udHIifQ.iqkbA3AB-D_zOfdA-7y3xDQuzjk1YbGEv9zZiUqgTMs",
            },
          }
        );
        setData(response.data.data);
      } catch (error) {
        console.error("API Hatası:", error.response?.data || error.message);
      }
    };

    fetchProducts();
  }, []);
  console.log(data);

  return (
    <div className="w-full  flex flex-wrap  justify-center items-start bg-gray-200 p-4 gap-5">
      {data.map((item, index) => (
        <CardItem
          key={index}
          title={item.categoryName}
          price={item.productCategoryID}
          image={item.categoryDetail.categoryMainImage}
        />
      ))}
    </div>
  );
};

export default Content;
