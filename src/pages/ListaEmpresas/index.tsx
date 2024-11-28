import { useEffect, useState } from "react";
import Garrafao from "../../assets/garrafao.png";

import { TbBottle } from "react-icons/tb";

import { FaMapMarkerAlt } from "react-icons/fa";

import produtos from "../../mock/produtos.json";

import "./style.css";
import { Link } from "react-router-dom";

interface PropsProdutos {
  id: string;
  nome: string;
  produtos: string[];
}

const ListaEmpresas = () => {
  const [data, setData] = useState<PropsProdutos[]>();

  useEffect(() => {
    const fetchData = async () => {
      setData(produtos);

      console.log(data);
    };
    fetchData();
  }, [data]);
  console.log(data);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 py-6">
      <header className="mb-8 px-4">
        <div className="relative flex items-center group w-full max-w-md mx-auto bg-white shadow-lg rounded-full overflow-hidden p-3">
          <div className="flex items-center justify-center text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={22}
              height={22}
            >
              <path d="M18.9,16.776A10.539,10.539,0,1,0,16.776,18.9l5.1,5.1L24,21.88ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.507,7.507,0,0,1,10.5,18Z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Procurar empresa"
            className="ml-3 w-full bg-transparent outline-none text-lg text-gray-700 placeholder-gray-400"
          />
        </div>
      </header>

      <main className="px-4">
        {produtos.map((produto) => (
          <div
            key={produto.id}
            className="bg-white border rounded-lg shadow-md p-5 flex justify-between items-center mb-4"
          >
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {produto.nome}
              </h2>
              <p className="text-gray-600 mb-2">
                Valor: R$ {produto.valorAgua}
              </p>
              <div className="flex items-center gap-2">
                <p className="text-yellow-500 font-medium">Avaliação: ★★★★☆</p>
                <div className="flex items-center gap-1">
                  <FaMapMarkerAlt className="text-red-500" />
                  <p className="text-xs text-gray-500">2.5 km</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <img src={Garrafao} alt="Garrafão" className="w-14 h-14" />
              <button className="flex items-center bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition">
                <Link to={`/detalhespedido/${produto.id}`} className="mr-2">
                  Pedir
                </Link>
                <TbBottle size={20} />
              </button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default ListaEmpresas;
