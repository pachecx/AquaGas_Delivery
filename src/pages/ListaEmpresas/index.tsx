import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoStorefrontOutline } from "react-icons/io5";
import Garrafao from "../../assets/garrafao.png";

import { TbBottle } from "react-icons/tb";

import { FaMapMarkerAlt } from "react-icons/fa";

const ListaEmpresas = () => {
  return (
    <div>
      <header>
        <div className="flex flex-row">
          <input
            className="rounded border border-gray-300 pl-2"
            type="search"
            placeholder="Procurar uma empresa"
          />
          <button>
            <CiSearch />
          </button>
        </div>
      </header>
      <main>
        <div className="border  border-red-500 flex flex-row items-center	justify-between px-3">
          <div>
            <h2>Nome da empresa</h2>
            <p>Valor: 6,00</p>

            <div className="flex flex-row gap-1 items-center">
              <p>Avaliação: ****</p>

              <div className="flex flex-row gap-1 items-center">
                <FaMapMarkerAlt />
                <p className="text-xs">2.5 km</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
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
