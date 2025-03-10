import { Link, useNavigate } from "react-router-dom";
import "../ListaEmpresas/style.css";
import { useContext, useState } from "react";
import api from "../../service";
import SomeContext from "../../Hook/SomeContext";
//import Loader from "../../component/load";

const Login = () => {
  const navigate = useNavigate();
  const context = useContext(SomeContext)
  console.log("use: " , context)
//teste b
  const [dados, setDados] = useState({});

  const handleLogar = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;

    setDados((prev) => {
      const newDados = { ...prev, [name]: value };

      return newDados;
    });
  };

  const Logar = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const response = await api.post(`/logar`, dados);

      const token = response.data.token;
      console.log("login", response);


      if (token) {
        localStorage.setItem("token", token); //Armazena o token somente se ele existir
        
          if (response.status === 200){
            navigate(`/`);
          }
      } else {
        console.log("Erro: Token não recebido!");
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen mx-auto px-6 pt-24 bg-gradient-to-r from-blue-50 to-blue-100">
      <div
        className="relative mx-auto max-w-md bg-white rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between"
        id="login"
      >
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Login
        </h1>
        <form onSubmit={Logar} className="text-gray-600">
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            required
            onChange={handleLogar}
            name="email"
            type="email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring focus:ring-indigo-200 transition mb-4"
          />
          {/* <Loader /> */}

          <label htmlFor="password" className="block text-sm font-medium mb-1">
            Senha<span className="text-red-500">*</span>
          </label>
          <input
            required
            onChange={handleLogar}
            name="senha"
            type="password"
            minLength={6}
            className="w-full p-3 border border-gray-300 rounded-lg focus:border-indigo-500 focus:ring focus:ring-indigo-200 transition mb-4"
          />
          <Link
            to="/esqueceusenha"
            className="text-sm text-indigo-600 hover:underline block text-right mb-4"
          >
            Esqueceu a senha?
          </Link>
          <button type="submit" className="w-full bg-indigo-600 text-white p-3 rounded-lg font-semibold hover:bg-indigo-500 transition">
            Entrar
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600 text-sm">
          Não possui conta?
          <Link
            to="/Cadastro"
            className="ml-1 text-indigo-600 font-semibold hover:underline"
          >
            Cadastre-se
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
