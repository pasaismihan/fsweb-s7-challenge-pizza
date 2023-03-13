import React from "react";
import logo from "../logo.svg";

// import "bootstrap/dist/css/bootstrap.min.css";
// import {
//   Form,
//   FormGroup,
//   Input,
//   Label,
//   Button,
//   FormFeedback,
// } from "reactstrap";
import { Link } from "react-router-dom";

export default function Order() {
  return (
    <div>
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
          <Link to="" className="text-white  hover:text-black no-underline">
            Sipariş Oluştur
          </Link>
        </div>
      </div>
      <div className="w-1/3 m-auto">
        <h1 className="font-bold font-sans text-[30px] text-left pt-10 text-zinc-700">
          Position Absolute Acı Pizza
        </h1>
        <div className="flex items-center justify-between py-10">
          <p className="font-bold text-[30px]">85.50₺</p>
          <p className="ml-44 text-[19px] font-bold text-zinc-400">4.9</p>
          <p className="text-[19px] text-zinc-400 font-bold">(200)</p>
        </div>
        <h2 className="text-zinc-400 font-Barlow text-[17px] font-bold">
          Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
          diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
          ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşan italyan kökenli
          lezzetli bir yemektir. Küçük bir pizzaya bazen pizetta denir.
        </h2>

        <form>
          <div className="flex justify-between">
            <div>
              <h3 className="font-bold text-[18px] mt-10 mb-4">
                Boyut Seç <span className="text-red">*</span>
              </h3>
              <div className="flex items-center text-zinc-500 font-mono">
                <input type="radio" name="boyut" id="kucuk" />
                <label for="kucuk" className="ml-3">
                  Küçük
                </label>
              </div>
              <div className="flex items-center my-4 text-zinc-500 font-mono">
                <input type="radio" name="boyut" id="orta" />
                <label for="orta" className="ml-3">
                  Orta
                </label>
              </div>
              <div className="flex items-center text-zinc-500 font-mono">
                <input type="radio" name="boyut" id="buyuk" />
                <label for="buyuk" className="ml-3">
                  Büyük
                </label>
              </div>
            </div>
            <div className="mr-32">
              <h3 className="font-bold text-[18px] mt-10 mb-4">
                Hamur Seç <span className="text-red">*</span>
              </h3>
              <div>
                <select
                  data-te-select-init
                  className="border-solid border-x-2 border-y font-bold font-sans"
                >
                  <option>Hamur Kalınlığı</option>
                  <option value="1">Standart</option>
                  <option value="2">Kalın</option>
                  <option value="3">İnce</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <h2 className="font-bold text-[20px] my-4">Ek Malzemeler</h2>
            <h3 className="text-zinc-500">
              En Fazla 10 malzeme seçebilirsiniz. 5₺
            </h3>
            <div className="flex">
              <div className="mt-4 mr-14">
                <div className="mb-4">
                  <input type="checkbox" id="pepperoni" name="pepperoni" />
                  <label
                    for="pepperoni"
                    className="ml-4 font-bold text-zinc-600"
                  >
                    Pepperoni
                  </label>
                </div>
                <div className="mb-4">
                  <input type="checkbox" id="sosis" name="sosis" />
                  <label for="sosis" className="ml-4 font-bold text-zinc-600">
                    Sosis
                  </label>
                </div>
                <div className="mb-4">
                  <input type="checkbox" id="jambon" name="jambon" />
                  <label for="jambon" className="ml-4 font-bold text-zinc-600">
                    Kanada Jambonu
                  </label>
                </div>
                <div className="mb-4">
                  <input type="checkbox" id="izgara" name="izgara" />
                  <label for="izgara" className="ml-4 font-bold text-zinc-600">
                    Tavuk Izgara
                  </label>
                </div>
                <div className="mb-4">
                  <input type="checkbox" id="sogan" name="sogan" />
                  <label for="sogan" className="ml-4 font-bold text-zinc-600">
                    Soğan
                  </label>
                </div>
              </div>
              <div className="mt-4 mr-20">
                <div className="mb-4">
                  <input type="checkbox" id="domates" name="domates" />
                  <label for="domates" className="ml-4 font-bold text-zinc-600">
                    Domates
                  </label>
                </div>
                <div className="mb-4">
                  <input type="checkbox" id="misir" name="misir" />
                  <label for="misir" className="ml-4 font-bold text-zinc-600">
                    Mısır
                  </label>
                </div>
                <div className="mb-4">
                  <input type="checkbox" id="sucuk" name="sucuk" />
                  <label for="sucuk" className="ml-4 font-bold text-zinc-600">
                    Sucuk
                  </label>
                </div>
                <div className="mb-4">
                  <input type="checkbox" id="jalapeno" name="jalapeno" />
                  <label
                    for="jalapeno"
                    className="ml-4 font-bold text-zinc-600"
                  >
                    Jalapeno
                  </label>
                </div>
                <div className="mb-4">
                  <input type="checkbox" id="sarimsak" name="sarimsak" />
                  <label
                    for="sarimsak"
                    className="ml-4 font-bold text-zinc-600"
                  >
                    Sarımsak
                  </label>
                </div>
              </div>
              <div className="mt-4">
                <div className="mb-4">
                  <input type="checkbox" id="biber" name="biber" />
                  <label for="biber" className="ml-4 font-bold text-zinc-600">
                    Biber
                  </label>
                </div>
                <div className="mb-4">
                  <input type="checkbox" id="zeytin" name="zeytin" />
                  <label for="zeytin" className="ml-4 font-bold text-zinc-600">
                    Zeytin
                  </label>
                </div>
                <div className="mb-4">
                  <input type="checkbox" id="ananas" name="ananas" />
                  <label for="ananas" className="ml-4 font-bold text-zinc-600">
                    Ananas
                  </label>
                </div>
                <div className="mb-4">
                  <input type="checkbox" id="kabak" name="kabak" />
                  <label for="kabak" className="ml-4 font-bold text-zinc-600">
                    Kabak
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-20 mb-20">
            <h2>Sipariş Notu</h2>
            <textarea
              placeholder="siparişine eklemek istediğin bir not var mı ?"
              className="border-solid border-2 border-zinc-200 w-full "
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
}
