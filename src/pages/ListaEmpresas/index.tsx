import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoStorefrontOutline } from "react-icons/io5";
import Garrafao from "../../assets/garrafao.png";

import { TbBottle } from "react-icons/tb";

import { FaMapMarkerAlt } from "react-icons/fa";

import LupaSvg from "../../assets/lupa.svg";

import "./style.css";

const ListaEmpresas = () => {
  return (
    <div className="container">
      <header className="mb-10 pt-6 pl-3">
        <div className="p-5 overflow-hidden w-[60px] h-[60px] hover:w-[270px] bg-white shadow-[2px_2px_20px_rgba(0,0,0,0.08)] rounded-full flex group items-center hover:duration-300 duration-300">
          <div className="flex items-center justify-center fill-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Isolation_Mode"
              data-name="Isolation Mode"
              viewBox="0 0 24 24"
              width={22}
              height={22}
            >
              <path d="M18.9,16.776A10.539,10.539,0,1,0,16.776,18.9l5.1,5.1L24,21.88ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.507,7.507,0,0,1,10.5,18Z" />
            </svg>
          </div>
          <input
          placeholder="Procurar empresa"
            type="text"
            className="outline-none text-[20px] bg-transparent w-full text-black font-normal px-4"
          />
        </div>
      </header>
      <main className="px-3">
        <div className="rounded  border bg-white flex flex-row items-center justify-between p-3">
          <div>
            <h2 className="font-inter">Nome da empresa</h2>
            <p>Valor: 6,00</p>

            <div className="flex flex-row gap-1 items-center">
              <p>Avaliação: ****</p>

              <div className="flex flex-row gap-1 items-center">
                <FaMapMarkerAlt className="text-red-500"/>
                <p className="text-xs">2.5 km</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <img className=" w-8" src={Garrafao} />
            <button className="flex flex-row items-center rounded bg-sky-500 text-white px-1">
              Pedir
              <TbBottle />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ListaEmpresas;
