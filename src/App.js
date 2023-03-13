import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainpage from "./components/Mainpage";
import Order from "./components/Order";
import Select from "./components/Select";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/Select" element={<Select />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
