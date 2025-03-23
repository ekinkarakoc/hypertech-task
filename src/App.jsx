import { useState } from "react";
import "./App.css";
import Content from "./layout/Content";
import Navbar from "./layout/Navbar";

function App() {
  const [cartItems, setCartItems] = useState({});

  const toggleCartItem = (productId) => {
    setCartItems((prev) => {
      const updated = { ...prev };

      if (updated[productId]) {
        delete updated[productId]; // varsa çıkar
      } else {
        updated[productId] = true; // yoksa ekle
      }

      return updated;
    });
  };

  const cartCount = Object.keys(cartItems).length;
  return (
    <>
      <Navbar cartCount={cartCount} />
      <Content onToggleCart={toggleCartItem} selectedItems={cartItems} />
    </>
  );
}

export default App;
