import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

export default function Order() {
  return (
    <div className="bg-red text-center grid place-items-center place-content-center">
      <img src={logo} className="pt-10 pb-8  "></img>
      <div className="pb-6 mr-64 text-[20px]">
        <Link to="/" className="text-white hover:text-black no-underline">
          Anasayfa
        </Link>
        <span className="text-white"> - </span>
        <Link to="" className="text-white  hover:text-black no-underline">
          Seçenekler
        </Link>
        <span className="text-white"> - </span>
        <Link
          to="/Select"
          className="text-white  hover:text-black no-underline"
        >
          Sipariş Oluştur
        </Link>
      </div>
    </div>
  );
}
