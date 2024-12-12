import { useEffect, useState } from "react";
import Garrafao from "../../assets/garrafao.png";
import { TbBottle } from "react-icons/tb";
//import { FaMapMarkerAlt } from "react-icons/fa";
//import produtos from "../../mock/produtos.json";
import "./style.css";
import { Link } from "react-router-dom";
import api from "../../service";

interface PropsEmpresa {
  idusuarios: string;
  nome: string;
  email: string;
  tel: string;
  cnpj: string;
}

interface PropsProdutos {
  idprodutos: string;
  nomeProduto: string;
  volumePeso: string;
  valor: string;
  tipo: string;
  cnpj: string;
}

const ListaEmpresas = () => {
  const [buscar, setBuscar] = useState("");
  const [data, setData] = useState<PropsEmpresa[]>([]);
  const [produtos, setProdutos] = useState<PropsProdutos[]>([]);

  const ListarEmpresas = async () => {
    try {
      const response = await api.get(`/users/listar`);
      setData(response.data.empresas);
    } catch (error) {
      console.log(error);
    }
  };

  const ProdutosListar = async () => {
    try {
      const response = await api.get(`/produtos/listar`);
      setProdutos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    ListarEmpresas();
    ProdutosListar();
  }, []);

  const produtoComEmpresa = produtos.map((produto) => {
    const empresa = data.find((emp) => emp.cnpj === produto.cnpj);

    return {
      ...produto,
      empresaNome: empresa ? empresa.nome : "Empresa não encontrada",
    };
  });

  const filtrarEmpresa = produtoComEmpresa.filter((empresaBusca) => {
    if (!buscar) return true;
    return (
      typeof empresaBusca.empresaNome === "string" &&
      empresaBusca.empresaNome.toLowerCase().startsWith(buscar.toLowerCase())
    );
  });

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
            onChange={(e) => setBuscar(e.target.value)}
            name="buscar"
            type="text"
            placeholder="Procurar empresa"
            className="ml-3 w-full bg-transparent outline-none text-lg text-gray-700 placeholder-gray-400"
          />
        </div>
      </header>

      <main className="px-4">
        {filtrarEmpresa.map((produto) => (
          <div
            key={produto.idprodutos}
            className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg p-6 flex justify-between items-center mb-4 transition-all"
          >
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-1">
                {produto.nomeProduto}
              </h2>
              <p className="text-gray-600 mb-2">
                <span className="font-medium">Valor:</span> R$ {produto.valor}
                ,00
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Empresa:</span>{" "}
                <strong className="text-blue-500">{produto.empresaNome}</strong>
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <img
                src={Garrafao}
                alt="Garrafão"
                className="w-16 h-16 object-contain"
              />
              <button className="flex items-center bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-md shadow hover:from-blue-600 hover:to-blue-700 transition-all">
                <Link
                  to={`/detalhespedido/${produto.idprodutos}`}
                  className="mr-2"
                >
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
