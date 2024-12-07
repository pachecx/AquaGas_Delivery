import imgEstabelecimento from "../../assets/Logo.png";
import "./style.css";
import { Link, useParams } from "react-router-dom";
import imgProduto from "../../assets/garrafao.png";
import { useEffect, useState } from "react";
import api from "../../service";


const HomeEstabelecimento = () => {

  const [dados, setDados] = useState({
    nome: "",
    cnpj: "",
    email: "",
    tel: "",
  });
  const {id} = useParams();

  const CarregarPerfil = async () => {
    try {
      const response = await api.get(`/empresa/${id}`);
      setDados(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // const CarregarProdutos = async () => {
  //   try {
  //     const response = await api.get(`/produtos/listar/${65569856365458}`)
  //     console.log("PRODUTOS:", response.data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  //}
  //console.log(dados)

  useEffect(() => {
    CarregarPerfil();
  }, []);
  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
        <img
          className="w-full rounded-lg mb-4"
          src={imgEstabelecimento}
          alt="Imagem do Estabelecimento"
        />
        <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">
          {dados.nome}
        </h1>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Endereço</h3>
          <p className="text-gray-600">
            Cidade: <span className="font-medium text-gray-800">São Luís</span>
          </p>
          <p className="text-gray-600">
            Bairro: <span className="font-medium text-gray-800">Turu</span>
          </p>
          <p className="text-gray-600">
            Rua: <span className="font-medium text-gray-800">25</span>
          </p>
          <p className="text-gray-600">
            Número: <span className="font-medium text-gray-800">26</span>
          </p>
          <button className="mt-4 w-full bg-indigo-600 text-white p-3 rounded-lg font-bold hover:bg-indigo-500 transition">
            <Link to={`/editarEstabelecimento/${id}`}>Editar Estabelecimento</Link>
          </button>
        </div>

        <div className="border-t pt-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Produtos Cadastrados
          </h3>
          <button className="mb-6 w-full bg-green-600 text-white p-3 rounded-lg font-bold hover:bg-green-500 transition">
            <Link to="/cadastrarProduto">Cadastrar Produto</Link>
          </button>
          ---
            
          {}
          <div className="bg-gray-100 p-4 rounded-lg flex justify-between items-center mb-4">
            <div>
              <h1 className="text-lg font-semibold text-gray-700">Garrafão</h1>
              <p className="text-gray-600">20L</p>
              <p className="text-gray-600">
                Valor:{" "}
                <span className="font-medium text-gray-800">R$ 7,00</span>
              </p>
            </div>

            <div className="flex items-center gap-4">
              <img
                className="h-16 w-16 object-cover rounded-lg"
                src={imgProduto}
                alt="Produto"
              />
              <div className="flex flex-col">
                <button className="bg-yellow-500 text-white p-2 rounded-lg font-bold hover:bg-yellow-400 transition mb-2">
                  Editar
                </button>
                <button className="bg-red-500 text-white p-2 rounded-lg font-bold hover:bg-red-400 transition">
                  Excluir
                </button>
              </div>
            </div>
          </div>

          --
        </div>
      </div>
    </div>
  );
};

export default HomeEstabelecimento;
