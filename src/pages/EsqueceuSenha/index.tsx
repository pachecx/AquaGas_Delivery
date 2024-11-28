import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const EsqueceuSenha = () => {
  const [redefinir, setRedefinir] = useState({});

  const handleEnviar = (e: { target: { name: string; value: string; }; }) => {
    const { name, value } = e.target;

    setRedefinir((prev) => {
      const newRedefinir = { ...prev, [name]: value };
      return newRedefinir;
    });
  };

  const Enviar = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    console.log(redefinir);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 px-6">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
      <h1 className="text-2xl font-semibold text-center text-blue-600 mb-4">
        Redefinir Senha
      </h1>
      <p className="text-center text-gray-600 mb-6">
        Digite seu email para redefinir sua senha. Enviaremos um link.
      </p>
  
      <form onSubmit={Enviar}>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email<span className="text-red-500">*</span>
        </label>
        <input
          name="email"
          type="email"
          onChange={handleEnviar}
          required
          className="w-full p-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition mb-4"
          placeholder="seuemail@exemplo.com"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold hover:bg-blue-500 transition"
        >
          Enviar
        </button>
      </form>
  
      <div className="mt-6 text-center">
        <Link
          to="/login"
          className="text-blue-600 font-semibold hover:underline"
        >
          Voltar para Login
        </Link>
      </div>
    </div>
  </div>
  
  );
};

export default EsqueceuSenha;
