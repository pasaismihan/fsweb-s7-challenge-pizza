import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mainpage from "./components/Mainpage";
import Order from "./components/Order";
import Success from "./components/Success";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/Success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
