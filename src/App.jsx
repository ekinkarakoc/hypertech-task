import "./App.css";
import Content from "./layout/Content";
import MyProducts from "./layout/MyProducts";
import Navbar from "./layout/Navbar";
import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Content />} />
        <Route path="my-products" element={<MyProducts />} />
      </Routes>
    </>
  );
}

export default App;
