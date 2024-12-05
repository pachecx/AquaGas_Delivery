import { useContext, useState } from "react";
import api from "../../service";
import { useNavigate, useParams } from "react-router-dom";

//import UseConntext from "../../Hook/UseConntext";
import SomeContext from "../../Hook/someContext";

const CadastrarProduto = () => {

  const context = useContext(SomeContext);

  const navigate = useNavigate();
  const id = useParams();

  const [produtos, setProdutos] = useState({
    nomeProduto: "",
    volumePeso: "",
    valor: "",
    tipo: "",
    cnpj: "65569856365458"
  });

  const handleProdutos = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;

    setProdutos((prev) => {
      const newProdutos = { ...prev, [name]: value };
      return newProdutos;
    });
  };

  

  const Salvar = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const response = await api.post(`/cadastrar/produto`, produtos);
      if (response.status === 200){
       navigate(`/HomeEstabelecimento/${id}`);
      }else{
        alert('Produto não cadastrado!')
      }
    } catch (error) {
      console.log(error);
    }
  };
  //console.log(produtos);
  console.log(context)
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100 p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">
          Novo Produto
        </h1>

        <form onSubmit={Salvar} className="space-y-5">
          <div className="flex flex-col">
            <label
              htmlFor="nomeProduto"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Nome do Produto<span className="text-red-500">*</span>
            </label>
            <input
              className="border border-gray-300 p-3 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
              type="text"
              onChange={handleProdutos}
              name="nomeProduto"
              placeholder="Ex: Garrafão 20L"
              required
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="volume"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Volume ou Peso<span className="text-red-500">*</span>
            </label>
            <input
              className="border border-gray-300 p-3 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
              onChange={handleProdutos}
              type="text"
              name="volumePeso"
              placeholder="Ex: 5L ou 13kg"
              required
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="valor"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Valor<span className="text-red-500">*</span>
            </label>
            <input
              className="border border-gray-300 p-3 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
              onChange={handleProdutos}
              type="text"
              name="valor"
              placeholder="Ex: R$ 10,00"
              required
            />
          </div>

          <div className="flex flex-col">
            <p className="text-sm font-medium text-gray-700 mb-2">Categoria</p>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2">
                <input
                  className="border-gray-300 focus:ring-blue-500"
                  type="radio"
                  onChange={handleProdutos}
                  name="tipo"
                  value="agua"
                  required
                />
                <span className="text-gray-700">Água</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  className="border-gray-300 focus:ring-blue-500"
                  type="radio"
                  name="tipo"
                  onChange={handleProdutos}
                  value="gas"
                  required
                />
                <span className="text-gray-700">Gás</span>
              </label>
            </div>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="imagem"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Adicione uma Foto
            </label>
            <input
              className="border border-gray-300 p-3 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
              type="file"
              name="imagem"
              accept="image/*"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold hover:bg-blue-500 transition"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default CadastrarProduto;
