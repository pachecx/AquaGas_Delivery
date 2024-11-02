import React from "react";
import { Link } from "react-router-dom";
import "../ListaEmpresas/style.css";

const Login = () => {
  return (
    <div className="container px-3 pt-24">
      <div
        className="mx-auto my-0 relative shadow-2xl max-w-sm rounded-md overflow-hidden flex flex-col justify-between p-3 after:absolute after:w-24 after:h-24 after:bg-sky-300 after:-z-10 after:rounded-full after:-top-4 after:-right-4 after:blur-xl border after:[box-shadow:-150px_50px_10px_100px_#7dd3fc]"
        id="login"
      >
        <h1 className=" border-sky-500 hover:bg-sky-100 rounded text-2xl p-2 font-bold flex flex-row gap-3 justify-center">
          <span>Login</span>
        </h1>

        <form className="text-gray-700">
          <label
            htmlFor="email"
            className="text-xs font-bold after:content-['*']"
          >
            Email ou Cnpj{" "}
          </label>
          <input
            required
            type="email"
            className="w-full p-2 mb-2 mt-1 outline-none ring-none focus:ring-2 focus:ring-sky-500"
          />
          <label
            htmlFor="password"
            className="text-xs font-bold after:content-['*']"
          >
            Senha
          </label>
          <input
            required
            type="password"
            className="w-full p-2 mb-2 mt-1 outline-none ring-none focus:ring-2 focus:ring-sky-500"
          />
          <Link className="block text-right text-xs text-white mb-4" to="#">
            Esqueceu senha?
          </Link>
          <button className="w-full rounded bg-sky-500 text-sky-50 p-2 text-center font-bold hover:bg-sky-400">
            Entrar
          </button>
        </form>

        <p className="mt-6 flex justify-center font-sans text-gray-700 text-sm leading-normal text-inherit antialiased">
          Não possui conta?
          <Link
            className="ml-1 block font-sans text-sm font-bold leading-normal text-white antialiased"
            to={'/Cadastro'}
          >
            Cadastre-se
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
