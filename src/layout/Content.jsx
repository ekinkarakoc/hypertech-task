import React from "react";
import CardItem from "../components/CardItem";

const items = [
  { title: "Ürün 1", price: 199.99 },
  { title: "Ürün 2", price: 299.5 },
  { title: "Ürün 3", price: 149.9 },
  { title: "Ürün 4", price: 399.0 },
];

const Content = () => {
  return (
    <div className="w-full  flex flex-wrap  justify-center items-start bg-gray-200 p-4">
      {items.map((item, index) => (
        <CardItem key={index} title={item.title} price={item.price} />
      ))}
    </div>
  );
};

export default Content;
