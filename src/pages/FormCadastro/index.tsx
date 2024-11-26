import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../service";

const Formcadastro = () => {
  const [dados, setDados] = useState({});

  const handleCadastro = (e: { target: { name: string; value: string; }; }) => {
    const { name, value } = e.target;

    setDados((prev) => {
      const newDados = { ...prev, [name]: value };
      return newDados;
    });
  };

  const Cadastro = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      const response = await api.post(`/registrar`, dados)

      console.log("teste", response)
    } catch (error) {
      console.log(error)
    }

  };
  return (
    <div className="container">
      <div className="px-3 pt-24">
        <div
          className="mx-auto my-0 relative shadow-2xl max-w-sm rounded-md overflow-hidden flex flex-col justify-between p-3 after:absolute after:w-24 after:h-24 after:bg-sky-300 after:-z-10 after:rounded-full after:-top-4 after:-right-4 after:blur-xl border after:[box-shadow:-150px_50px_10px_100px_#7dd3fc]"
          id="login"
        >
          <h1 className=" border-sky-500 hover:bg-sky-100 rounded text-2xl p-2 font-bold flex flex-row gap-3 justify-center">
            <span>Cadastro</span>
          </h1>

          <form onSubmit={Cadastro} className="text-gray-700">
            <label
              htmlFor="nome"
              className="text-xs font-bold after:content-['*']"
            >
              Nome fantasia{" "}
            </label>
            <input
              required
              name="nome"
              type="text"
              onChange={handleCadastro}
              className="w-full p-2 mb-2 mt-1 outline-none ring-none focus:ring-2 focus:ring-sky-500"
            />
            <label
              htmlFor="cnpj"
              className="text-xs font-bold after:content-['*']"
            >
              Cnpj{" "}
            </label>
            <input
              required
              name="cnpj"
              minLength={14}
              type="text"
              onChange={handleCadastro}
              className="w-full p-2 mb-2 mt-1 outline-none ring-none focus:ring-2 focus:ring-sky-500"
            />
            <label
              htmlFor="email"
              className="text-xs font-bold after:content-['*']"
            >
              Email{" "}
            </label>
            <input
              required
              name="email"
              type="email"
              onChange={handleCadastro}
              className="w-full p-2 mb-2 mt-1 outline-none ring-none focus:ring-2 focus:ring-sky-500"
            />

            <label
              htmlFor="tel"
              className="text-xs font-bold after:content-['*']"
            >
              WhatsApp{" "}
            </label>
            <input
              required
              name="tel"
              type="tel"
              onChange={handleCadastro}
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
              name="password"
              minLength={6}
              onChange={handleCadastro}
              className="w-full p-2 mb-2 mt-1 outline-none ring-none focus:ring-2 focus:ring-sky-500"
            />
            <label
              htmlFor="confirmPassword"
              className="text-xs font-bold after:content-['*']"
            >
              Confirmar Senha
            </label>
            <input
              required
              minLength={6}
              onChange={handleCadastro}
              name="confirmPassword"
              type="password"
              className="w-full p-2 mb-2 mt-1 outline-none ring-none focus:ring-2 focus:ring-sky-500"
            />

            <button
              type="submit"
              className="w-full rounded bg-sky-500 text-sky-50 p-2 text-center font-bold hover:bg-sky-400"
            >
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formcadastro;
