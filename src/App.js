import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainpage from "./components/Mainpage";
import Order from "./components/Order";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/Order" element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
