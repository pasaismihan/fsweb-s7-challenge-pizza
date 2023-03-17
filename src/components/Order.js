import logo from "../logo.svg";
import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import * as Yup from "yup";

const pizzaFiyat = {
  fiyat: 85.5,
  yildiz: 4.9,
  yorumSayisi: 200,
};
const checkData = [
  { id: "1", name: "Papperroni", price: 5, check: false },
  { id: "2", name: "Domates", price: 5, check: false },
  { id: "3", name: "Biber", price: 5, check: false },
  { id: "4", name: "Sosis", price: 5, check: false },
  { id: "5", name: "Mısır", price: 5, check: false },
  { id: "6", name: "Sucuk", price: 5, check: false },
  { id: "7", name: "KanadaJambonu", price: 5, check: false },
  { id: "8", name: "Pastırma", price: 5, check: false },
  { id: "9", name: "Ananas", price: 5, check: false },
  { id: "10", name: "TavukIzgara", price: 5, check: false },
  { id: "11", name: "Jalepeno", price: 5, check: false },
  { id: "12", name: "Kabak", price: 5, check: false },
  { id: "13", name: "Soğan", price: 5, check: false },
  { id: "14", name: "Sarımsak", price: 5, check: false },
];

export default function Order() {
  const [toplam, setToplam] = useState(1);
  const [switched, setSwitched] = useState([...checkData]);
  const [malzemeAdet, setMalzemeAdet] = useState(0);
  const [disableButton, setDisableButton] = useState(true);
  const [siparisSubmit, setSiparisSubmit] = useState({
    isim: "",
    hamurKalinligi: "",
    pizzaBoyutu: "",
    ekMalzemeler: [...checkData],
    siparisNotu: "",
  });
  const [siparisSubmitError, setSiparisSubmitError] = useState({
    isim: "",
    hamurKalinligi: "bu alanı boş bırakmayınız",
    pizzaBoyutu: "bu alanı boş bırakmayınız",
    ekMalzemeler: "",
    siparisNotu: "",
  });

  console.log(siparisSubmit);

  const siparisSubmitSchema = Yup.object().shape({
    isim: Yup.string()
      .required("isim alani zorunludur")
      .min(3, "en az 3 karakter kullanmalisiniz"),
    hamurKalinligi: Yup.string().required("bu alani bos birakmayin"),
    pizzaBoyutu: Yup.string().required("Pizza boyutu secmek zorunludur"),
    ekMalzemeler: Yup.array().max(
      7,
      "max 7 tane malzeme seçebilirsiniz , (tanesi 5₺)"
    ),
    siparisNotu: Yup.string().required(),
  });

  useEffect(() => {
    siparisSubmitSchema
      .isValid(siparisSubmit)
      .then((valid) => setDisableButton(!valid));
  }, [siparisSubmit]);

  const artirma = (e) => {
    e.preventDefault();
    setToplam(toplam + 1);
  };
  const azaltma = (e) => {
    e.preventDefault();
    toplam > 1 ? setToplam(toplam - 1) : setToplam(1);
  };

  const changeHandler = (item, i) => {
    const newMalzemeler = [...siparisSubmit.ekMalzemeler];
    newMalzemeler[i].check = !newMalzemeler[i].check;
    setSiparisSubmit({ ...siparisSubmit, ekMalzemeler: newMalzemeler });
    Yup.reach(siparisSubmitSchema, "ekMalzemeler")
      .validate(newMalzemeler)
      .then(() => {
        setSiparisSubmitError({ ...siparisSubmitError, ekMalzemeler: "" });
      })
      .catch((err) => {
        setSiparisSubmitError({
          ...siparisSubmitError,
          ekMalzemeler: err.errors[0],
        });
      });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    axios.post("https://reqres.in/api/orders", siparisSubmit).then((res) => {
      console.log("login res data > ", res.data);
    });
  };

  const formChange = (e) => {
    Yup.reach(siparisSubmitSchema, e.target.name)
      .validate(e.target.value)
      .then(() => {
        setSiparisSubmitError({ ...siparisSubmitError, [e.target.name]: "" });
      })
      .catch((err) => {
        setSiparisSubmitError({
          ...siparisSubmitError,
          [e.target.name]: err.errors[0],
        });
      });
    setSiparisSubmit({ ...siparisSubmit, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const checkArray = switched.filter((item) => {
      return item.check === true;
    });
    setMalzemeAdet(checkArray.length * 5);
  });

  return (
    <div>
      <div className="bg-red text-center grid place-items-center place-content-center">
        <img src={logo} alt="logo" className="pt-10 pb-8  "></img>
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
      <div className="w-1/2 m-auto">
        <h1 className="font-bold font-sans text-[30px] text-left pt-10 text-zinc-700 text-center">
          Sipariş Menü
        </h1>

        <div className="flex items-center justify-between py-10">
          <p className="font-bold text-[30px]">{`${pizzaFiyat.fiyat}₺`}</p>
          <p className="ml-44 text-[19px] font-bold text-zinc-400">{`${pizzaFiyat.yildiz}`}</p>
          <p className="text-[19px] text-zinc-400 font-bold">{`(${pizzaFiyat.yorumSayisi})`}</p>
        </div>
        <h2 className="text-zinc-400 font-Barlow text-[17px] font-bold">
          Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
          diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
          ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşan italyan kökenli
          lezzetli bir yemektir. Küçük bir pizzaya bazen pizetta denir.
        </h2>

        <form
          onSubmit={
            ((e) => e.preventDefault(), formChange, changeHandler, formSubmit)
          }
        >
          <div className="flex justify-between">
            <div>
              <h3 className="font-bold text-[18px] mt-10 mb-4">
                Boyut Seç <span className="text-red">*</span>
              </h3>
              <div className="flex items-center text-zinc-500 font-mono">
                <input
                  type="radio"
                  id="kucuk"
                  onChange={formChange}
                  value="kucuk"
                  name="pizzaBoyutu"
                  invalid={siparisSubmitError.pizzaBoyutu}
                />
                <label htmlFor="kucuk" className="ml-3">
                  Küçük
                </label>
              </div>
              <div className="flex items-center my-4 text-zinc-500 font-mono">
                <input
                  type="radio"
                  name="pizzaBoyutu"
                  id="orta"
                  onChange={formChange}
                  value="orta"
                  invalid={siparisSubmitError.pizzaBoyutu}
                />
                <label htmlFor="orta" className="ml-3">
                  Orta
                </label>
              </div>
              <div className="flex items-center text-zinc-500 font-mono">
                <input
                  type="radio"
                  name="pizzaBoyutu"
                  id="buyuk"
                  onChange={formChange}
                  value="buyuk"
                  invalid={siparisSubmitError.pizzaBoyutu}
                />
                <label htmlFor="buyuk" className="ml-3">
                  Büyük
                </label>
              </div>
              <div className="text-red">
                <br /> {siparisSubmitError.pizzaBoyutu}
              </div>
            </div>
            <div className="mr-32">
              <h3 className="font-bold text-[18px] mt-10 mb-4">
                Hamur Seç <span className="text-red">*</span>
              </h3>
              <div>
                <select
                  name="hamurKalinligi"
                  onChange={formChange}
                  required
                  invalid={siparisSubmitError.hamurKalinligi}
                  className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option></option>
                  <option value="standart">Standart</option>
                  <option value="kalın">Kalın</option>
                  <option value="ince">İnce</option>
                </select>
                <div className="text-red">
                  {siparisSubmitError.hamurKalinligi}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <h2 className="font-bold text-[20px] my-4">Ek Malzemeler</h2>
            <div className="text-red">{siparisSubmitError.ekMalzemeler}</div>
            <div className="grid grid-cols-3  mb-20 mt-4">
              {siparisSubmit.ekMalzemeler.map((item, i) => (
                <div
                  key={item.id}
                  className="mt-4 font-bold text-zinc-500 hover:text-zinc-800"
                >
                  <input
                    id={item.id}
                    type="checkbox"
                    checked={item.check}
                    onChange={() => changeHandler(item, i)}
                  />
                  <label htmlFor={item.id} className="ml-4">
                    {item.name}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-20 ">
            <h2 className="font-bold text-[20px]">Sipariş Notu</h2>
            <input
              placeholder="siparişine eklemek istediğin bir not var mı ?"
              className="border-solid border-2 border-zinc-200 w-full h-24 p-5 rounded-md mt-4"
              name="siparisNotu"
              invalid={siparisSubmitError.siparisNotu}
            />
          </div>
          <hr className="my-10 border-zinc-500" />
          <div className="mt-12   ">
            <h2 className="font-bold text-[20px]">İsim Bilgisi</h2>
            <input
              placeholder="Lütfen İsminizi Giriniz..."
              className="border-solid border-2 border-zinc-200 w-1/2 h-16 p-5 rounded-md mt-4"
              value={siparisSubmit.isim}
              onChange={formChange}
              name="isim"
              invalid={siparisSubmitError.isim}
            />
            <div className="text-red ">{siparisSubmitError.isim}</div>
          </div>
          <hr className="my-10 border-zinc-500 border-1" />
          <div className="flex justify-between">
            <div className="flex justify-start">
              <button
                onClick={azaltma}
                className="w-12 h-12 border rounded-md bg-yellow hover:bg-amber-200"
              >
                -
              </button>
              <div className="w-12 h-12 border rounded-md flex items-center justify-center">
                {toplam}
              </div>
              <button
                onClick={artirma}
                className="w-12 h-12 border rounded-md bg-yellow hover:bg-amber-200"
              >
                +
              </button>
            </div>
            <div className="mb-32">
              <div className="border p-8 rounded-sm border-zinc-300 ">
                <div className="text-lg font-bold font-Barlow mb-4 mr-32 ">
                  Sipariş Toplamı
                </div>
                <div className="flex justify-between font-Barlow ">
                  <div>Seçimler</div>
                  <div>{malzemeAdet}₺</div>
                </div>
                <div className="flex justify-between font-Barlow font-bold text-red">
                  <div>Toplam</div>
                  <div>{toplam * pizzaFiyat.fiyat + malzemeAdet}</div>
                </div>
              </div>
              <div>
                <Link to="/Success">
                  <button
                    className="w-80 h-12 bg-yellow   rounded-sm"
                    onClick={(e) => {
                      formSubmit();
                    }}
                    disabled={disableButton}
                  >
                    Sipariş Ver
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
