import React from "react";
import { Link } from "react-router-dom";

const PedidoRealizado = () => {
  return (
    <div className="min-h-screen bg-blue-50 p-6 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full text-center">
        {/* Ícone de sucesso */}
        <div className="mx-auto mb-6 flex items-center justify-center w-16 h-16 bg-green-100 rounded-full">
          <svg
            className="w-8 h-8 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>

        {/* Título e mensagem */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          🎉 Pedido realizado com sucesso!
        </h1>
        <p className="text-gray-600 mb-6">
          Seu pedido foi processado e já está sendo preparado. Agradecemos pela
          preferência!
        </p>

        {/* Detalhes do pedido */}
        <div className="bg-gray-50 p-4 rounded-lg mb-6 text-left">
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Número do pedido:</span>
            <span className="font-medium text-gray-800">#15423</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Total:</span>
            <span className="font-medium text-gray-800">R$ 47,90</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Previsão de entrega:</span>
            <span className="font-medium text-gray-800">40-50 min</span>
          </div>
        </div>

        {/* Ações */}
        <div className="flex flex-col space-y-4">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-indigo-500 transition">
            <Link to="/" className="flex items-center justify-center">
              🏠 Voltar para a página inicial
            </Link>
          </button>

          <button className="border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg font-bold hover:bg-indigo-50 transition">
            <Link to="/pedidos" className="flex items-center justify-center">
              📦 Acompanhar pedido
            </Link>
          </button>
        </div>

        {/* Mensagem adicional */}
        <p className="mt-6 text-sm text-gray-500">
          Qualquer dúvida, entre em contato pelo nosso WhatsApp: (98) 98765-4321
        </p>
      </div>
    </div>
  );
};

export default PedidoRealizado;
