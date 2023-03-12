import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

export default function Order() {
  return (
    <div className="bg-red text-center grid place-items-center place-content-center">
      <img src={logo} className="pt-10 pb-8  "></img>
      <div className="pb-6 mr-64">
        <Link to="/" className="text-white">
          Anasayfa -
        </Link>
        <Link to="" className="text-white">
          Seçenekler -
        </Link>
        <Link to="" className="text-white">
          Sipariş Oluştur
        </Link>
      </div>
    </div>
  );
}
