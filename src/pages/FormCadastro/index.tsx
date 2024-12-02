import { useState } from "react";
import api from "../../service";
import { useNavigate } from "react-router-dom";

const Formcadastro = () => {
  const [dados, setDados] = useState({
    cnpj: "",
    email: "",
    nome: " ",
    password: " ",
    tel: " ",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleCadastro = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;

    setDados((prev) => {
      const newDados = { ...prev, [name]: value };
      return newDados;
    });
  };

  const Cadastro = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (dados.password != dados.confirmPassword) {
      console.log("senha divergentes");
      alert("As senhas são diferentes");
      return;
    }

    try {
      const response = await api.post(`/registrar/empresa`, dados);

      if (response.status === 201) return navigate("/Login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100 py-6 px-6">
      <div className="bg-white p-10 rounded-xl shadow-lg max-w-lg w-full">
        <h1 className="text-3xl font-semibold text-center text-blue-600 mb-8">
          Cadastro
        </h1>

        <form onSubmit={Cadastro} className="space-y-5">
          <div>
            <label
              htmlFor="nome"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Nome fantasia<span className="text-red-500">*</span>
            </label>
            <input
              required
              name="nome"
              type="text"
              onChange={handleCadastro}
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
              placeholder="Digite o nome da empresa"
            />
          </div>

          <div>
            <label
              htmlFor="cnpj"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              CNPJ<span className="text-red-500">*</span>
            </label>
            <input
              required
              name="cnpj"
              minLength={14}
              type="text"
              onChange={handleCadastro}
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
              placeholder="Digite o CNPJ"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email<span className="text-red-500">*</span>
            </label>
            <input
              required
              name="email"
              type="email"
              onChange={handleCadastro}
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
              placeholder="seuemail@exemplo.com"
            />
          </div>

          <div>
            <label
              htmlFor="tel"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              WhatsApp<span className="text-red-500">*</span>
            </label>
            <input
              required
              name="tel"
              type="tel"
              onChange={handleCadastro}
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
              placeholder="(XX) XXXXX-XXXX"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Senha<span className="text-red-500">*</span>
            </label>
            <input
              required
              type="password"
              name="password"
              minLength={6}
              onChange={handleCadastro}
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
              placeholder="Digite sua senha"
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Confirmar Senha<span className="text-red-500">*</span>
            </label>
            <input
              required
              minLength={6}
              onChange={handleCadastro}
              name="confirmPassword"
              type="password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
              placeholder="Confirme sua senha"
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

export default Formcadastro;
